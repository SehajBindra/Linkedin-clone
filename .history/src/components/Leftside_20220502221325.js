import styled from "styled-components";


const Leftside = (props) => {
    return (
        <Container>
           <ArtCart>
               <Userinfo>
                   <CardBackground />
                   <a >
                       <Photo />
                       <Link> Welcome there !</Link>
                   </a>

                   <a >
                       <AddPhotoText> Add a photo</AddPhotoText>
                   </a>
               </Userinfo>
           </ArtCart>
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


const Userinfo = styled.div`
 border-bottom: 1px solid rgba(0 , 0, 0, 0.15);
 padding: 12px 12px 16px;
 word-wrap: break-word;
 word-break: break-word;


`

const Photo = styled.div``
const Link = styled.div``
const AddPhotoText = styled.div``
const CardBackground = styled.div`
 background: url("/images/card-bg.svg");

`
export default Leftside;