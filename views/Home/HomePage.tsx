import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import Navbar from "./components/Navbar";
import styles from "./styles/HomePage.module.css";
import { ethers } from "ethers";
import { Input } from "../../components/Input/Input";
import { Form } from "../../components/Warppers/Form";
import { MSP } from "../../components/MSP/MSP";
import { Title } from "../../components/Title/Title";
import { Services } from "../../components/Services/Services";
import person1 from "../../images/vvv.jpg";
import ServicesCard from "./components/ServicesCard";
import { Container } from "../../components/Warppers/Container";
import { Grid } from "../../components/Warppers/Grid";
import { TextSquare } from "../../components/Square/TextSquare";
import Image from "next/image";
import { Paragraph } from "../../components/Text/Paragraph";
import AboutSection from "./components/AboutSection";
import Contactus from "./components/Contactus";
import QuoteCard from "../../components/quotecard/QuoteCard";
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
  const [connected, setConnected] = useState(false);
  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: React.SetStateAction<null>[]) => {
        setAccount(accounts[0]);
        setConnected(true);
      })
      .catch((error: any) => {
        alert("Something went wrong maybe extension is not installed");
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
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <div className={styles.hero}>
        <Form>
          <Input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
          <Input
            type="text"
            value={ammount}
            onChange={(e) => {
              setAmmount(e.target.value);
            }}
            required
          />
          {connected && <Button onClick={sendToken}> Send ether</Button>}
          <Button onClick={connectWallet}>Connect wallet</Button>
        </Form>
        <MSP>
          Mobile App
          <br />
          Development
        </MSP>
      </div>
      <div style={{ padding: "50px" }}>
        <Title>We create super-awesome designs</Title>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident
        </p>
        <Container>
          <Grid>
            <ServicesCard text="Amazing Design" />
            <ServicesCard text="Amazing Design" />
            <ServicesCard text="Amazing Design" />
            <ServicesCard text="Amazing Design" />
          </Grid>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: "30px",
        }}
      >
        <TextSquare>
          <div>
            <h1>
              Why choose UX studio as your <br />
              app design partner?
            </h1>
            <Paragraph>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat{" "}
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </Paragraph>
            <Button>Learn More</Button>
          </div>
        </TextSquare>
        <div className={styles.img}>
          <Image src={person1} alt="person" width={550} height={550} />
        </div>
      </div>
      <AboutSection />
      <Contactus />
      <Title>How we help people</Title>
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        With serious savings, a seamless online application, and unique <br />
        community benefits, our members have a lot to say about our loans!
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
      </div>
    </div>
  );
};

export default HomePage;
