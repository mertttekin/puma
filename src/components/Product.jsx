import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-height: 466px;
  min-width: 352px;
  align-items: center;
  display: flex;
  flex-direction: column;

`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  text-align: center;
  font: normal normal 300 20px/32px Inter;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  line-break: after-4;
`;
const Price = styled.p`
  text-align: center;
  font: normal normal 600 18px/32px Inter;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Title>{item.title}</Title>
      <Price>{item.price}</Price>
    </Container>
  );
};

export default Product;
