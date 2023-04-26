import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 50vh;
  margin: 5px;
  cursor: pointer;
  min-width: 300px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Collection = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  );
};

export default Collection;
