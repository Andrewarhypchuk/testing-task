import React from "react";
import styles from "./Header.module.css";
import logo from '../Assets/images/Logo.svg';

const Header = () => {

    return <div className={styles.header}>
               <img className="header__logo-img" src={logo} alt="logo"/>
           </div>

};

export default Header