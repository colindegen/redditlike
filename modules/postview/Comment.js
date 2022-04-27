import styles from "./styles/Comment.module.css";
import VoteDisplay from "../vote/VoteDisplay";
import UserDisplay from "../../common/user/UserDisplay";

export default function Comment({text, user, answers}) {


  return (
	<div>
	  <div className={styles.commentContainer}>
		<div className={styles.topContainer}>
		  <UserDisplay name={user} />
		</div>
		<div className={styles.middleContainer}>
		  <VoteDisplay />
		  <p className={styles.commentText}>{text}</p>
		</div>
		<div className={styles.bottomContainer}>
		</div>
	  </div>
	  <ol>
		{answers != undefined ? answers.map((answer) => <li style={{borderLeft:"1px dashed gray", paddingLeft: "2em" }} key={answer.user}><Comment text={answer.text} user={answer.user} answers={answer.answers}/></li>) : null}
	  </ol>
	</div>
	);
}