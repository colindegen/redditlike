import PostList from "../user-post/PostList";
import PostListElement from "../user-post/PostListElement";
import styles from "./styles/FrontPage.module.css";
import Image from "next/Image";
import Button from "../../common/buttons/Button";
import IconButton from "../../common/buttons/IconButton";
import LinkButton from "../../common/buttons/LinkButton";
import Link from 'next/link'

export default function FrontPage({data}) {

  const posts = data.data.map((post) => <PostListElement key={post.id} postData={post}/>)

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <nav style={{marginLeft:"2em", marginTop:"3.3em"}}>
            <IconButton iconSrc="/top.svg" text="Top" />
            <IconButton iconSrc="/hot.svg" text="Hot" />
            <IconButton iconSrc="/alert.svg" text="New" />
            <IconButton iconSrc="/alert.svg" text="Lol" />
            <IconButton iconSrc="/alert.svg" text="XD" />
          </nav>
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.postListToolbar}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Image src="/arrow_left.svg" width="20px" height="20px" ></Image>
              <h3 style={{fontSize:"1.5em", marginLeft:"0.5em"}}>Popular</h3>
            </div>
            <div>
              <LinkButton color="white" backgroundColor="gray" variant="filled" text="SUBMIT" />
            </div>
          </div>
          <div>
            <PostList>
              {posts}
            </PostList>
          </div>
        </div>
        <div className={styles.rightContainer}>

        </div>
      </div>
    </div>
  );
}
