// import { FaGithubAlt } from "react-icons/fa";
import styles from "./Icon.module.scss";

export function Icon({ link, iconName }) {
  if (iconName === "github") {
    return (
      <a href={link} className={styles.iconContainer} target="_blank">
        <i className="fa-brands fa-github-alt"></i>
      </a>
    );
  } else if (iconName === "twitter") {
    return (
      <a href={link} className={styles.iconContainer} target="_blank">
        <i class="fa-brands fa-twitter"></i>
      </a>
    );
  }
  return (
    <a href={link} className={styles.iconContainer} target="_blank">
      <i className="fa-brands fa-github-alt"></i>
    </a>
  );
}
