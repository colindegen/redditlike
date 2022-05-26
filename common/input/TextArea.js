import styles from "./styles/TextArea.module.css";
import Button from "../buttons/Button";

export default function TextArea() {
  return (
	<div className={styles.container}>
	  <textarea placeholder="Was denkst du dazu?" className={styles.textArea}>
	  </textarea>
	  <div className={styles.toolbar}>
		<Button text="Antworten" />
	  </div>
	</div>
	);
}