import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContextData } from "../context/AppContext";

const ExploreContainer = styled.span`
  color: #54b9c5;
  font-size: 0.7em;
  margin-left: 5px;
  position: relative;
  display: flex;
`;

const ExploreText = styled.span`
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
  opacity: 0;
  max-width: 0;
  white-space: nowrap;
  margin-right: 5px;
`;

const ExploreLink = (props) => {
  const { data } = props;
  const { setShowExplore, exploreData, setExploreData } = useAppContextData();

  const showExplore = () => {
    setShowExplore(true);
    setExploreData(data);
  };
  return (
    <>
      <ExploreContainer className="ExploreContainer">
        <ExploreText
          className="ExploreText"
          onClick={() => {
            // setShowExplore(true);
            showExplore();
          }}
        >{`Explore All`}</ExploreText>
      </ExploreContainer>
      <FontAwesomeIcon
        icon={["fas", "angle-right"]}
        size={"1x"}
        style={{ color: "#54b9c5" }}
      />
    </>
  );
};

export default ExploreLink;
