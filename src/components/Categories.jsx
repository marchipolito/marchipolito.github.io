import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import oceanPic from "../images/ocean.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data/history";
import { useAppContextData } from "../context/AppContext";
import ExploreLink from "./ExploreLink";
import Tooltip from "./Tooltip";
import { ItemCard, ItemImg, ItemBorder } from "./StyledComponents";

const CategoryContainer = styled.div`
  position: absolute;
  width: 100vw;
  top: 82vh;
`;
const CategoryWrapper = styled.div`
  background-color: #141414;
  width: 100vw;
  // height: 14.7vw;
  // max-height: 14.7vw;
  margin-bottom: 4rem;
  &:first-of-type {
    background-color: transparent;
  }
`;
const CategoryTitle = styled.h2`
  color: #e5e5e5;
  font-size: 20px;
  margin-left: 4vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 24px;

  &:hover .ExploreText {
    opacity: 1;
    max-width: 200px;
    height: auto;
  }
`;

const CardContainer = styled.div`
  display: flex;
  position: absolute;
  flex-flow: row;
  column-gap: 0.5vw;
  margin-left: 4vw;
  align-items: center;
  width: 94vw;
`;

const gradient = keyframes`
  0%{background-position:37% 0%}
  50%{background-position:64% 100%}
  100%{background-position:37% 0%}
  `;

// const ItemCard = styled.div`
//   height: 128px;
//   width: 230px;
//   min-width: 230px;
//   background: #141414;
//   border-radius: 5px;
//   // margin-right: 6px;
//   position: relative;
//   transition-duration: 1s;
//   transition-delay: 0.5s;
//   background-image: url(${(props) => (props.image ? props.image : oceanPic)});
//   background-size: cover;
//   cursor: pointer;

//   &:hover .PreviewBox {
//     display: block;
//     opacity: 1;
//     height: 320px;
//     width: 345px;
//     transition-duration: 0.25s;
//     transition-delay: 0.25s;
//     z-index: 2;
//     visibility: visible;
//   }

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
// `;

const SliderContainer = styled.div`
  position: relative;
  height: 128px;
  min-height: 100px;
  width: 100vw;
  display: flex;
  justify-content: space-between;

  &:hover .ArrowBtnWrap {
    opacity: 1;
  }
`;

const ArrowBackground = styled.div`
  height: 100%;
  // width: 60px;
  width: 4vw;
  position: absolute;
  background: #141414;
  opacity: 0.3;
  display: flex;
  border-radius: 6px;
  transition: all 0.2s ease;
  // justify-content: center;
  // align-items: center;
`;

const ArrowBtnWrap = styled.div`
  position: relative;
  z-index: 2;
  opacity: 0;
  &:hover .ArrowBackground {
    opacity: 0.75;
  }
`;
const ArrowBtn = styled.div`
  height: 100%;
  // width: 60px;
  width: 4vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Categories = () => {
  const { setShowMoreInfo, setInfoData, setShowPreview, setCategory } =
    useAppContextData();
  const { categories, history } = data;
  const [showText, setShowText] = useState(false);
  let timeoutId;

  const exploreAll = (e) => {
    console.log(e.target);
    setShowText((prev) => !prev);
  };

  const showMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const showPreview = (e, history, category) => {
    const offsetLeft = `${e.target.getBoundingClientRect().left}px`;
    const offsetTop = `${e.target.getBoundingClientRect().top}px`;

    let target = document.querySelector(".Preview");
    target.style.opacity = "1";
    target.style.height = "320px";
    target.style.width = "345px";
    target.style.transform = "translate(-86px,-110px)";
    target.style.visibility = "visible";
    target.style.left = offsetLeft;
    target.style.top = offsetTop;
    setInfoData(history);
    setCategory(category);
  };

  return (
    <CategoryContainer className="CategoryContainer">
      {categories.map((category, index) => (
        <CategoryWrapper className="CategoryWrapper">
          <CategoryTitle>
            {Object.values(category)[0]}
            {/* <ExploreLink
              className="ExploreLink"
              onMouseEnter={exploreAll}
              onMouseLeave={exploreAll}
              data={Object.entries(category)[0]}
            ></ExploreLink> */}
          </CategoryTitle>
          <SliderContainer className="SliderContainer">
            <ArrowBtnWrap className="ArrowBtnWrap">
              <ArrowBackground className="ArrowBackground"></ArrowBackground>
              <ArrowBtn className="ArrowBtn">
                <FontAwesomeIcon
                  icon={["fas", "angle-left"]}
                  size="2x"
                  style={{ color: "white" }}
                />
              </ArrowBtn>
            </ArrowBtnWrap>
            <ArrowBtnWrap className="ArrowBtnWrap">
              <ArrowBackground className="ArrowBackground"></ArrowBackground>
              <ArrowBtn className="ArrowBtn">
                <FontAwesomeIcon
                  icon={["fas", "angle-right"]}
                  size="2x"
                  style={{ color: "white" }}
                />
              </ArrowBtn>
            </ArrowBtnWrap>
            <CardContainer className="CardContainer">
              <div
                className="test"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  overflowY: "hidden",
                  flexFlow: "row",
                  columnGap: "1vw",
                }}
              >
                {Object.entries(history[Object.keys(category)[0]]).map(
                  (history) => {
                    const {
                      company,
                      role,
                      years,
                      months,
                      skills,
                      isCurrent,
                      sequalNum,
                      image,
                      preview,
                      releaseDate,
                    } = history[1];

                    return (
                      <>
                        <ItemBorder>
                          <ItemCard
                            className="ItemCard"
                            image={image}
                            // onMouseEnter={(e) => {
                            //   setTimeout(() => {
                            //     showPreview(e, history[1], category);
                            //   }, 300);
                            // }}
                            onClick={() => {
                              setInfoData(history[1]);
                              setShowMoreInfo(true);
                            }}
                          >
                            {/* <ItemImg image={image} /> */}
                          </ItemCard>
                        </ItemBorder>
                      </>
                    );
                  }
                )}
              </div>
            </CardContainer>
          </SliderContainer>
        </CategoryWrapper>
      ))}
    </CategoryContainer>
  );
};

export default Categories;
