import { useEffect, useState } from "react";
import NftCard from "./NftCard";
import axios from "axios";

function Nfts({ page, mintedNft }) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const onClickPage = (i) => () => {
    console.log(i);
    setSelectedPage(i + 1);
    getNfts(i + 1);
  };

  const getNfts = async (p) => {
    try {
      setNfts();
      let nftArray = [];
      for (let i = 0; i < 5; i++) {
        const tokenId = i + 1 + (p - 1) * 5;
        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );
        if (parseInt(mintedNft) >= tokenId) {
          nftArray.push({ tokenId, metadata: response.data });
        }
      }
      // console.log(nftArray);
      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const pageComp = () => {
    let pageArray = [];
    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          className={`${i !== 0 && "ml-4"} ${
            i + 1 === selectedPage ? "bg-green-500" : "bg-emerald-200"
          } w-2 h-2 px-2 py-2 rounded-full`}
          key={i}
          onClick={onClickPage(i)}
        ></button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    getNfts(1);
  }, [mintedNft]);

  useEffect(() => console.log(nfts), [nfts]);
  return (
    <div className="max-w-screen-xl mx-auto mt-8 pb-20">
      <div>
        <div className="flex justify-center items-center">
          {nfts ? (
            nfts.map((v, i) => {
              return (
                <NftCard
                  key={i}
                  tokenId={v.tokenId}
                  metadata={v.metadata}
                  mintedNft={mintedNft}
                />
              );
            })
          ) : (
            <button className="text-3xl h-96 flex items-center">
              ... 로딩중 ...
            </button>
          )}
        </div>

        <div className="flex justify-center my-8">{pageComp()}</div>
      </div>
    </div>
  );
}

export default Nfts;
