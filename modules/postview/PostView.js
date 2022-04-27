import styles from "./styles/PostView.module.css";
import VoteDisplay from "../vote/VoteDisplay";
import Comment from "./Comment";

export default function PostView({ postData }) {

  const comments = [
    {
      answers: [
        {
          answers: [
            { user: "troll2", votes: 3, text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda tem quibusdam et "}
          ], user: "trollanswerer", votes: 3, text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda tem quibusdam et "
        }
      ], user: "topcommenter", votes: 10, text: "aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    { answers: [], user: "xdcommenter", votes: 9, text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et " },
    { answers: [], user: "testplsignore", votes: 0, text: "ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quae" },
  ];

  if(postData != undefined) {
    return(
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <div className={styles.titleContainer}>
            <VoteDisplay />
            <h3 className={styles.title}>{postData.title}</h3>
          </div>
          <div className={styles.content}>
            <span>{postData.selftext}</span>
          </div>
        </div>
        <ol>
          {comments.map((comment) => <li key={comment.user}><Comment depth={1} user={comment.user} answers={comment.answers} text={comment.text}/></li>)}
        </ol>
      </div>
    );
  } else {
    return(
      <div>
        <h3>It seems that nothing is here..</h3>
      </div>
    );
  }

}
