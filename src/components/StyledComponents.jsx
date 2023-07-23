import React from "react";
import styled from "styled-components";
import oceanPic from "../images/ocean.jpg";

/**************************************************/
// Shared Modal Components
/**************************************************/
export const Blackout = styled.div`
  height: 100%;
  width: 100%;
  background: #141414;
  position: absolute;
  opacity: 0.8;
  z-index: 2;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
`;
export const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  position: absolute;
  transition: all 0.2s ease;
  opacity: 1;
  overflow-y: auto;
  z-index: 3;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2vw;
  width: 850px;
  height: 100vh;
  border-radius: 6px;
  font-size: 16px;
  color: #ffffff;
  z-index: 4;
  position: relative;
  top: 2em;
  bottom: 2em;
  background: #181818;
  transition: all 0.2s ease;
  opacity: 1;
`;

/**************************************************/
// Button Components
/**************************************************/

export const StyledCloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #141414;
  position: absolute;
  right: 0;
  top: 0;
  margin: 1em;
  cursor: pointer;
  z-index: 4;
  color: white;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 3px solid transparent;
  &:active {
    border 3px solid #ffffff;
  }
`;

export const StyledButton = styled.button`
  height: 2.5vw;
  width: 6vw;
  font-size: 1.5vw;
  padding: 0;
  cursor: pointer;
`;

/**************************************************/
// ExploreAll Card Components
/**************************************************/
export const Current = styled.span`
  color: #46d369;
  font-size: 16px;
  margin: 4px;
  cursor: pointer;
`;

export const Rating = styled.span`
  color: #bcbcbc;
  font-size: 16px;
  border: 1px solid #bcbcbc;
  padding: 0 6.5px;
  margin: 4px;
  cursor: pointer;
`;

export const PreviewText = styled.span`
  color: #bcbcbc;
  font-size: 16px;
  margin: 4px 8px 4px 4px;
  cursor: pointer;
`;

export const Months = styled.span`
  color: #bcbcbc;
  font-size: 16px;
  margin: 4px 8px 4px 4px;
  cursor: pointer;
`;

export const Quality = styled.span`
  color: #bcbcbc;
  font-size: 0.75em;
  padding: 0px 6px;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: min-content;
`;

export const SkillTag = styled.span`
font-size:16px:
color: #ffffff;
padding: 0 .75em 0 0;
cursor:pointer;
`;
export const Bullet = styled.span`
  color: #bcbcbc;
  padding: 0 0.75em 0 0;
  cursor: pointer;

  &:last-of-type {
    display: none;
  }
`;
export const ItemCard = styled.div`
  height: 128px;
  width: 230px;
  min-width: 230px;
  background: transparent;
  border-radius: 6px;
  //   margin-right: 6px;
  position: relative;
  transition: all 0.5s ease;
  background-image: url(${(props) => (props.image ? props.image : oceanPic)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover .PreviewBox {
    display: block;
    opacity: 1;
    height: 320px;
    width: 345px;
    transition-duration: 0.25s;
    transition-delay: 0.25s;
    z-index: 2;
    visibility: visible;
  }
  //   &:hover:first-of-type .PreviewBox {
  //     right: 0;
  //     left: 0;
  //     transform: translateY(-50%);
  //   }
  //   &:hover:last-of-type .PreviewBox {
  //     right: 0;
  //     left: 0;
  //     transform: translateY(-50%) translateX(-33%);
  //   }
`;
export const ItemImg = styled.div`
  height: 128px;
  min-width: 230px;
  width: inherit;
  border: 3px solid transparent;
  transition: all 0.5s ease;
  background-image: url(${(props) => (props.image ? props.image : null)});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 6px;
`;
export const ItemBorder = styled.div`
  border: 3px solid transparent;
  border-radius: 9px;
  &:hover {
    border: 3px solid #fff;
  }
`;

export const PreviewBox = styled.div`
  position: absolute;
  height: 0px;
  width: 0px;
  // background: red;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  z-index: 0;
  opacity: 0;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  cursor: pointer;
  visibility: hidden;
  transition: 0.2s all ease;
`;
export const CardImg = styled.div`
  width: 100%;
  height: 55%;
  background: linear-gradient(44deg, #06f3b6, #f34706);
  background-repeat: no-repeat;
  background-color: black;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ preview }) =>
    preview &&
    `
    background-image: url(${preview});
    background-size: cover;
  `}

  ${({ preview }) =>
    !preview &&
    `
    animation: gradient 2s ease infinite;
    background-size: 200% 200%;
    `}
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: inherit;
`;
export const CardTitleText = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2em")};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  position: ${(props) => (props.absolute ? "absolute" : "relative")};
  z-index: ${(props) => (props.index ? props.index : "1")};
`;
export const CardInfo = styled.div`
  background-color: #141414;
  // height: 45%;
  width: 100%;
  color: #e5e5e5;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const InfoContainer = styled.div`
  // height: 100%;
  padding: 16px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const LeftButtons = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
`;
export const ControlButton = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  background: transparent;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 4px;

  &:hover {
    border: 2px solid white;
  }
`;

export const Row = styled.div`
  width: 100%;
  font-size: 16px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
