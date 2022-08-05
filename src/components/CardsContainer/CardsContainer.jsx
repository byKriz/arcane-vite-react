import styles from "./CardsContainer.module.scss";

export function CardsContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
