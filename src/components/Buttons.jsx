import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledCloseBtn, StyledButton } from "./StyledComponents";

export const CloseBtn = (props) => {
  return (
    <>
      <StyledCloseBtn {...props}>
        <FontAwesomeIcon
          icon={["fas", "times"]}
          size="1x"
          style={{ color: "white" }}
          className="close"
        />
      </StyledCloseBtn>
    </>
  );
};

export const SubmitBtn = () => {
  return (
    <>
      <StyledButton type="submit">Send</StyledButton>
    </>
  );
};
