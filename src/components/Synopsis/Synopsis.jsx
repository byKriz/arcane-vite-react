import styles from "./Synopsis.module.scss";
import poster from "../../assets/images/ArcanePoster.png"

export function Synopsis({ children }) {
  return (
    <>
      {children}
      <div className={styles.main}>
        <div className={styles.synopsisContainer}>
          <div className={styles.poster}>
            <img src={poster}></img>
          </div>
        </div>
      </div>
    </>
  );
}
