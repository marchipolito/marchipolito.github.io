import React from "react";
import styled from "styled-components";
import profPic from "../images/profile.jpg";
import oceanPic from "../images/ocean.jpg";
import LoadingSpinner from "./LoadingSpinner";
import SentMsg from "./SentMsg";

import {
  Blackout,
  ButtonsContainer,
  ContentWrapper,
  Modal,
} from "./StyledComponents";
import { CloseBtn, SubmitBtn } from "./Buttons";
import { useAppContextData } from "../context/AppContext";

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 17vw;
  height: clamp(150px, 20vw, 20vw);
`;
const Header = styled.h1`
  color: #ffffff;
  // font-size: 3vw;
  font-size: clamp(42px, 5vw, 5vw);
`;

const InputSection = styled.div`
  // width: 100%;
  margin-right: 4vw;
  margin-left: 4vw;
  // display: flex;
  // justify-content: space-between;
`;
const InputContainer = styled.div`
  margin: 3vw 4vw;

  &:first-of-type {
    margin: 0 4vw;
  }
`;

const TextInput = styled.input`
  background: #666;
  border: 1px solid transparent;
  text-indent: 1vw;
  // border-radius: 6px;
  color: #fff;
  height: 3vw;
  min-height: 30px;
  // width: 18em;
  width: 100%;
  margin-bottom: 1.5vw;
  // font-size: 1.5vw;
  &::placeholder {
    color: lightgray;
  }
  &:focus-visible {
    outline: 1px solid white;
  }
`;

const TextArea = styled.textarea`
  background: #666;
  border: 1px solid transparent;
  text-indent: 1vw;
  // border-radius: 6px;
  color: #fff;
  resize: none;
  height: 15vw;
  // width: 18em;
  width: 100%;
  margin-bottom: 1.5vw;
  font-family: system-ui;
  // font-size: 1.5vw;
  &::placeholder {
    color: lightgray;
  }
  &:focus-visible {
    outline: 1px solid white;
  }
`;

const InputField = styled.div``;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  display: block;
`;

const Container = styled.div`
  display: ${({ flex }) => (flex ? "flex" : "block")};
  width: 100%;
`;
// const Image = styled.img`
//   // width: 100%;
//   height: 100%;
// `;
const Image = styled.div`
  // background-image: url(${profPic});
  background-image: url(${oceanPic});
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 25%;
`;

const ContactMe = () => {
  const {
    setShowExplore,
    exploreData,
    setShowMoreInfo,
    setInfoData,
    setContactMe,
    showSpinner,
    setShowSpinner,
    sentMsg,
    setSentMsg,
  } = useAppContextData();

  const hideForm = () => {
    setContactMe(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const action = e.target.action;

    setShowSpinner(true);
    fetch(action, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setShowSpinner(false);
        setSentMsg(true);

        resetFields();
        console.log("success");
      })
      .catch((e) => {
        console.log("err", e);
      });
  };

  const resetFields = () => {
    setTimeout(() => {
      setSentMsg(false);
    }, 1000);
    document.getElementById("Email").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Message").value = "";
  };

  return (
    <>
      <Blackout />
      <ContentWrapper onClick={hideForm} className="ContentWrapper">
        <Modal onClick={(e) => e.stopPropagation()}>
          <div className="test" style={{ width: "100%", overflow: "hidden" }}>
            <CloseBtn onClick={hideForm} />
            <HeaderRow>
              <Header>Say Hello</Header>
            </HeaderRow>
            <Container>
              {!showSpinner && !sentMsg && (
                <Form
                  action="https://script.google.com/macros/s/AKfycbzFzzOxorEcSWuIikoauRspfjDe7_7-KZDG38_A9uwOmJYPKvap_S13BoBkXeq0uxIQmw/exec"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <InputSection className="InputSection">
                    <TextInput
                      id="Name"
                      name="Name"
                      type="text"
                      placeholder="Name"
                      required
                    ></TextInput>
                    <TextInput
                      id="Email"
                      name="Email"
                      type="email"
                      placeholder="Email"
                      required
                    ></TextInput>
                  </InputSection>
                  <InputSection>
                    <TextArea
                      id="Message"
                      name="Message"
                      placeholder="Send a message!"
                      required
                    ></TextArea>
                  </InputSection>
                  <InputSection>
                    <SubmitBtn />
                  </InputSection>
                </Form>
              )}
              {showSpinner && <LoadingSpinner />}
              {sentMsg && <SentMsg />}
            </Container>
          </div>
        </Modal>
      </ContentWrapper>
    </>
  );
};

export default ContactMe;
