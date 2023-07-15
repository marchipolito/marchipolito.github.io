import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import Tooltip from "./Tooltip";
import { useAppContextData } from "../context/AppContext";

const TestBox = styled.div`
  height: 0;
  width: 0;
  background: red;
  z-index: 5;
  opacity: 0;
  transition: 1s all ease;
  position: absolute;
`;

const Preview = () => {
  const { infoData, showMoreInfo, setShowMoreInfo, category } =
    useAppContextData();
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
  } = infoData;

  const hidePreview = () => {
    let target = document.querySelector(".Preview");
    target.style.transitionDelay = "0";
    target.style.opacity = "0";
    target.style.height = "0";
    target.style.width = "0";
    target.style.visibility = "hidden";
  };

  return (
    <>
      <PreviewBox className="Preview" onMouseLeave={hidePreview}>
        <CardImg preview={preview}></CardImg>
        <CardInfo className="CardInfo">
          <InfoContainer className="InfoContainer">
            <ButtonsContainer className="ButtonsContainer">
              <LeftButtons>{company?.toUpperCase()}</LeftButtons>
              <ControlButton
                onClick={() => {
                  setShowMoreInfo(true);
                }}
                className="ControlButton"
              >
                <FontAwesomeIcon icon={["fas", "angle-down"]} size="1x" />
                <Tooltip />
              </ControlButton>
            </ButtonsContainer>
            <Row>
              {isCurrent && <Current>CURRENT</Current>}
              <PreviewText>{role}</PreviewText>
            </Row>
            <Row>
              {Object.keys(category)[0] === "education" ? (
                <PreviewText>{releaseDate}</PreviewText>
              ) : (
                <>
                  <PreviewText>
                    {years && `${years} Years `}
                    {months > 0 && `${months} Months`}
                  </PreviewText>
                  {Object.keys(category)[0] === "experience" && (
                    <Quality>4K</Quality>
                  )}
                </>
              )}
            </Row>
            {skills && (
              <Row>
                {skills?.map((skill) => (
                  <>
                    <SkillTag>{skill}</SkillTag>
                    <Bullet className="bullet">&#x2022;</Bullet>
                  </>
                ))}
              </Row>
            )}
          </InfoContainer>
        </CardInfo>
      </PreviewBox>
    </>
  );
};

export default Preview;
