import Image from "next/Image";
import styles from "./styles/VoteDisplay.module.css";

export default function VoteDisplay() {

  return (
    <div className={styles.voteDisplay}>
      <div className="vote-arrow-up">
        <Image className={styles.voteIcon} src="/upvote.svg" width="20px" height="30px"></Image>
      </div>
      <div className={styles.votePoints}>{10}</div>
      <div className="vote-arrow-down">
        <Image className={styles.voteIcon} src="/downvote.svg" width="20px" height="30px"></Image>
      </div>
    </div>
  );
}
