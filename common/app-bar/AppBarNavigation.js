import styles from "./styles/AppBarNavigation.module.css";

export default function AppBarNavigation() {
  return(
    <nav className={styles.appBarNavigation}>
      <div className={styles.appBarNavigationButton}>
        <div>
          <h4 className="buttonText">HOME</h4>
        </div>
      </div>
      <div className={styles.appBarNavigationButton}>
        <div>
          <h4 className="buttonText">POPULAR</h4>
        </div>
      </div>
      <div className={styles.appBarNavigationButton}>
        <div>
          <h4 className="buttonText">ALL</h4>
        </div>
      </div>
      <div className={styles.appBarNavigationButton}>
        <div>
          <h4 className="buttonText">RANDOM</h4>
        </div>
      </div>
    </nav>
  );
}
