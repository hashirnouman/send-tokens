import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import Navbar from "./components/Navbar";
import styles from "./styles/HomePage.module.css";
import { ethers } from "ethers";
import { Input } from "../../components/Input/Input";
import { Center } from "../../components/Center/Center";
type Props = {};
const infura = "https://goerli.infura.io/v3/7ccf265d416a40349797f20ec7792520";
const provider = new ethers.providers.JsonRpcProvider(infura);
const privateKey1 =
  "904e1f1422faf378721db62f187e9aa9ae934c53afd46170ebaa8f496be66bf2";
const wallet = new ethers.Wallet(privateKey1, provider);
const HomePage = (props: Props) => {
  const [account, setAccount] = useState(null);
  const [address, setAddress] = useState("");
  const [ammount, setAmmount] = useState("");
  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: React.SetStateAction<null>[]) => {
        setAccount(accounts[0]);
      })
      .catch((error: any) => {
        alert("Something went wrong");
      });
  }
  const sendToken = async () => {
    const tx = await wallet.sendTransaction({
      to: address,
      value: ethers.utils.parseEther(ammount),
    });
    await tx.wait();
    if (tx) {
      alert("Transaction successful");
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
        <Center>
          <Input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Input
            type="text"
            value={ammount}
            onChange={(e) => {
              setAmmount(e.target.value);
            }}
          />
          <Button onClick={connectWallet}>Connect wallet</Button>
          <Button onClick={sendToken}> Send ether</Button>
        </Center>
      </div>
    </div>
  );
};

export default HomePage;
