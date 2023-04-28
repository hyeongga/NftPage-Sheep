import { useEffect, useState } from "react";
import { GiHighGrass } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function Header({ account, setAccount }) {
  const onClickBtn = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 text-2xl ">
      <Link to="/">
        <div className="flex items-center">
          {/* <GiSheep className="text-gray-500" size={40} /> */}
          <GiHighGrass className="text-gray-500" size={30} />
          <div className="ml-2 text-3xl">UMMEH</div>
        </div>
      </Link>

      <div className="flex   w-64 h-10 justify-evenly items-center">
        <Link to="/shopping">
          <AiOutlineShoppingCart size={30} />
        </Link>
        <div>
          {account ? (
            <div className=" px-2 py-0 bg-green-900 opacity-90 rounded-3xl text-white text-[20px] font-normal">
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          ) : (
            <button className="flex items-center" onClick={onClickBtn}>
              <BsWallet2 size={30} />
            </button>
          )}
        </div>
        {/* <CgProfile size={30} /> */}
        <Profile account={account} />
      </div>
    </div>
  );
}
export default Header;
