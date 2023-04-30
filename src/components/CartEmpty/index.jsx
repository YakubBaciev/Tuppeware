import React from "react";
import cart from "../../assets/img/cartEmpty.svg";
import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={styles.root}>
      <img src={cart} alt="cart" />
      <p>Корзина пустая</p>
    </div>
  );
};
export default CartEmpty;
