import styles from "./styles/Comment.module.css";
import VoteDisplay from "../vote/VoteDisplay";
import UserDisplay from "../../common/user/UserDisplay";
import IconButton from "../../common/buttons/IconButton";
import React from "react";
import TextArea from "../../common/input/TextArea";

export default function Comment({text, user, answers}) {

  const [showAnswerContainer, setShowAnswerContainer] = React.useState(false);

  const onClickMessage = (event) => {
	setShowAnswerContainer(!showAnswerContainer);
  }

  const onClickOptions = (event) => {

  }

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
		  <div className={styles.bottomToolbar}>
			<IconButton onClick={onClickMessage} iconSrc={"/message.svg"} text="antworten" />
			<IconButton onClick={onClickOptions} iconSrc={"/option.svg"} backgroundColor="white" />
		  </div>
		</div>
	  </div>
	  {showAnswerContainer ?
		<div>
		  <TextArea />
		</div>
		:
		null
		}
	  <ol>
		{answers != undefined ? answers.map((answer) => <li style={{borderLeft:"1px solid lightgray", paddingLeft: "2em" }} key={answer.user}><Comment text={answer.text} user={answer.user} answers={answer.answers}/></li>) : null}
	  </ol>
	</div>
	);
}