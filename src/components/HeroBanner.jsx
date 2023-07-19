import React from "react";
import styled from "styled-components";
import oceanPic from "../images/ocean.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "./Categories";
import history from "../data/history";
import { useAppContextData } from "../context/AppContext";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`;

const HeroImg = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${oceanPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const HeroWrapper = styled.div`
  // position: absolute;
  // top: 0;
  // left: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-image: url(${oceanPic});
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
`;
// const MainContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   margin: 0 4vw;
// `;

const HeroDetailsContainer = styled.div`
  height: 100vh;
  //   width: 75vw;
  // display: block;
  // align-items: center;
  //   margin: 0 4vw;
  position: relative;
`;

const HeroActionsContainer = styled.div`
  position: absolute;
  bottom: 30%;
  // margin: 0 4rem 0 4rem;
  margin: 0 4vw;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: clamp(48px, 50px, 5vw);
  width: min-content;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
const PlayButton = styled.button`
  width: clamp(8vw, 8.5vw, 8.5vw);
  height: clamp(3vw, 3.5vw, 3.5vw);
  border-radius: 4px;
  border: 0;
  opacity: 1;
  margin-right: 1rem;
  cursor: pointer;
  // font-size: 20px;
  font-size: 1.4vw;
  font-weight: 600;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

const PlayButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: auto;
`;

const PlayButtonText = styled.span``;

const MoreInfoButton = styled.button`
  background-color: #6d6d6eb3;
  width: 60%;
  white-space: nowrap;
  height: clamp(48px, 3.5vw, 3.5vw);
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
`;
const MoreInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: auto;
`;
const MoreInfoText = styled.span`
  color: white;
`;

const HeroBanner = () => {
  const { showMoreInfo, setShowMoreInfo, infoData, setInfoData } =
    useAppContextData();
  // const showMoreInfo = () => {
  //   document.querySelector(".Blackout").style.visibility = "visible";
  //   document.querySelector(".Blackout").style.opacity = "0.8";
  //   document.querySelector(".InfoWrapper").style.visibility = "visible";
  //   document.querySelector(".InfoModal").style.visibility = "visible";
  // };
  return (
    <MainContainer className="MainContainer">
      <HeroDetailsContainer className="HeroDetailsContainer">
        <HeroImg id="heroimg" className="HeroImg" src={oceanPic}>
          <HeroActionsContainer className="HeroActionsContainer">
            <HeroTitle>Frontend Developer</HeroTitle>
            <ButtonsContainer>
              {/* <PlayButton>
                <PlayButtonWrapper className="PlayButtonWrapper">
                  <FontAwesomeIcon icon={["fas", "play"]} size="1x" />
                  <PlayButtonText>Play</PlayButtonText>
                </PlayButtonWrapper>
              </PlayButton> */}
              <MoreInfoButton
                onClick={() => {
                  setShowMoreInfo(!showMoreInfo);
                  setInfoData(history.aboutMe);
                }}
              >
                <MoreInfoWrapper>
                  <FontAwesomeIcon
                    icon={["fa", "info-circle"]}
                    size="1x"
                    inverse
                  />
                  <MoreInfoText>More Info</MoreInfoText>
                </MoreInfoWrapper>
              </MoreInfoButton>
            </ButtonsContainer>
          </HeroActionsContainer>
        </HeroImg>
      </HeroDetailsContainer>
      <Categories />
    </MainContainer>
  );
};

export default HeroBanner;
