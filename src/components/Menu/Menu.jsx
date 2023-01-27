import styles from "./Menu.module.css";

import Tovar from "./Tovar/Tovar";
import Category from "./Categories/Category";
import { useEffect, useState } from "react";

import { initialCategories } from "../data/categories";
import { initialProducts } from "../data/products";

const Menu = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);

  const [selectedCategory, setSelectedCategory] = useState("none");

  const onChangeSelectedCategory = (type) => {
    setSelectedCategory(type);
  };

  useEffect(() => {
    setProducts((prevState) => {
      prevState = [...prevState];

      prevState = initialProducts.filter(
        (product) => product.type === selectedCategory
      );

      if (selectedCategory === "none") {
        prevState = initialProducts;
      }

      return prevState;
    });
  }, [selectedCategory]);

  return (
    <section className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.categories}>
          <h1 className={styles.title}>Наше меню</h1>

          <div className={styles.categoriesBox}>
            {categories.map((category) => {
              return (
                <Category
                  category={category}
                  onChangeSelectedCategory={onChangeSelectedCategory}
                />
              );
            })}
          </div>

          <div className={styles.tovarBox}>
            {products.map((tovar) => {
              return <Tovar tovar={tovar} />;
            })}
          </div>
        </div>
        <div className={styles.buttonMore}>Показать ещё</div>
      </div>
    </section>
  );
};

export default Menu;