import styles from "./Synopsis.module.scss";
import poster from "../../assets/images/ArcanePoster.png";
import { Icon } from "../Icon/Icon";

export function Synopsis({ children }) {
  return (
    <main>
      {children}
      <div className={styles.main}>
        <div className={styles.synopsisContainer}>
          <div className={styles.poster}>
            <img src={poster}></img>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.title}>
              <h1>Arcane</h1>
              <span>A League of Legends Series</span>
            </div>
            <p>
              Based on the world behind League of Legends, Arcane dives into the
              delicate balance between the rich, utopian city of Piltover Crest
              icon.png Piltover and the seedy, oppressed underground of Zaun
              Crest icon.png Zaun. Known across Runeterra as the "city of
              progress," many of the most brilliant minds call these cities
              home. But the creation of hextech, a way for any person to control
              magical energy, threatens that balance. The story follows the
              origins of two iconic League champions-and the power that will
              tear them apart. Like the game on which it is based, Arcane is
              aimed at a "16+" audience and will deal with some more adult
              subject matter.
            </p>
          </div>
        </div>
        <Icon link='https://github.com/byKriz/arcane-vite-react' iconName='github'/>
        <Icon link='https://twitter.com/arcaneshow?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' iconName='twitter'/>
      </div>
    </main>
  );
}
