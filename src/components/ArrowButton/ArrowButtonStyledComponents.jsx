import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const ArrowBackground = styled.div`
  height: 100%;
  width: 60px;
  position: absolute;
  // background: red;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-of-type {
    left: 0;
    background: blue;
  }
  &:last-of-type {
    right: 0;
    background: purple;
  }
`;

export const ArrowBtn = styled.div`
  // display: none;
  // opacity: 0.75;
  height: 100%;
  width: 60px;
  position: absolute;
  // background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-of-type {
    left: 0;
  }
  &:last-of-type {
    right: 0;
  }
`;

export const ArrowLeft = () => {
  return (
    <>
      <ArrowBtn>
        <FontAwesomeIcon
          icon={["fas", "angle-left"]}
          size="2x"
          style={{ color: "white" }}
        />
      </ArrowBtn>
    </>
  );
};

export const ArrowRight = () => {
  return (
    <>
      <ArrowBtn>
        <FontAwesomeIcon
          icon={["fas", "angle-right"]}
          size="2x"
          style={{ color: "white" }}
        />
      </ArrowBtn>
      <ArrowBackground />
    </>
  );
};
