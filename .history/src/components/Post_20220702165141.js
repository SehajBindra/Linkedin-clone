import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserName, selectUserPhoto } from "../features/UserSlice";
import { useState } from "react";
import styled from "styled-components";

import { db } from "../firebase";

const Post = ({ id, username, userImg, img, caption }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: userName,
      userImage: userPhoto,
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div>
      <Article>
        <SharedActor>
          <a>
            <img src={userImg} alt="" />

            <div>
              <span>{username}</span>
              <span>3,957,130 Followers</span>
              <span>2d •</span>
            </div>
          </a>

          <a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </a>
        </SharedActor>
        <Description>{caption}</Description>
        <SharedImg>
          <a>
            {" "}
            <img src={img} alt="" />{" "}
          </a>
        </SharedImg>
        <SocialCounts>
          <li>
            <button>
              <img
                src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                alt=""
              />
              <img
                src="https://static-exp1.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus"
                alt=""
              />
              <img
                src="https://static-exp1.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1"
                alt=""
              />

              <span>1600</span>
            </button>
          </li>
          <li>
            <a> 84 comments • 56 Shares</a>
          </li>
        </SocialCounts>
        <SocialActions>
          <button>
            <img src="/images/likebutton.svg" alt="" />
            <span> Like</span>
          </button>

          <button>
            <img src="/images/msgbutton.svg" alt="" />
            <span> Comment</span>
          </button>

          <button>
            <img src="/images/sendbutton.svg" alt="" />
            <span>Send</span>
          </button>

          <button>
            <img src="/images/sharebutton.svg" alt="" />
            <span>Share</span>
          </button>
        </SocialActions>
        <CommentBox>
          <CommentOverall>
            {comments.map((comment) => (
              <CommentSection key={comment.id}>
                <img src={comment.data().userImage} alt="" />
                <p>
                  <span>{comment.data().username} </span>
                  {comment.data().comment}
                </p>

                {/* <Moment className=" pr-5 text-sm " fromNow>
                {comment.data().timestamp?.toDate()}
              </Moment> */}
              </CommentSection>
            ))}
          </CommentOverall>

          <InputSection>
            <form>
              <UserImg>
                <img src="/images/user.svg" alt="" />
              </UserImg>

              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
              />
              <button
                type="submit"
                disabled={!comment.trim()}
                onClick={sendComment}
                // className=" font-light text-blue-400"
              >
                Post
              </button>
            </form>
          </InputSection>
        </CommentBox>
      </Article>
    </div>
  );
};

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

const CommentBox = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  /* background-color: #fff; */
  border-radius: 5px;
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin-left: 0 0 8px;
  /* background: white; */

  form {
    display: flex;
  }

  input {
    width: 100%;
    align-items: center;
    font-size: 14px;
    margin-bottom: 20px;
    outline-width: 0;
    border: none;

    margin: 4px 0;
    flex-grow: 1;
    font-size: 14px;
    min-height: 48px;
    background-color: transparent;
    line-height: 1.5;
    padding-left: 16px;
    display: flex;
    margin-right: 400px;
    outline: none;

    text-align: left;

    @media (max-width: 768px) {
      margin-right: 40px;
    }
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #010101;
  }

  button {
    outline: none;
    font-size: 14px;
    min-height: 48px;
    background-color: transparent;
    line-height: 1.5;
    /* color: rgba(0, 0, 0, 0.6); */
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

      padding-left: 16px;
      /* border: 1px solid rgba(0, 0, 0, 0.15); */
      background-color: transparent;
      text-align: left;
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
    }

    span {
      text-align: left;

      &:first-child {
        font-size: 12px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }

      &:nth-child(n + 1) {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  button {
    display: flex;
    justify-content: space-between;
    position: absolute;
    background: transparent;
    border: none;
    outline: none;
    top: 0;
    right: 12px;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
  text-transform: capitalize;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 16px;
  overflow: auto;
  padding: 8px 0;
  list-style: none;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 12px;
    &:nth-child(n + 1) {
      font-size: 12px;

      margin-bottom: 1px;
    }

    button {
      display: flex;
      outline: none;
      border: none;
      background: transparent;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    outline: none;
    border: none;
    background: transparent;
  }

  span {
    margin-left: 4px;
    align-items: center;
  }
`;

const CommentOverall = styled.div`
  margin-left: 2px;
  overflow-y: scroll;
  /* height: 5px; */
`;

const CommentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 1px;
  /* margin-left: 0.5rem; */

  p {
    font-weight: 500;
    font-size: 13px;
    align-items: center;
    margin-left: 2px;
  }

  span {
    font-weight: 600;
    font-size: 13px;
    color: black;
  }

  display: flex;
  padding: 8px 16px 0px 8px;
  align-items: center;

  img {
    width: 48px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const InputSection = styled.div``;

const UserImg = styled.div`
  display: flex;
  padding: 8px 16px 0px 8px;
  align-items: center;

  img {
    width: 48px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;
export default Post;
