import styles from "./styles/IconButton.module.css";

export default function IconButton({backgroundColor,iconSrc,text,color,fontSize,variant}) {


  return(
    <div>
      <button style={{ backgroundColor: backgroundColor}} className={styles.iconButton + " " + styles[variant]}>
          <div className={styles.container}>
            <img className={styles.icon} width="20em" height="18em" layout="responsive" src={iconSrc}></img>
            <span style={{ color: color, fontSize:fontSize}}>{text}</span>
          </div>
        </button> 
    </div>
  );
}
