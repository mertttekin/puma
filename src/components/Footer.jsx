import React from "react";
import styled from "styled-components";
import logo from "../images/puma-logo.png";

const Container = styled.div`
  margin-top: 90px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  text-align: center;
  width: 75px;
`;

const MainText = styled.h1`
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
    margin-bottom: 150px;
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

const Footer = () => {
  return (
    <Container>
      <Logo src={logo} />
      <MainText>©2022.PUMA Company | All Rights Reserved.</MainText>
      <PrivacyContainer>
          <PrivacyText>PrivacyText</PrivacyText>
          <PrivacyDot />
          <PrivacyText>PrivacyText</PrivacyText>
        </PrivacyContainer>
    </Container>
  );
};

export default Footer;
