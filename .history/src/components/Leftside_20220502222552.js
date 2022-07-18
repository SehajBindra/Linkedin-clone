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

const Photo = styled.div`
 box-shadow: none;
 background-image: url('/images/photo.svg');
 height: 72px;
 width: 72px;
 box-sizing: border-box;
 background-clip: content-box;
 background-color: white;
 background-position: center;
 background-repeat: no-repeat;
 background-size: 60%;
 border: 2px solid white;
 margin: -38px  auto 12px;
 border-radius: 50%;
`
const Link = styled.div`
 font-size: 16px;
 line-height: 1.5;
 color: rgba(0, 0, 0, 0.9);
 font-weight: 600;


`
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.33;
  font-weight: 400;
`
const CardBackground = styled.div`
 background: url('/images/card-bg.svg');
 background-position: center;
 background-size: 462px;
 height: 54px;
 margin: -12px -12px 0;

`
export default Leftside;