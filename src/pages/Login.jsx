import React from "react";
import styled from "styled-components";
import rightImage from "../images/image-1.png";
import { Link } from "react-router-dom";
import PumaLogo from "../components/PumaLogo";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Form = styled.div`
  width: 50vw;
  margin-top: 100px;
  padding: 0px 10rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-top: 50px;
    width: 100%;
    padding: 0px;

  }
`;

const ImageContainer = styled.div`
  width: 50vw;
  @media (max-width: 768px) {
    display: none;
  }
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  /* width: 100%; */
  object-fit: cover;
`;

const FormSub = styled.div`
  flex-direction: column;
  display: flex;
`;

const Label = styled.label`
  text-align: left;
  font: normal normal normal 12px/16px Inter;
  letter-spacing: 3.12px;
  color: #000000;
  opacity: 1;
  margin-bottom: 10px;
`;
const Input = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dfdfe9;
  opacity: 1;
  margin-bottom: 34px;
  height: 48px;
  border-left: 2px solid black;
`;

const Button = styled.button`
  text-align: center;
  font: normal normal normal 14px/19px Inter;
  letter-spacing: 3.64px;
  color: #ffffff;
  opacity: 1;
  background: #000000 0% 0% no-repeat padding-box;
  border: 1px solid #d7d7ec;
  height: 48px;
  margin-bottom: 44px;
  cursor: pointer;
`;

const SubTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubText = styled.p`
  text-align: center;
  font: normal normal 300 12px/32px Inter;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const SubText2 = styled.p`
  text-align: center;
  font: normal normal normal 12px/32px Inter;
  font-weight: 600;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-left: 19px;
`;

const RightsText = styled.p`
  text-align: center;
  font: normal normal 300 12px/41px Inter;
  letter-spacing: 0px;
  color: #898995;
  opacity: 1;
  margin-bottom: -30px;
`;

const PrivacyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrivacyText = styled.p`
  text-align: center;
  font: normal normal 300 12px/41px Inter;
  letter-spacing: 0px;
  color: #898995;
  opacity: 1;
`;

const PrivacyDot = styled.div`
  height: 2px;
  width: 2px;
  background-color: grey;
  border-radius: 50%;
  margin: 0 10px;
`;

const nextPage = () => {};

const Login = () => {
  return (
    <Container>
      <Link style={{ color: "black", position: "absolute" }} to="/page1">
        next page
      </Link>
      <Form>
        <PumaLogo />
        <FormSub>
          <Label>E-MAIL</Label>
          <Input></Input>
          <Label>PASSWORD</Label>
          <Input></Input>
          <Button onClick={nextPage}>SIGN IN</Button>
        </FormSub>
        <SubTexts>
          <SubText>Don't you have an account?</SubText>
          <SubText2>Sign Up</SubText2>
        </SubTexts>
        <RightsText>©2022.PUMA Company | All Rights Reserved.</RightsText>
        <PrivacyContainer>
          <PrivacyText>PrivacyText</PrivacyText>
          <PrivacyDot />
          <PrivacyText>PrivacyText</PrivacyText>
        </PrivacyContainer>
      </Form>
      <ImageContainer>
        <Image src={rightImage} />
      </ImageContainer>
    </Container>
  );
};

export default Login;
