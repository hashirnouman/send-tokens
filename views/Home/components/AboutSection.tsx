import Image from "next/image";
import React from "react";
import { H3 } from "../../../components/Text/H3";
import { AboutWrapper } from "../../../components/Warppers/AboutWrapper";
import { Container } from "../../../components/Warppers/Container";
import mobile from "../../../images/phone-2-min.png";
import styles from "./styles/About.module.css";
type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div>
      <AboutWrapper>
        <div className={styles["phone-img"]}>
          <Image src={mobile} alt="smart phone" />
        </div>
        <div>
          <H3>About us</H3>
        </div>
      </AboutWrapper>
    </div>
  );
};

export default AboutSection;
