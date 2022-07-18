import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              {" "}
              <BulletPoint />{" "}
            </a>

            <div>
              <span>Questions to ask in a job interview</span>
            </div>
          </li>

          <li>
            <a>
              {" "}
              <BulletPoint />{" "}
            </a>

            <div>
              <span>CEO salaries see a spike</span>
            </div>
          </li>

          <li>
            <a>
              {" "}
              <BulletPoint />{" "}
            </a>

            <div>
              <span>Hybrid work is here to stay</span>
            </div>
          </li>

          <li>
            <a>
              {" "}
              <BulletPoint />{" "}
            </a>

            <div>
              <span>What’s driving the great resignation?</span>
            </div>
          </li>

          <li>
            <a>
              {" "}
              <BulletPoint />{" "}
            </a>

            <div>
              <span>Blue collar jobs see record demand</span>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: "Rightside";
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;

  justify-content: space-between;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  width: 100%;
  align-items: center;
`;

const FeedList = styled.ul`
  margin-top: 16px;
  display: flex;

  li {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 500;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }

    span {
      font-size: 16px;
      margin-bottom: 4px;
      font-weight: 500;
    }
  }
`;

const BulletPoint = styled.div`
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 6px;
  height: 6px;

  margin: 0 12px 2px 14px;
  border: 3px solid rgba(0, 0, 0, 0.6);
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 4px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
export default Rightside;
