// const imgSrc = `https://olbm.mypinata.cloud/ipfs/Qma27YVmbBknqbeEGUPhW1Mjyj4dVYDwF8SnZMaBi3umka/${ranNum}.png`;
const imgSrc = `${process.env.PUBLIC_URL}/images/sheep.jpg`;

function Intro({ mintedNft, holders }) {
  return (
    <div className="bg-grass h-56 pt-[100px] ">
      <div>
        <div className=" max-w-screen-xl mx-auto relative pl-2 ">
          <img
            className="absolute z-10 w-36 h-36 rounded-full  shadow-md bg-gray-50 p-1"
            src={imgSrc}
            alt="profile"
          />
          <div className="bg-gray-100  flex justify-center items-center w-36 h-36 rounded-full">
            Loding...
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pl-2">
        <div className="font-bold text-4xl mt-2">SHEEP</div>
        <div className="text-gray-700 mt-2 ">
          실제로 양을 보면 처음 5초 정도 귀엽습니다. 대게는 먹이를 사수하러
          저돌적으로 달려오기 때문입니다. <br />
          SHEEP 시리즈는 양의 공격적인 모습은 꽁꽁 감춘 채 귀엽고 뚝딱이는
          모습만을 담아냈습니다.
        </div>
        <div className="flex mt-4">
          <div className="flex flex-col justify-center items-center px-1">
            <div className="font-bold text-lg">Mumbai</div>
            <div className="text-gray-700">네트워크</div>
          </div>

          <div className="flex flex-col justify-center items-center ml-4">
            <div className="font-bold text-lg">{mintedNft}</div>
            <div className="text-gray-700">총 아이템</div>
          </div>
          <div className="flex flex-col justify-center items-center ml-4">
            <div className="font-bold text-lg">{holders}</div>
            <div className="text-gray-700">Holders</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
