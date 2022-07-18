import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import styled from "styled-components";
import { selectUserName } from "../features/UserSlice";
import { db } from "../firebase";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "sehajBindra",
    userImg:
      "https://i.pinimg.com/originals/7e/bc/88/7ebc888a34305274628610bf02137aaa.png",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e60d59103015959.5f43f7d599ad9.jpg",
    caption: "By the Order of Peaky Blinders",
  },

  {
    id: "123",
    username: "sehajBindra",
    userImg:
      "https://i.pinimg.com/originals/7e/bc/88/7ebc888a34305274628610bf02137aaa.png",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e60d59103015959.5f43f7d599ad9.jpg",
    caption: "By the Order of Peaky Blinders",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const userName = useSelector(selectUserName);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

const Container = styled.div``;

export default Posts;
