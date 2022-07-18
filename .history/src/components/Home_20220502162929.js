import styled from "styled-components";

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5> <a> Hiring in a hurry?  </a> </h5>
        <p> Find a talented pros in record time with upwork and keep business working</p>
      </Section>
    </Container>
  )
      
  
};


const Container = styled.div`
 padding: 52px;
 max-width: 100%;
`



const Section = styled.section`
  min-height: 50px;
  text-decoration: underline;
  padding: 16px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  text-transform: none;

  h5{
    color: #0a66c2;
    font-size: 14px;
  }

  a{
    font-weight: 700;
  }

`



export default Home;
