import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import styled from "styled-components";
import { db } from "../firebase";
import Post from "./Post";
import { selectUserName, selectUserPhoto } from "../features/UserSlice";
const userName = useSelector(selectUserName);
const userPhoto = useSelector(selectUserPhoto);
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts"),
        orderBy("timestamp", "desc"),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      )
    );
  }, [db]);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().userName}
          userImg={post.data().userPhoto}
          img={post.data().image}
          caption={post.data().captionRef}
        />
      ))}
    </div>
  );
};

const Container = styled.div``;

export default Posts;
