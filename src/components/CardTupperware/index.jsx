import React from "react";
import styles from "./CardTupperware.module.scss";

const CardTupperware = ({ imageUrl, title, price }) => {
  return (
    <div className={styles.root}>
      <div className={styles.mainCard}>
        <div className={styles.img}>
          <img width={250} height={230} src={imageUrl} alt="bottle" />
        </div>
        <p>{title}</p>
        <h3>{price} р.</h3>
        <button>В корзину</button>
      </div>
    </div>
  );
};
export default CardTupperware;
