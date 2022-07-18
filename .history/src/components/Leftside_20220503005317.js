import styled from "styled-components";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCart>
        <Userinfo>
          <CardBackground />
          <a>
            <Photo />
            <Link> Welcome there !</Link>
          </a>

          <a>
            <AddPhotoText> Add a photo</AddPhotoText>
          </a>
        </Userinfo>

        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span> Grow your Network </span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCart>

      <CommunityCard>
        <a>
          {" "}
          <span>Groups</span>
        </a>
        <a>
          
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>

        <a ><span>Follow Hashtags</span></a>

        <a ><span>Discover more</span></a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: "Leftside";
`;
const ArtCart = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 8px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Userinfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  height: 72px;
  width: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.33;
  font-weight: 400;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }

        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  display: block;
  font-size: 12px;

  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCart)`
 padding: 8px 0 0 ;
 text-align: left;
 display: flex;
 flex-direction: column;

`;
export default Leftside;
