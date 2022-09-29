import Image from "next/image";
import React from "react";
import logo from "../../../images/default-logo.png";
import styles from "./styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div>
        <GiHamburgerMenu size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
