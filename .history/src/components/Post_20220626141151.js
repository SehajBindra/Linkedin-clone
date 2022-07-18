import styled from "styled-components";

const Post = ({ id, username, userImg, img, caption }) => {
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
        font-size: 16px;
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
  font-size: 12px;
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

export default Post;
