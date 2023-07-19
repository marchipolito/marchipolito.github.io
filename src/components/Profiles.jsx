import React, { useState } from "react";
import styled from "styled-components";
import profPic from "../images/profile.jpg";
import Loader from "./Loader";
import Avatar from "./Avatar";
import GradientMenu from "./GradientMenu";
import HeroBanner from "./HeroBanner";
import Categories from "./Categories";
import MoreInfo from "./MoreInfo";
import { useAppContextData } from "../context/AppContext";
import ExploreAll from "./ExploreAll";
import ContactMe from "./ContactMe";
import Preview from "./Preview";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #141414;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div``;

const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row;
  flex-wrap: wrap;
  column-gap: 1vw;
`;
const WhoThis = styled.h1`
  color: #fff;
  font-size: clamp(2em, 30px, 3em);
  font-weight: 400;
  text-align: center;
  letter-spacing: 2px;
`;

const Profiles = () => {
  const {
    showUser,
    setShowUser,
    showLoader,
    setShowLoader,
    showDetails,
    setShowDetails,
    showMoreInfo,
    setShowMoreInfo,
    infoData,
    setInfoData,
    showExplore,
    contactMe,
    setContactMe,
    showPreview,
  } = useAppContextData();

  return (
    <MainWrapper>
      {showDetails && <GradientMenu />}
      <ContentWrapper className="ContentWrapper">
        {showUser && <WhoThis>Who's watching?</WhoThis>}
        {showUser && (
          <UserWrapper className="test ">
            <Avatar name="Marc" type={"user"} />
            <Avatar name="Resume" type={"resume"} />
            <Avatar contactMe name="Contact Me" type={"contact"} />
          </UserWrapper>
        )}
        {showLoader && (
          <Loader
            setShowDetails={setShowDetails}
            setShowLoader={setShowLoader}
          />
        )}
        {showDetails && <HeroBanner />}
      </ContentWrapper>
      {showMoreInfo && <MoreInfo className="MoreInfo" data={infoData} />}
      {showExplore && <ExploreAll />}
      {contactMe && <ContactMe />}
      {/* <Preview /> */}
    </MainWrapper>
  );
};

export default Profiles;
