import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextContainer = styled.div`
  background: white;
  position: absolute;
  left: -32px;
  color: black;
  padding: 0.2em 0.5em;
  top: -45px;
  width: max-content;
  opacity: 0;
  border-radius: 6px;
  transition-delay: 0.25s;
  transition: 0.25s all ease;
  pointer-events: none;
`;

const ArrowStyle = {
  fontSize: "16px",
  position: "absolute",
  bottom: "-9px",
  left: "50%",
  color: "white",
};
const Tooltip = () => {
  return (
    <>
      <TextContainer className="Tooltip">
        <FontAwesomeIcon icon={["fas", "caret-down"]} style={ArrowStyle} />
        More Info
      </TextContainer>
    </>
  );
};

export default Tooltip;
