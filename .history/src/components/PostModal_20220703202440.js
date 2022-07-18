import { useState } from "react";
import styled from "styled-components";
import { selectUserName, selectUserPhoto } from "../features/UserSlice";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import { useRef } from "react";

import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { modalState } from "../atoms/modalAtom";

const PostModal = (props) => {
  const userPhoto = useSelector(selectUserPhoto);
  const [showModal, setShowModal] = useState("close");
  const [open, Setopen] = useRecoilState(modalState);
  const userName = useSelector(selectUserName);
  const [shareImage, setShareImage] = useState("");
  const [editorText, setEditorText] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const captionRef = useRef(null);

  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedfile, setSelectedfile] = useState(null);
  const handleclick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;

      case "close":
        setShowModal("open");
        break;

      default:
        setShowModal("close");
        break;
    }
  };

  const uploadPost = async () => {
    if (loading) return;
    setLoading(true);
    //  1)  create a post and add to firestore 'posts' collection
    //  2) get the post id
    //  3)  upload the image to firebase storage with post id
    //  4) get a download URl from firebase storage and upload to orginal post with image

    const docRef = await addDoc(collection(db, "posts"), {
      username: userName,
      captionRef: captionRef.current.value,
      profileImg: userPhoto,
      timestamp: serverTimestamp(),
    });

    console.log("new doc added with id", docRef.id);

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedfile, "data_url").then(
      async (snapshot) => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      }
    );

    setLoading(false);
    setSelectedfile(null);
    showModal(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedfile(readerEvent.target.result);
    };
  };
  // const handlechange = (e) => {
  //   const image = e.target.files[0];

  //   if (image === "" || image === undefined) {
  //     alert("not an image, the file is a ${typeof image}");
  //     return;
  //   }

  //   setShareImage(image);
  // };

  const SwitchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleclick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              {" "}
              <h2> Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src={userPhoto} alt="" />
                <span> {userName}</span>
              </UserInfo>

              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="what do you want to talk about?"
                  autoFocus={true}
                  ref={captionRef}
                ></textarea>
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      ref={filePickerRef}
                      hidden
                      onChange={addImageToPost}
                    />
                    <div>
                      {selectedfile ? (
                        <img
                          src={selectedfile}
                          onClick={() => setSelectedfile(null)}
                          alt=""
                        />
                      ) : (
                        <p
                          onClick={() => filePickerRef.current.click()}
                          style={{ color: "#0a66c2" }}
                        >
                          <label htmlFor="file">
                            {" "}
                            Select an Image to share
                          </label>
                        </p>
                      )}
                    </div>

                    {/* {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )} */}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        style={{
                          outline: "none",
                          border: "none",
                        }}
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />

                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <SharedCreations>
              {" "}
              <AttachAssets>
                <AssetButton onClick={() => SwitchAssetArea("image")}>
                  <img src="/images/shareimg-icon.svg" alt="" />
                </AssetButton>

                <AssetButton onClick={() => SwitchAssetArea("media")}>
                  <img src="/images/sharedvideo-icon.svg" alt="" />
                </AssetButton>

                <AssetButton>
                  <img src="/images/sharedjob-icon.svg" alt="" />
                </AssetButton>

                <AssetButton>
                  <img src="/images/sharednote-icon.svg" alt="" />
                </AssetButton>

                <AssetButton>
                  <img src="/images/ocassion-icon.svg" alt="" />
                </AssetButton>

                <AssetButton>
                  <img src="/images/poll-icon.svg" alt="" />
                </AssetButton>

                <AssetButton>
                  <img src="/images/ellipsis.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/sharemsg.svg" alt="" /> <h2>Anyone</h2>
                </AssetButton>
              </ShareComment>
              <PostButton
                onClick={uploadPost}
                disabled={!selectedfile ? true : false}
              >
                {loading ? "Uploading..." : " Post"}
              </PostButton>
            </SharedCreations>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3ms;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  top: 32px;
`;

const Header = styled.div`
  display: block;
  padding: 16px 2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 18px;

  display: flex;
  line-height: 1.5;
  h2 {
    font-weight: 400;
    margin-left: 12px;
  }
  justify-content: space-between;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    outline: none;
    border: none;
    background-color: transparent;
  }

  svg,
  img {
    pointer-events: none;
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const SharedCreations = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  outline: none;
  border: none;
  background-color: transparent;

  h2 {
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }

  color: rgba(0, 0, 0, 0.6);
`;

const AttachAssets = styled.div`
  display: flex;
  padding-right: 8px;
  align-items: center;

  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  display: flex;
  justify-content: space-around;

  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-left: 5px;
    }
  }
`;

const PostButton = styled.button`
  border: none;
  outline: none;
  border-radius: 20px;
  min-width: 60px;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0, 0.1)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(0,0,0, 0.6)" : "white")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgba(0,0,0, 0.1)" : "#0a66c2"};
    color: ${(props) => (props.disabled ? "rgba(0,0,0, 0.6)" : "white")};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    outline-width: 0;
    border: none;
    outline: none;
    min-height: 100px;
    font-size: 16px;
    resize: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #010101;
  }
`;

const UploadImage = styled.div`
  text-align: left;
  img {
    width: 100%;
    height: 100%;
  }
`;
export default PostModal;
