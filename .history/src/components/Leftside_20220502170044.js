import styled from "styled-components";


const Leftside = (props) => {
    return (
        <Container>
           <ArtCart>Card</ArtCart>
        </Container>
    )
};

const Container = styled.div`
 grid-area: "Leftside";


`
const ArtCart = styled.div`
 text-align: center;
 overflow: hidden;
 background-color: #fff;
 margin-bottom: 8px;
 border-radius: 8px;
 transition: box-shadow 83ms;

`

export default Leftside;