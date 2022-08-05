import styles from "./Card.module.scss";

export function Card({ image, name, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        <img src={image} />
      </div>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
