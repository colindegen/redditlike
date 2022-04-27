import { useRouter } from 'next/router'
import PostView from '../../modules/postview/PostView.js';
import data from "../../public/data.json";

export default function Posts() {
  const router = useRouter()
  const { id } = router.query;

  const getPostById = () => {
     return data.data.find((post) => post.id === id);
  }

  return (
    <div>
      <PostView postData={getPostById()}></PostView>
    </div>
  );
}
