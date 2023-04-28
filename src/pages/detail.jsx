import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaChessRook } from "react-icons/fa";

const Detail = () => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );
      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => console.log(metadata), [metadata]);
  return (
    <div className=" min-h-screen flex justify-center  items-center relative ">
      <div className=" opacity-50 bg-craft w-[1280px] mx-auto py-80"></div>
      <div className=" absolute flex flex-col xl:flex-row justify-center items-center ">
        {metadata ? (
          <>
            <div className="max-w-[280px]">
              <img className="rounded-2xl" src={metadata.image} alt="NFT" />
            </div>

            <div className="m-8">
              <div className="text-4xl font-extrabold flex items-center">
                <div>{metadata.name}</div>
              </div>
              <div className="mt-4 font-semibold text-2xl">
                {metadata.description}
              </div>
              <ul className="grid grid-cols-4 gap-2 py-8 bg-gray-200 pt-2 px-3 pb-4 mt-8 rounded-2xl text-center">
                {metadata.attributes.map((v, i) => {
                  return (
                    <li key={i} className="mx-4">
                      <div>{v.trait_type}</div>
                      <div className="mt-2 border-t-2 font-bold">{v.value}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        ) : (
          <div>로딩중입니다...</div>
        )}
      </div>
    </div>
  );
};

export default Detail;
