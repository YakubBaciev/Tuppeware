import React from "react";
import styles from "./Sort.module.scss";
import category from "../../assets/category.json";
import color from "../../assets/color.json";

export const Sort = ({
  categorySelected,
  colorSelected,
  onClickCategorySelected,
  onClickColorSelected,
}) => {
  const [openCategory, setOpenCategory] = React.useState(false);

  const [openColor, setOpenColor] = React.useState(false);

  // const [value, setValue] = React.useState("");

  const onClickCategory = () => {
    setOpenCategory(!openCategory);
  };

  const onClickColor = () => {
    setOpenColor(!openColor);
  };

  // const selectHandler = (e) => {
  //   setValue(e.target.value);
  //   console.log(e.target.value);
  // };

  return (
    <div className={styles.root}>
      {/* <select value={value} onChange={selectHandler}>
        <option>fggff</option>
        <option>kkkkk</option>
        <option>lllll</option>
      </select> */}
      <div onClick={onClickCategory} className={styles.category}>
        <b>Категории: </b>
        <span>{category[categorySelected].name}</span>
        {openCategory && (
          <ul>
            {category.map((obj, index) => (
              <li onClick={() => onClickCategorySelected(index)}>
                {`${index + 1}) `}
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div onClick={onClickColor} className={styles.color}>
        <b>Цвет: </b>
        <span>{color[colorSelected].color}</span>
        {openColor && (
          <ul>
            {color.map((obj, index) => (
              <li onClick={() => onClickColorSelected(index)}>
                {`${index + 1}) `}
                {obj.color}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.price}>
        <b> Цена</b>
        <span></span>
      </div>
    </div>
  );
};

export default Sort;
