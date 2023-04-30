import React from "react";
import styles from "./Cart.module.scss";
import CartBlock from "../CartBlock";
import CartEmpty from "../CartEmpty";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className={styles.root}>
      <h1>Корзина</h1>
      <Link to={"/"}>
        <span className={styles.transition}>Перейти на главную страницу</span>
      </Link>
      <div className={styles.conteiner}>
        {/* <CartEmpty /> */}
        <CartBlock />
        <CartBlock />
        <CartBlock />
        <CartBlock />
      </div>
      <div className={styles.total}>
        <div className={styles.totalPrice}>
          <span>Количество:</span>
          <span>Итого:</span>
        </div>
        <div className={styles.button}>
          <button>Оформить заказ</button>
          <button>Очистить корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
