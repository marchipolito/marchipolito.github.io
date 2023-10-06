import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  height: 300px;
  width: 300px;
  position: relative;
`;
const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* display: inline-block; */
  border-top: 10px solid #e50914;
  border-right: 10px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  z-index: 3;
  position: absolute;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Message = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 2.5vw;
`;

const LoadingSpinner = () => {
  return (
    <Row>
      <SpinnerContainer>
        <Message>Just a moment</Message>
        <Spinner />
      </SpinnerContainer>
    </Row>
  );
};

export default LoadingSpinner;
