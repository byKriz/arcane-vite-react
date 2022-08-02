import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="/">Arcane</a>
        </div>
        <nav className={styles.nav_container} id="nav_container">
          <div className={styles.nav_items}>
            <a href="/">Home</a>
            <a href="/">Characters</a>
            <a href="/">Locations</a>
            <a href="/">Social</a>
          </div>
        </nav>
        {/* <Menu /> */}
      </header>
    </>
  );
};
