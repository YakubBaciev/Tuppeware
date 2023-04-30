import React from "react";
import styles from "./Footer.module.scss";
import tupperwareLogo from "../../assets/img/tupperware.svg";
import telegram from "../../assets/img/telegram.png";
import whatsapp from "../../assets/img/whatsapp.png";
import instagram from "../../assets/img/instagram.png";

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.footerLogo}>
        <div className={styles.logo}>
          <img width={200} height={50} src={tupperwareLogo} alt="logo" />
        </div>
        <div className={styles.socialNetwork}>
          <img width={36} height={36} src={telegram} alt="telegramLogo" />
          <img width={40} height={40} src={whatsapp} alt="whatsappLogo" />
          <img width={37} height={37} src={instagram} alt="insatgramLogo" />
        </div>
      </div>
      <div className={styles.newsCategory}>
        <span>Каталог</span>
        <span>Новости</span>
        <span>Карьера</span>
        <span>О компании </span>
      </div>
    </div>
  );
};

export default Footer;
