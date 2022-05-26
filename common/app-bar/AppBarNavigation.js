import styles from "./styles/AppBarNavigation.module.css";

export default function AppBarNavigation() {
  return(
    <nav className={styles.appBarNavigation}>
      <div className={styles.appBarNavigationButton}>
        <div>
          <h3>HOME</h3>
        </div>
      </div>
      <div className={styles.appBarNavigationButton}>
        <div>
          <h3>POPULAR</h3>
        </div>
      </div>
      <div className={styles.appBarNavigationButton}>
        <div>
          <h3>ALL</h3>
        </div>
      </div>
      <div className={styles.appBarNavigationButton}>
        <div>
          <h3>RANDOM</h3>
        </div>
      </div>
    </nav>
  );
}
