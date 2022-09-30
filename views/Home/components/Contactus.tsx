import React from "react";
import { ContactUsWrapper } from "../../../components/Warppers/ContactUsWrapper";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import styles from "./styles/Contactus.module.css";
import { Title } from "../../../components/Title/Title";
import { Button } from "../../../components/Button/Button";
type Props = {};

const Contactus = (props: Props) => {
  return (
    <>
      <ContactUsWrapper>
        <div style={{ backgroundColor: "white", display: "flex", alignItems:'baseline' }}>
          <div className={styles.circle}>
            <BsFillPhoneVibrateFill size={47} color="white" />
          </div>
          <div>
            <Title>Let s Get Started</Title>
            <p>
              Have a project or partnership in mind? Contact us today for a free
              consultation.
            </p>
          </div>
          <div>
            <Button>CONTACT US</Button>
          </div>
        </div>
      </ContactUsWrapper>
      
    </>
  );
};

export default Contactus;
