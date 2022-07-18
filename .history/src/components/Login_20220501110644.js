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
color: rgba( 0, 0, 0, 0.6);
margin-right: 12px;
cursor: pointer;
&:hover{
    background-color: rgba( 0, 0, 0, 0.08);
    text-decoration: none;
    border-radius: 4px;
    color: rgba( 0, 0, 0, 0.9);
}`

const Signin = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2 ;
color: #0a66c2;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 500;
line-height: 40px;
padding: 10px 24px;
`

export default Login;
