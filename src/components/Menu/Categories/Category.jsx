import styles from "../Menu.module.css";

const Category = ({ onChangeSelectedCategory, category }) => {
  return (
    <div
      className={styles.catItem}
      onClick={() => onChangeSelectedCategory(category.type)}
    >
      <img src={category.src} alt="" />
      <p className={styles.categoriesText}>{category.name}</p>
    </div>
  );
};

export default Category;
