import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Collections";
import { Item, Item2, Item3 } from "../data";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CarouselSlider from "../components/CarouselSlider";

const Container = styled.div`
  margin: 0 10%;
`;

const Page1 = () => {
  return (
    <>
      <Link to="/page2">Next Page</Link>
      <Container>
        <Navbar />
        <Products item={Item} />
        <CarouselSlider images={Item}></CarouselSlider>
        <Products item={Item2} />
        <CarouselSlider images={Item2}></CarouselSlider>
        <Products item={Item3} />
        <CarouselSlider images={Item3}></CarouselSlider>
        <Footer />
      </Container>
    </>
  );
};

export default Page1;
