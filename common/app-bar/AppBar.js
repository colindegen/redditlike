import styles from "./styles/AppBar.module.css";
import AppBarUserDetails from "./AppBarUserDetails";
import AppBarNavigation from "./AppBarNavigation";
import AppBarHeader from "./AppBarHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AppBar() {

  return (
    <div className={styles.appBar}>
      <FontAwesomeIcon icon="fa-solid fa-fire" />
      <AppBarHeader />
      <AppBarNavigation />
      <AppBarUserDetails />
    </div>
  )
}
