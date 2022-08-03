import { useState } from "react";
import styles from "./Menu.module.scss";

export function Menu() {
  const [slide, setSlide] = useState(false);
  const handleSlide = () => {
    setSlide(!slide);
  };

  const LINKS = [
    { name: "Home", link: "/" },
    { name: "Characters", link: "/" },
    { name: "Locations", link: "/" },
    { name: "Social", link: "/" },
  ];

  return (
    <>
      <div className={styles.menu}>
        <div className={slide ? `${styles.menuIcon} ${styles.deactivete}` : `${styles.menuIcon}`} onClick={handleSlide}></div>
      </div>
      <nav
        className={
          slide ? `${styles.navMenuItems} ${styles.activate}`: `${styles.navMenuItems}`
        }
      >
        <ul className={styles.menuContainer}>
          {LINKS.map((link) => (
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
