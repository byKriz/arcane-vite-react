import styles from "./IconsContainer.module.scss";

export function IconsContainer({ children }) {
  return <div className={styles.iconsContainer}>{children}</div>;
}
