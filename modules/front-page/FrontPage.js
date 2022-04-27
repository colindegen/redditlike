import PostList from "../user-post/PostList";
import PostListElement from "../user-post/PostListElement";
import styles from "./styles/FrontPage.module.css";
import Image from "next/Image";
import Button from "../../common/buttons/Button";
import IconButton from "../../common/buttons/IconButton";

export default function FrontPage({data}) {

  const posts = data.data.map((post) => <PostListElement key={post.id} postData={post}/>)

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <nav style={{marginLeft:"3em", marginTop:"3.3em"}}>
            <IconButton iconSrc="/top.svg" text="Top" />
            <IconButton iconSrc="/hot.svg" text="Hot" />
            <IconButton iconSrc="/alert.svg" text="New" />
          </nav>
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.postListToolbar}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Image src="/arrow_left.svg" width="20px" height="20px" ></Image>
              <p style={{fontSize:"1.5em", marginLeft:"0.5em"}}>Popular</p>
            </div>
            <div>
              <Button color="white" backgroundColor="orange" variant="filled" text="SUBMIT" iconSrc="/top.svg" />
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
