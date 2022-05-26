import styles from "./styles/LinkButton.module.css";
import Link from "next/Link";

export default function LinkButton({ backgroundColor, iconSrc, text, color, fontSize, variant, href, ref }) {
  return (
    <div style={{ backgroundColor: backgroundColor }} className={styles.button + " " + styles[variant]}>
      <div className={styles.container}>
        <h4 style={{ color: color, fontSize: fontSize }}>{text}</h4>
      </div>
    </div>
	);
}