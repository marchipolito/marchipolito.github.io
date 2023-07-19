import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { useAppContextData } from "../context/AppContext";

const GradientBar = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  z-index: 1;
  height: 70px;
  width: 100vw;
  position: absolute;
  top: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftNavContainer = styled.div``;
const RightNavContainer = styled.div`
  // height: 200%;
  display: flex;
  align-items: center;
  margin-right: 4vw;
  position: relative;

  &:hover {
    cursor: pointer;
  }
  &:hover .DropDown {
    opacity: 1;
    pointer-events: all;
    z-index: 2;
  }
`;
const MenuContainer = styled.ul`
  display: flex;
  padding: 0;
`;
const MenuItem = styled.li`
  color: #e5e5e5;
  list-style: none;
  font-size: 14px;
  margin-left: 20px;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px #fff;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &:first-of-type {
    margin-left: 4vw;
  }
`;

const Caret = styled.span`
  border-color: #fff transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  height: 0;
  width: 1px;
  transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
  margin-left: 10px;
`;

const DropDown = styled.div`
  position: absolute;
  right: 0;
  bottom: -40px;
  padding: 10px 20px;
  white-space: nowrap;
  background: #141414;
  color: #fff;
  opacity: 0;
  transition: 0.4s all ease;
  // transition-delay: 0.2s;
  pointer-events: none;

  &:hover {
    pointer-events: all;
  }
`;

const GradientMenu = () => {
  const { setContactMe } = useAppContextData();
  const scroll = (id, block = "center") => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: block });
  };
  return (
    <GradientBar className="GradientBar">
      <LeftNavContainer>
        <MenuContainer>
          <MenuItem onClick={() => scroll("heroimg", "start")}>Home</MenuItem>
          <MenuItem onClick={() => scroll("experience")}>Experience</MenuItem>
          <MenuItem onClick={() => scroll("education")}>Education</MenuItem>
          <MenuItem onClick={() => scroll("projects")}>Projects</MenuItem>
        </MenuContainer>
      </LeftNavContainer>
      <RightNavContainer className="rightNav">
        <Avatar hidename mini type={"user"} />
        <Caret className="caret" />
        <DropDown
          className="DropDown"
          onClick={() => {
            setContactMe(true);
          }}
        >
          Contact Me
        </DropDown>
      </RightNavContainer>
    </GradientBar>
  );
};
export default GradientMenu;
