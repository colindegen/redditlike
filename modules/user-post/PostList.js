import styles from './styles/PostList.module.css'

export default function PostList({children}) {
  return (
    <ul className={styles.postList}>
      {children}
    </ul>
  );
}
