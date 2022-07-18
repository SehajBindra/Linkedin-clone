import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Signin>Sign In</Signin>
        </div>
      </Nav>

      <Section>
        <Hero>
            <h1>Welcome to your proffesional community</h1>
        </Hero>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.9);
  }
`;

const Signin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgb(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgb(112, 181, 249, 0.15);
    text-decoration: none;
    color: #0a66c2;
  }
`;
const Section = styled.section`
  align-items: center;
  display: flex;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  max-width: 1128px;
  align-content: flex-start;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        text-transform: capitalize;
        line-height: 70px;

        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
`

export default Login;
