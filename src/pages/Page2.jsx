import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import {Item4 } from "../data";


const Container = styled.div`
  margin: 0 10%;
  position: relative;
  overflow: hidden;
`;
const CoverPicture = styled.img`
  margin-top: 48px;
  position: relative;
  height: 550px;
  width: 100vw;
  left: 0;
  object-fit: cover;
  flex: 1;
`;

const MainContainer = styled.div`
  overflow: hidden;
`;



const Page2 = () => {
  return (
    <>

    <MainContainer>
      <Link to="/page3">Next Page</Link>
      <Container>
        <Navbar />
      </Container>
      <CoverPicture src="Images/cover.png" />
      <Container>
        <Products item = {Item4}/>
        <Footer />
      </Container>
    </MainContainer>
    </>
  );
};

export default Page2;
