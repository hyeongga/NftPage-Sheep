import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ChakraProvider,
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

const Profile = ({ account, onClickBtn }) => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  const [myNft, setMyNft] = useState(account);
  const [myBalance, setMyBalance] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      {account ? (
        <Menu>
          <MenuButton as={Button} colorScheme="(black&{white}">
            <CgProfile size={30} onClick={onOpen} />
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuGroup title="MATIC">
                <MenuItem>jkj</MenuItem>
              </MenuGroup>
              <MenuGroup title="NFT">
                <MenuItem> {myNft}</MenuItem>
              </MenuGroup>
            </MenuGroup>
          </MenuList>
        </Menu>
      ) : (
        <CgProfile size={30} onClick={onOpen} />
      )}

      <Modal size="xs" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <Button
            mb="4"
            onClick={() => {
              {
                onClickBtn();
                onClose();
              }
            }}
          >
            메타마스크 연결하기
          </Button>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
export default Profile;
