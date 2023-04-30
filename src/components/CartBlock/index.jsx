import React from "react";
import bottle from "../../assets/imgProduct/ecoBottle.jpeg";
import increment from "../../assets/img/increment.svg";
import decrement from "../../assets/img/decrement.png";
import clear from "../../assets/img/delete.svg";
import styles from "./CartBlock.module.scss";

const CartBlock = () => {
  return (
    <div className={styles.root}>
      <img width={100} height={100} src={bottle} alt="bottle" />
      <span>Название товара</span>
      <img width={30} height={30} src={decrement} alt="minus" />
      <span>7</span>
      <img width={30} height={30} src={increment} alt="plus" />
      <img width={30} height={30} src={clear} alt="clear" />
      <span>999 p.</span>
    </div>
  );
};

export default CartBlock;
