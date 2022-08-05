// import { FaGithubAlt } from "react-icons/fa";
import styles from "./Icon.module.scss";

export function Icon({ link, iconName }) {
  const github = "fa-brands fa-github-alt";
  const twitter = "fa-brands fa-twitter";

  if (iconName === "github") {
    return (
      <a href={link} className={styles.iconContainer} target="_blank">
        <i className={`${github} ${styles.icon}`}></i>
      </a>
    );
  } else if (iconName === "twitter") {
    return (
      <a href={link} className={styles.iconContainer} target="_blank">
        <i class={`${twitter} ${styles.icon}`}></i>
      </a>
    );
  }
  return (
    <a href={link} className={styles.iconContainer} target="_blank">
      <i className={`${github} ${styles.icon}`}></i>
    </a>
  );
}
