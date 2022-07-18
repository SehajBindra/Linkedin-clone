import styled from "styled-components";
import Main from "./Main";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a> Hiring in a hurry? - </a>
        </h5>
        <p>
          Find a talented pros in record time with upwork and keep business
          working
        </p>
      </Section>

      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`

 padding: 40px;
  max-width: 100%;
@media (max-width: 768px) {
  padding: 0;
  max-width: 100%;
  }

 
`;

const Section = styled.section`
  min-height: 50px;
  text-decoration: underline;
  padding: 16px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  text-transform: none;

  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 8px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "Leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Home;
