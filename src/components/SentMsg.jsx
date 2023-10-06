import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MsgContainer = styled.div``;
const Message = styled.div`
  font-size: 2.5vw;
`;

const SentMsg = () => {
  return (
    <>
      <Row>
        <MsgContainer>
          <FontAwesomeIcon
            icon={["fas", "paper-plane"]}
            style={{ color: "white", fontSize: "clamp(60px,6vw,6vw)" }}
          />
          <Message>Sent</Message>
        </MsgContainer>
      </Row>
    </>
  );
};

export default SentMsg;
