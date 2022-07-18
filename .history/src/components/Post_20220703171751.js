import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserName, selectUserPhoto } from "../features/UserSlice";
import { useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { db } from "../firebase";

const Post = ({ id, username, userImg, img, caption }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

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

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === userName) !== -1);
  }, [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", userName));
    } else {
      await setDoc(doc(db, "posts", id, "likes", userName), {
        username: userName,
      });
    }
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
              <span>
                <MomentBox>
                  <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
                </MomentBox>
              </span>
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

              <span>
                <span> {likes.length > 0 && <p> {likes.length} likes</p>}</span>
              </span>
            </button>
          </li>
          <li>
            <a>
              {" "}
              <span>
                {" "}
                {comments.length > 0 && <p> {comments.length} comments</p>}
                {comments.length === 0 && <p> {comments.length} comment yet</p>}
              </span>
            </a>
          </li>
        </SocialCounts>
        <SocialActions>
          {hasLiked ? (
            <button>
              <img
                onClick={likePost}
                src="/images/blue liked button.svg"
                alt=""
              />
              <span> Liked</span>
            </button>
          ) : (
            <button>
              <img onClick={likePost} src="/images/likebutton.svg" alt="" />
              <span> Like</span>
            </button>
          )}

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
                <MomentBox>
                  <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
                </MomentBox>
              </CommentSection>
            ))}
          </CommentOverall>

          <InputSection>
            <form>
              <UserImg>
                <img src={userPhoto} alt="" />
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
    text-overflow: ellipsis;
    margin: 4px 0;
    flex-grow: 1;
    font-size: 14px;
    min-height: 48px;
    background-color: transparent;
    line-height: 1.5;
    /* padding-left: 16px; */
    display: flex;
    /* margin-right: 380px; */
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
    font-size: 16px;
    margin-right: 0.8rem;
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

  span {
    p {
      margin-top: 0px;
      align-items: center;
    }
  }
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
  margin-left: 5px;
  overflow-y: scroll;
  max-height: 5rem;
`;

const CommentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  margin-left: 0.5rem;

  p {
    font-weight: 600;
    font-size: 13px;
    max-width: 85%;
    margin: 4px 0;
    align-items: center;
  }

  span {
    font-weight: 600;
    font-size: 13px;
    color: black;
    margin: 4px 0;
  }

  display: flex;
  padding: 8px 16px 0px 8px;
  align-items: center;

  img {
    width: 24px;

    border-radius: 50%;
    margin-right: 8px;
  }
`;

const InputSection = styled.div``;

const UserImg = styled.div`
  display: flex;
  margin-left: 0.3rem;
  padding: 8px 16px 4px 8px;
  align-items: center;

  img {
    width: 48px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const MomentBox = styled.div`
  padding-left: 1.25rem;
  font-size: 12px;
  font-weight: 400;
  text-transform: lowercase;
`;
export default Post;
