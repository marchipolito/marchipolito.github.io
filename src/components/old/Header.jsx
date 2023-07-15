import React, { useState } from "react";
import styled from "styled-components";
// import profPic from "../images/profile.jpg";

const HeaderWrapper = styled.div`
  // width: 100vw;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
`;

const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  // display: none;
`;

const Name = styled.span`
  margin: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  min-width: 200px;
`;
const Header = () => {
  const [expand, setExpand] = useState(false);
  return (
    <HeaderWrapper
      id="headerBar"
      onClick={() => {
        setExpand(!expand);
      }}
      className={expand ? "expand" : ""}
    >
      <Name>marc hipolito</Name>
      <Navigation>
        {/* <MenuItem className={expand ? "display" : "hide"}>marc hipolito</MenuItem> */}
        <MenuItem className={expand ? "display" : "hide"}>about</MenuItem>
        <MenuItem className={expand ? "display" : "hide"}>projects</MenuItem>
        <MenuItem className={expand ? "display" : "hide"}>contact</MenuItem>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
