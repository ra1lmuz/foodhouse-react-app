import styles from "../Menu.module.css";

const Tovar = ({ tovar }) => {
  return (
    <div className={styles.tovarItem}>
      <div className={styles.tovarImg}>
        <img src={tovar.src} alt="" />
      </div>
      <div className={styles.tovarText}>
        <h3 className={styles.tovarTitle}>{tovar.name}</h3>
        <p className={styles.tovarPortion}>{tovar.portion}</p>
        <p className={styles.tovarGram}>{tovar.gram}</p>
        <div className={styles.tovarButton}>Добавить в корзину</div>
      </div>
    </div>
  );
};

export default Tovar;
