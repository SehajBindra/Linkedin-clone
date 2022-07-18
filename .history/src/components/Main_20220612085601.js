import { useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
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

const Main = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);
  const [showModal, setShowModal] = useState("close");

  const handleclick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;

      case "close":
        setShowModal("open");
        break;

      default:
        setShowModal("close");
        break;
    }
  };
  return (
    <Container>
      <ShareBox>
        share
        <div>
          <img src="/images/user.svg" alt="" />
          <button onClick={handleclick}>Start a Post</button>
        </div>
        <div>
          <button>
            <img src="/images/photos-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().captionRef}
          />
        ))}
      </div>
      <PostModal showModal={showModal} handleclick={handleclick} />
    </Container>
  );
};

const Container = styled.div``;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin-left: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      font-size: 14px;
      min-height: 48px;
      background-color: transparent;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.6);
      border: none;
      align-items: center;
      display: flex;
      font-weight: 500;
    }

    &:first-child {
      display: flex;
      padding: 8px 16px 0px 8px;
      align-items: center;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

export default Main;
