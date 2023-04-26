import React from "react";
import styled from "styled-components";
import Collection from "./Collection";

const Container = styled.div`
  display: flex;
  margin-top: 80px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  text-align: center;
  font: normal normal 300 26px/41px Inter;
  letter-spacing: 6.76px;
  color: #000000;
  opacity: 1;
`;
const View = styled.h1`
  text-align: center;
  font: normal normal 300 16px/41px Inter;
  letter-spacing: 0px;
  color: #0c62c4;
  opacity: 1;
`;

const TextContainer = styled.div`
  margin-top: 90px;
`;

const Hr = styled.hr`
  height: 1px;
  background-color: #eee;
  border: none;
`;

const Products = ({ item }) => {
  return (
    <>
      <Container>
        {item.map((item) => (
          <Collection key={item.id} item={item} />
        ))}
      </Container>
      <TextContainer>
        <Title>{item[0].title}</Title>
        <View>View Collection</View>
      </TextContainer>
      <Hr />
    </>
  );
};

export default Products;
