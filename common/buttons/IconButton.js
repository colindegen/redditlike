import styles from "./styles/IconButton.module.css";

export default function IconButton({ onClick, backgroundColor, iconSrc, text, color, fontSize, variant }) {

  return(
    <div>
      <button onClick={onClick} style={{ backgroundColor: backgroundColor}} className={styles.iconButton + " " + styles[variant]}>
          <div className={styles.container}>
            <img className={styles.icon} width="22em" height="30em" layout="responsive" src={iconSrc}></img>
            <h3 style={{ color: color, fontSize:fontSize}}>{text}</h3>
          </div>
        </button> 
    </div>
  );
}
