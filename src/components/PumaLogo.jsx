import React from "react";
import styled from "styled-components";
import pumaLogo from "../images/puma-logo.png";

const LogoContainer = styled.div`
  /* background-color: #ad6f6f; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 326px;
  height: 147px;
  cursor: pointer;
`;

const Logo = styled.img`
  border-right: 0.5px solid #ccc;
  padding: 20px 10px 20px 0px;
  object-fit: cover;
  width: 169px;
  height: 84px;
  flex: 1;
`;

const Title = styled.h1`
  text-align: left;
  font: normal normal normal 14px/19px Inter;
  letter-spacing: 3.64px;
  color: #000000;
  opacity: 1;
  padding-left: 30px;
  flex: 1;
`;

const PumaLogo = () => {
  return (
    <LogoContainer>
      <Logo src={pumaLogo} />
      <Title>EXCLUSIVE</Title>
    </LogoContainer>
  );
};

export default PumaLogo;
