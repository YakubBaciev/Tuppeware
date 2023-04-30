import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/tupperware.svg";
import adress from "../../assets/img/adress.svg";
import toComeIn from "../../assets/img/toComeIn.svg";
import cart from "../../assets/img/cart.svg";
import clear from "../../assets/img/clear.svg";
import search from "../../assets/img/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.root}>
      <Link to={"/"}>
        <div className={styles.headerLogo}>
          <img width={300} height={80} src={logo} alt="logo" />
        </div>
      </Link>
      <div className={styles.headerSearch}>
        <img
          className={styles.searche}
          width={25}
          height={25}
          src={search}
          alt="search"
        />
        <input></input>
        <img
          className={styles.clear}
          width={30}
          height={30}
          src={clear}
          alt="clear"
        />
      </div>
      <div className={styles.headerInfo}>
        <div className={styles.adress}>
          <img width={30} height={30} src={adress} alt="adress" />
          <p>Наш адрес</p>
        </div>
        <div className={styles.toComeIn}>
          <img width={30} height={30} src={toComeIn} alt="toComeIn" />
          <p>Войти</p>
        </div>
        <div className={styles.cart}>
          <Link to={"/cart"}>
            <img width={30} height={30} src={cart} alt="cart" />
          </Link>
          <p>Корзина</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
