import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAppContextData } from "../context/AppContext";
import { CloseBtn } from "./Buttons";
import data from "../data/history";
// import * as test from "./StyledComponents";
import {
  ItemCard,
  PreviewBox,
  CardImg,
  CardInfo,
  InfoContainer,
  ButtonsContainer,
  LeftButtons,
  ControlButton,
  Row,
  PreviewText,
  Current,
  Quality,
  SkillTag,
  Bullet,
} from "./StyledComponents";
import { Blackout, ContentWrapper } from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentContainer = styled.div`
  position: relative;
  top: 2em;
  width: 80vw;
  height: 100vh;
  background: #181818;
  border-radius: 6px;
`;

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17vw;
`;
const Header = styled.h1`
  color: #ffffff;
  font-size: 3vw;
`;

const CardContainer = styled.div`
  width: initial;
  margin: 0 4vw;
  //   background: red;
  //   height: 100vh;
  display: flex;
  flex-flow: row wrap;
  row-gap: 3vw;
  justify-content: space-between;
`;

const ExploreAll = () => {
  const { setShowExplore, exploreData, setShowMoreInfo, setInfoData } =
    useAppContextData();

  const hideExplore = () => {
    setShowExplore(false);
  };

  const showMoreInfo = () => {
    setShowMoreInfo(true);
  };

  return (
    <>
      <Blackout />
      <ContentWrapper onClick={hideExplore}>
        <ContentContainer onClick={(e) => e.stopPropagation()}>
          <CloseBtn onClick={hideExplore} />
          <HeaderRow>
            <Header>{exploreData[1]}</Header>
          </HeaderRow>
          <CardContainer className="CardContainer">
            {Object.entries(data?.history[exploreData[0]]).map((history) => {
              const {
                company,
                role,
                years,
                months,
                skills,
                isCurrent,
                sequalNum,
                image,
                preview,
                releaseDate,
              } = history[1];

              return (
                <>
                  <ItemCard
                    className="ItemCard"
                    image={image}
                    onClick={() => {
                      setInfoData(history[1]);
                      showMoreInfo();
                      setShowExplore(false);
                    }}
                  >
                    <PreviewBox className="PreviewBox first">
                      <CardImg preview={preview}></CardImg>
                      <CardInfo className="CardInfo">
                        <InfoContainer className="InfoContainer">
                          <ButtonsContainer className="ButtonsContainer">
                            <LeftButtons>{company?.toUpperCase()}</LeftButtons>
                            <ControlButton
                              onClick={() => {
                                hideExplore();
                                setInfoData(history[1]);
                                showMoreInfo();
                              }}
                            >
                              <FontAwesomeIcon
                                icon={["fas", "angle-down"]}
                                size="1x"
                              />
                            </ControlButton>
                          </ButtonsContainer>
                          <Row>
                            {isCurrent && <Current>CURRENT</Current>}
                            <PreviewText>{role}</PreviewText>
                          </Row>
                          <Row>
                            {/* {Object.keys(category)[0] === "education" ? ( */}
                            {exploreData[0] === "education" ? (
                              <PreviewText>{releaseDate}</PreviewText>
                            ) : (
                              <>
                                <PreviewText>
                                  {years && `${years} Years `}
                                  {months > 0 && `${months} Months`}
                                </PreviewText>
                                {exploreData[0] === "experience" && (
                                  <Quality>4K</Quality>
                                )}
                              </>
                            )}
                          </Row>
                          <Row>
                            {skills?.map((skill) => (
                              <>
                                <SkillTag>{skill}</SkillTag>
                                <Bullet className="bullet">&#x2022;</Bullet>
                              </>
                            ))}
                          </Row>
                        </InfoContainer>
                      </CardInfo>
                    </PreviewBox>
                  </ItemCard>
                </>
              );
            })}
          </CardContainer>
        </ContentContainer>
      </ContentWrapper>
    </>
  );
};

export default ExploreAll;
