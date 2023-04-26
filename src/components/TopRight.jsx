import React from "react";
import styled from "styled-components";
import cardLogo from "../images/cart.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 44px;
  cursor: pointer;
`;

const LeftContainer = styled.div`
  height: 44px;
  margin-right: 10px;
`;
const Price = styled.div`
  text-align: right;
  font: normal normal normal 16px/40px Inter;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const CardStatus = styled.h1`
  text-align: left;
  font: normal normal normal 12px/40px Inter;
  letter-spacing: 0px;
  color: #7f879e;
  opacity: 1;
  margin: 0;
  margin-top: -20px;
`;
const Icon = styled.img`
  width: 43px;
  object-fit: contain;
`;

const TopRight = () => {
  return (
    <Container>
      <LeftContainer>
        <Price>$0.00</Price>
        <CardStatus>Cart is empty</CardStatus>
      </LeftContainer>
      <Icon src={cardLogo} />
    </Container>
  );
};

export default TopRight;
