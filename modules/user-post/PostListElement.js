import VoteDisplay from "../vote/VoteDisplay.js";
import styles from './styles/PostListElement.module.css'
import Link from 'next/link'

export default function PostListElement({postData}) {
  return(
    <li>
      <Link href={"/posts/" + postData.id} passHref>
        <div className={styles.postListElement}>
          <div>
            <VoteDisplay />
          </div>
          <div>
            <div>
              <p className={styles.info}>Gepostet von Test</p>
            </div>
            <p className={styles.title}>{postData.title}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
