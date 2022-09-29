import React from "react";
import tick from "../../../images/tick.png";
import Image from "next/image";
import { Services } from "../../../components/Services/Services";
import styles from "../styles/HomePage.module.css";
import { H3 } from "../../../components/Text/H3";
type Props = {
  text: string;
};

const ServicesCard = ({ text }: Props) => {
  return (
    <>
      <Services>
        <div className={styles.circle}>
          <Image src={tick} alt="tick" />
        </div>
        <div>
          <H3>{text}</H3>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
      </Services>
    </>
  );
};

export default ServicesCard;
