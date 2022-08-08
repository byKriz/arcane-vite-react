import styles from "./Card.module.scss";

export function Card({ image, name, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContent}>
        <span className={styles.overlay}></span>
        <div className={styles.cardImage}>
          <img src={image} alt={name} className={styles.cardImg}/>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
