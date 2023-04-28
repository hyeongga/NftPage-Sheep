import {
  ChakraProvider,
  Modal,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  Button,
  Center,
} from "@chakra-ui/react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

const Profile = ({ account }) => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  const [myNft, setMyNft] = useState("지갑을 눌러 로그인해 주세요");

  // const [myBalance, setMyBalance] = useState();

  // const getBalance = async () => {
  //   try {
  //     if (!account || !contract) return;

  //     const balance = await contract.methods.balanceOf(account).call();
  //     console.log("잔액", balance);
  //     setMyBalance(web3.utils.fromWei(balance));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getMyNft = async () => {
    try {
      if (!account || !contract) return;
      const response = await contract.methods.balanceOf(account).call();
      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMyNft();
    // getBalance();
  }, [account]);

  return (
    <ChakraProvider>
      <Menu>
        <MenuButton as={Button} colorScheme="(black&{white}">
          <CgProfile size={30} />
        </MenuButton>
        <MenuList>
          <MenuGroup title="My NFT">
            {/* <MenuGroup title="MATIC">
              <MenuItem>
                {myBalance ? <div>{myBalance} tMatic</div> : "로그인"}
              </MenuItem> 
            </MenuGroup>*/}
            {/* <MenuGroup title="NFT"> */}
            <MenuItem> {myNft}</MenuItem>
            {/* </MenuGroup> */}
          </MenuGroup>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};
export default Profile;
