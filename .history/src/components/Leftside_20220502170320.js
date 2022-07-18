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
 position: relative;
 border: none;
 box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`

export default Leftside;