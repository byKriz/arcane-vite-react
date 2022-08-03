import { useState } from "react";
import styles from "./Menu.module.scss";

export function Menu() {
  const [slide, setSlide] = useState(false);
    const handleSlide = () => {
        setSlide(!slide);
    }


  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menuIcon} onClick={handleSlide}></div>
      </div>
      <nav className={slide ? `${styles.navMenuItems} ${styles.activate}` : styles.navMenuItems}>
        <ul className={styles.menuContainer}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">CHARACTERS</a>
          </li>
          <li>
            <a href="/">LOCATIONS</a>
          </li>
          <li>
            <a href="/">SOCIAL</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
