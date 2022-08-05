import styles from "./Layout.module.scss";

export  function Layout({children}) {
  return (
    <main className={styles.main}>
        {children}
    </main>
  )
}
