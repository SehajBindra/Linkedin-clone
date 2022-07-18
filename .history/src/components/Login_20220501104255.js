import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
padding: 0px`;

const Nav = styled.nav`
max-width: 1128px
margin: auto
padding: 12px 0px 16px`;

export default Login;
