import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import oceanPic from "../images/ocean.jpg";
import profPic from "../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContextData } from "../context/AppContext";
import { Blackout, ContentWrapper, Modal } from "./StyledComponents";
import { CloseBtn } from "./Buttons";

const DetailsWrapper = styled.div`
  width: 100%;
  //   padding: 0 48px;
  height: inherit;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #181818;
`;
const DetailsCover = styled.div`
  width: 100%;
  height: 32vw;
  min-height: 400px;
  background: red;
  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-image: url(${oceanPic});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ preview }) =>
    preview &&
    `
  background-image: url(${preview});
  `}
`;

const CoverGradient = styled.div`
  height: 10vw;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, #181818, transparent 50%);
`;

const DetailsInfo = styled.div`
  //   height: 100%;
  height: fit-content;
  background: #181818;
  padding: 0 48px;
`;

const SynopsisWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  //   display: grid;
  //   column-gap: 4em;
`;

const Row = styled.div`
  width: 100%;
  display: block;
  margin: 0.8em 0 2em;
  word-break: break-word;
`;
const LeftContainer = styled.div`
  width: 55%;
`;

const Match = styled.div`
  color: #46d369;
  font-weight: 700;
  margin-right: 0.5em;
`;
const MatchText = styled.div`
  display: flex;
  color: #bcbcbc;
  margin: 0.8em 0;
`;

const Bullet = styled.span`
  //   color: #bcbcbc;
  color: #ffffff;
  //   padding: 0 0.75em 0 0;
  cursor: pointer;
  font-size: 0.85em;
`;
const RightContainer = styled.div`
  width: 40%;
`;

const GreyText = styled.span`
  color: #777777;
  font-size: 0.9em;
  font-weight: 600;
  margin-right: 0.3em;
`;
const TextItem = styled.span`
  font-size: 0.9em;
  color: #ffffff;
  //   font-weight: 600;
  cursor: pointer;
  margin-right: 0.3em;
  word-break: keep-all;
`;

const MoreInfo = ({ data }) => {
  const { setShowMoreInfo } = useAppContextData();
  const {
    preview,
    releaseDate,
    synopsis,
    match,
    skills,
    role,
    company,
    isCurrent,
  } = data;

  const hidePreview = () => {
    setShowMoreInfo(false);
  };
  return (
    <>
      <Blackout className="Blackout" />
      <ContentWrapper
        className="ContentWrapper"
        onClick={() => {
          hidePreview();
        }}
      >
        <Modal className="Modal" onClick={(e) => e.stopPropagation()}>
          <CloseBtn
            onClick={() => {
              hidePreview();
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "times"]}
              size="1x"
              style={{ color: "white" }}
              className="close"
            />
          </CloseBtn>
          <DetailsWrapper className="DetailsWrapper">
            <DetailsCover className="DetailsCover" preview={preview}>
              <CoverGradient />
            </DetailsCover>
            <DetailsInfo className="DetailsInfo">
              <SynopsisWrapper>
                <LeftContainer>
                  <Row>
                    <MatchText>
                      {/* {isCurrent ? (
                        <Match>Current</Match>
                      ) : (
                        match && <Match>{match} Match</Match>
                      )} */}
                      {match && <Match>{match} Match</Match>}
                      {releaseDate}
                    </MatchText>
                    {/* <Bullet className="Bullet">{skills?.join(", ")}</Bullet> */}
                    {company && role ? (
                      <Bullet className="Bullet">{`${company} - ${role}`}</Bullet>
                    ) : (
                      <Bullet className="Bullet">{role}</Bullet>
                    )}
                  </Row>
                  <Row>{synopsis?.summary}</Row>
                  {/* separate full width section? */}
                  {synopsis?.duties &&
                    synopsis?.duties.map((duty) => <Row>{duty}</Row>)}
                </LeftContainer>
                <RightContainer>
                  {skills && (
                    <Row>
                      <GreyText>Skills:</GreyText>
                      <TextItem>
                        {skills?.map((skill, index) =>
                          index < skills?.length - 1 ? `${skill}, ` : skill
                        )}
                      </TextItem>
                    </Row>
                  )}
                  {data?.tools && (
                    <Row>
                      <GreyText>Tools:</GreyText>
                      <TextItem>
                        {data?.tools.map((tool, index) =>
                          index < data?.tools.length - 1 ? `${tool}, ` : tool
                        )}
                      </TextItem>
                    </Row>
                  )}
                </RightContainer>
              </SynopsisWrapper>
            </DetailsInfo>
          </DetailsWrapper>
        </Modal>
      </ContentWrapper>
    </>
  );
};
export default MoreInfo;
