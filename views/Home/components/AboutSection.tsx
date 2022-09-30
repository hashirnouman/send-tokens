import Image from "next/image";
import React from "react";
import { H3 } from "../../../components/Text/H3";
import { Paragraph } from "../../../components/Text/Paragraph";
import { Title } from "../../../components/Title/Title";
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
        <div style={{ marginLeft: "20px" }}>
          <H3>ABOUT US</H3>
          <h1 style={{ fontSize: "70px" }}>
            Build your dream <br /> website today
          </h1>
          <p style={{ width: "280px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reiciendis necessitatibus dicta non nulla voluptates a reprehenderit
            tempore tenetur voluptas?
          </p>
        </div>
      </AboutWrapper>
    </div>
  );
};

export default AboutSection;
