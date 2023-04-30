import React from "react";
import CardTupperware from "../CardTupperware";
import Skeleton from "../CardTupperware/Skeleton";
import Sort from "../Sort";
import logo from "../../assets/img/tupperware.svg";
import styles from "./Main.module.scss";

const Main = () => {
  const [tupperware, setTupperware] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [value, setValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://639c95a242e3ad6927364e55.mockapi.io/tupperware")
      .then((res) => res.json())
      .then((res) => {
        setTupperware(res);
        setIsLoading(false);
      });
  }, []);

  // const filterArray = tupperware.filter((item) => {
  //   return item.title.toLowerCase().includes(value.toLocaleLowerCase());
  // });

  console.log(tupperware);

  return (
    <div className={styles.root}>
      <div className={styles.catalog}>
        {/* <select value={value} onChange={(e) => setValue(e.target.value)}>
          {tupperware.map((item) => {
            return <option>{item.title}</option>;
          })}
        </select> */}
        <h1>Каталог</h1>
        <img width={160} height={35} src={logo} alt="logo" />
        <span>999 товаров</span>
      </div>
      <Sort />
      <div className={styles.card}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : tupperware.map((obj) => <CardTupperware key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Main;
