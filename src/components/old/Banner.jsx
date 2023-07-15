import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background: ${(props) => (props.color ? "whitesmoke" : "lightgray")};
`;

const Banner = (props) => {
  return <Section color={props.color}>{props.children}</Section>;
};

export default Banner;
