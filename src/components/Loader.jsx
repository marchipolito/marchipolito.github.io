import React, { useEffect } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Spinner = styled.div``;

const Loader = (props) => {
  const { setShowDetails, setShowLoader } = props;
  useEffect(() => {
    setTimeout(() => {
      setShowDetails(true);
      setShowLoader(false);
      // }, 1250);
    }, 500);
  }, []);

  return (
    <LoaderContainer>
      <Spinner className="loader"></Spinner>
      <Avatar hidename type={"user"} />
    </LoaderContainer>
  );
};

export default Loader;
