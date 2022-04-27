import styles from "./styles/Button.module.css";

export default function Button({ backgroundColor, iconSrc, text, color, fontSize, variant }) {
  return (
    <div>
      <button style={{ backgroundColor: backgroundColor }} className={styles.button + " " + styles[variant]}>
        <div className={styles.container}>
          <span style={{ color: color, fontSize: fontSize }}>{text}</span>
        </div>
      </button>
    </div>
  );
}