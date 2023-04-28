import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  // const [like, setLike] = useState(false);
  // const [likeArray, setLikeArray] = useState([]);
  // console.log("sdfsfd", tokenId);
  // const onClickShop = () => {
  //   setLike(!like);
  //   if (like == true) {
  //     setLikeArray([...likeArray, [tokenId]]);
  //     console.log(likeArray);
  //   }
  // };

  return (
    <div className="bg-gray-100 pt-2 px-3 pb-4 mx-3 rounded-2xl relative hover:shadow-md hover:shadow-lime-700">
      <img
        className="rounded-2xl h-52 w-52"
        src={metadata.image}
        alt={metadata.name}
      />
      <div className="mt-4 text-xl font-bold flex items-center px-4 text-gray-700">
        SHEEP# {tokenId}
      </div>
      <div className="mt-2 text-lg font-semibold px-4">0.02 MATIC</div>
      <div className=" mt-4 text-xl flex justify-between items-center px-2">
        <button className="w-14 flex justify-center">
          <AiOutlineShoppingCart size={25} />
        </button>

        <Link to={`${tokenId}`}>
          <button
            disabled={parseInt(mintedNft) < tokenId}
            className="bg-gray-50 text-gray-950 px-4 py-2 rounded-xl hover:bg-gray-300"
          >
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NftCard;
