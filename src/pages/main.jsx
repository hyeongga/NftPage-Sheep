import Intro from "../components/Intro";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import Nfts from "../components/Nfts";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

function Main({ account }) {
  const [totlaNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(0);
  const [holders, setHolders] = useState(0);

  const getTotlaNft = async () => {
    try {
      if (!contract) return;
      const response = await contract.methods.totalNft().call();
      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;
      const response = await contract.methods.mintedNft().call();
      setMintedNft(response);
      setPage(Math.ceil(parseInt(response) / 5));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotlaNft();
    getMintedNft();
  });

  return (
    <div className="min-h-screen">
      <div className="h-56 pb-[400px] mb-10 ">
        <Intro totlaNft={totlaNft} mintedNft={mintedNft} />
      </div>
      <div className=" mb-8 h-[500px]">
        <Nfts mintedNft={mintedNft} page={page} />
      </div>
    </div>
  );
}
export default Main;
