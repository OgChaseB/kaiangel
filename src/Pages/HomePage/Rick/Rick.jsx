import styles from "./Rick.module.css";

function Rick({ product }) {
  return (
    <>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img className={styles.img} src={product.image} alt={product.name} />
          <div className={styles.card_text}>
            <p className={styles.zhen}>Женские</p>
            <h5 className={styles.name_crossovok}>{product.name}</h5>
            <p>
              {product.description && product.description.length > 150
                ? product.description.substring(0, 150) + "..."
                : product.description || "Описание отсутствует"}
            </p>
            <div className={styles.price_btn}>
              <p className={styles.price}>19 890Р</p>
              <button className={styles.btn}>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rick;
