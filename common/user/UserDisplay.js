import styles from "./styles/UserDisplay.module.css";
import Image from "next/Image";

export default function AppBarUserDetails({name}) {
  return(
      <div className={styles.container}>
        <div className={styles.image}>
          <Image  src="/user_profile_icon.svg" width="40px" height="40px" ></Image>
        </div>
        <div className={styles.text}>
          <p className={styles.userName}>
            {name}
          </p>
        </div>
      </div>
  );
}
