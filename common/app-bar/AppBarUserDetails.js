import styles from "./styles/AppBarUserDetails.module.css";
import Image from "next/Image";

export default function AppBarUserDetails() {
  return(
    <div className={styles.appBarUserDetails}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image  src="/user_profile_icon.svg" width="40px" height="40px" ></Image>
        </div>
        <div className={styles.text}>
          <p className={styles.userName}>
            testuser
          </p>
        </div>
      </div>
    </div>
  );
}
