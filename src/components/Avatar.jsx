import React from "react";
import styled from "styled-components";
import profPic from "../images/profile.jpg";
import { useAppContextData } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  width: fit-content;
  margin: auto;
`;
const ProfileImg = styled.div`
  height: ${(props) => (props.mini ? "48px" : "10vw")};
  width: ${(props) => (props.mini ? "48px" : "10vw")};
  max-width: 10vw;
  max-height: 10vw;
  background: #141414;
  border-radius: 4px;
  margin: auto;
  background-image: url(${profPic});
  background-size: cover;
  background-position: 40% 80%;
  border: 3px solid transparent;
  background-repeat: no-repeat;

  // ${({ contactMe }) => contactMe && `background-image: url();`}
`;

const ContactImg = styled.div`
  height: ${(props) => (props.mini ? "48px" : "10vw")};
  width: ${(props) => (props.mini ? "48px" : "10vw")};
  max-width: 10vw;
  max-height: 10vw;
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

  // ${({ contactMe }) => contactMe && `background-image: url();`}
`;

const ProfileName = styled.div`
  color: gray;
  font-size: 1.3vw;
  text-align: center;
  margin: 0.6em 0;
  display: ${(props) => (props.hidename ? "none" : "")};
`;

const Avatar = (props) => {
  const { name, contactMe, mini } = props;
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
  return (
    <IconWrapper
      className={mini ? "mini" : "iconWrapper"}
      onClick={mini ? () => {} : showApp}
    >
      {contactMe ? (
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
      )}
      <ProfileName className="profileName" {...props}>
        {name}
      </ProfileName>
    </IconWrapper>
  );
};

export default Avatar;
