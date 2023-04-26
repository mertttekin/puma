import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

const MainTitle = styled.h1`
  text-align: center;
  font: normal normal 300 26px/41px Inter;
  letter-spacing: 6.76px;
  color: #000000;
  opacity: 1;
`;

const Hr = styled.hr`
  height: 1px;
  background-color: #eee;
  border: none;
`;

const Button = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #000;
  opacity: 1;
  text-align: center;
  font: normal normal 300 14px/32px Inter;
  letter-spacing: 3.64px;
  color: #000000;
  margin: 80px auto;
  padding: 1em;
`;

const Products = ({ item }) => {
  return (
    <>
      <MainTitle>PUMA X PERKS AND MINI COLLECTION</MainTitle>
      <Container>
        {item.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Container>
      <div className="div" style={{ display: "flex" }}>
        <Button>BROWSE COLLECTIONS</Button>
      </div>
      <Hr />
    </>
  );
};

export default Products;
