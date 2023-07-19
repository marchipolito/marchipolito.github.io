import React from "react";
import styled from "styled-components";
import profPic from "../images/profile.jpg";
import { useAppContextData } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  width: fit-content;
`;
const ProfileImg = styled.div`
  height: ${(props) => (props.mini ? "48px" : "clamp(140px,10vw,10vw)")};
  width: ${(props) => (props.mini ? "48px" : "clamp(140px,10vw,10vw)")};
  background: #141414;
  border-radius: 4px;
  margin: auto;
  background-image: url(${profPic});
  background-size: cover;
  background-position: 40% 80%;
  border: 3px solid transparent;
  background-repeat: no-repeat;

  ${({ mini }) =>
    mini
      ? `min-width:48px;min-height:48px;`
      : `min-width:140px;min-height:140px;`}
`;

const ContactImg = styled.div`
  height: ${(props) => (props.mini ? "48px" : "clamp(140px,10vw,10vw)")};
  width: ${(props) => (props.mini ? "48px" : "clamp(140px,10vw,10vw)")};
  // min-height: 140px;
  // min-width: 140px;
  background: #141414;
  border-radius: 4px;
  margin: auto;
  // background-image: url(${profPic});
  background-size: cover;
  background-position: 40% 80%;
  border: 3px solid transparent;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #fff;
  }
`;

const ProfileName = styled.div`
  color: gray;
  font-size: clamp(16px, 20px, 20px);
  text-align: center;
  margin: 0.6em 0;
  display: ${(props) => (props.hidename ? "none" : "")};
`;

const Avatar = (props) => {
  const { name, contactMe, mini, type } = props;
  const { setShowMoreInfo, setShowLoader, setShowUser, setContactMe } =
    useAppContextData();
  const showApp = () => {
    if (contactMe) {
      setContactMe(true);
    } else {
      setShowLoader(true);
      setShowUser(false);
    }
  };

  const AvatarType = (type) => {
    switch (type) {
      case "user": {
        return <ProfileImg className="avatarImg" {...props}></ProfileImg>;
      }
      case "resume": {
        return (
          <>
            <ContactImg className="avatarImg">
              <FontAwesomeIcon
                icon={["fas", "file-pdf"]}
                style={{ color: "grey", fontSize: "6vw" }}
              />
            </ContactImg>
          </>
        );
      }
      case "contact": {
        return (
          <>
            <ContactImg className="avatarImg">
              <FontAwesomeIcon
                icon={["fas", "plus-circle"]}
                style={{ color: "grey", fontSize: "6vw" }}
              />
            </ContactImg>
          </>
        );
      }
      default:
        return <></>;
    }
  };
  return (
    <IconWrapper
      className={mini ? "mini" : "iconWrapper"}
      onClick={mini ? () => {} : showApp}
    >
      {AvatarType(type)}
      {/* {contactMe ? (
        <>
          <ContactImg className="avatarImg">
            <FontAwesomeIcon
              icon={["fas", "plus-circle"]}
              style={{ color: "grey", fontSize: "6vw" }}
            />
          </ContactImg>
        </>
      ) : (
        <ProfileImg className="avatarImg" {...props}></ProfileImg>
      )} */}
      <ProfileName className="profileName" {...props}>
        {name}
      </ProfileName>
    </IconWrapper>
  );
};

export default Avatar;
