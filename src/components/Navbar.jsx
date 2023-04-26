import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import TopLeftIcon from "../components/TopLeftIcon";
import PumaLogo from "./PumaLogo";
import TopRight from "./TopRight";
import ClearIcon from "@mui/icons-material/Clear";
import avatar from "../images/avatar.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { IconButton } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000073;
  z-index: 3;
  transition: all 1.5s ease;
  transform: rotateX("angle");
  display: ${(props) => (props.canvas ? "block" : "none")};
`;
const LeftMenuContainer = styled.div`
  background-color: white;
  height: 100vh;
  max-width: 30vw;
  min-width: 400px;
  opacity: 1;
  transition: all 1.5s ease;
  transform: rotateX(100px);
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
const Text = styled.h2`
  text-align: left;
  font: normal normal 300 16px/41px Inter;
  letter-spacing: 4.16px;
  color: #000000;
  opacity: 1;
`;
const Profile = styled.div`
  border: 1px solid #eee;
  display: flex;
`;
const Info = styled.div`
  width: 100%;
`;
const ProfilePicture = styled.img`
  height: 100%;
`;
const Name = styled.h2`
  text-align: left;
  font: normal normal normal 16px/41px Inter;
  letter-spacing: 0px;
  color: #000000;
  padding-left: 14px;
  margin: 0;
`;
const Mail = styled.p`
  text-align: left;
  font: normal normal 300 12px/41px Inter;
  letter-spacing: 0px;
  color: #94a1b1;
  opacity: 1;
  padding-left: 17px;
  margin-top: -22px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 20px;
  padding: 0 14px;
`;
const MyText = styled.h2`
  text-align: left;
  font: normal normal normal 12px/41px Inter;
  letter-spacing: 0px;
  color: #0c62c4;
  opacity: 1;
  padding-left: 5px;
  margin-right: 40px;
  cursor: pointer;
`;
const OutText = styled.h2`
  text-align: left;
  font: normal normal normal 12px/41px Inter;
  letter-spacing: 0px;
  color: #9ea3ae;
  opacity: 1;
  padding-left: 5px;
  cursor: pointer;
`;
const ListContainer = styled.div`
  margin: 36px;
`;
const ListHeader = styled.h2`
  text-align: left;
  font: normal normal 300 14px/41px Inter;
  letter-spacing: 2.24px;
  color: #8e8fa9;
  opacity: 1;
`;
const ListItem = styled.h2`
  text-align: left;
  font: normal normal 300 14px/41px Inter;
  letter-spacing: 2.24px;
  color: #000000;
  opacity: 1;
  cursor: pointer;
`;

const Navbar = () => {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        try {
          setCanvas(false);
        } catch (error) {}
      }
    };
    document.addEventListener("mousedown", handler);
    return ()=>{
      document.removeEventListener("mousedown", handler)
    }
  });

  const [canvas, setCanvas] = useState(false);

  const ToggleCanvas = () => {
    setCanvas(!canvas);
  };

  return (
    <Container>
      <TopLeftIcon ToogleCanvas={ToggleCanvas} />
      <PumaLogo />
      <TopRight />
      <CanvasContainer canvas={canvas}>
        <LeftMenuContainer ref={menuRef}>
          <Menu>
            <Text>MENU</Text>
            <IconButton onClick={ToggleCanvas} >
              <ClearIcon style={{ cursor: "pointer" }} />
            </IconButton>
          </Menu>
          <Profile>
            <ProfilePicture src={avatar} />
            <Info>
              <Name>Teresa Owens</Name>
              <Mail>teresa.owens@gmail.com</Mail>
              <ButtonsContainer>
                <AccountCircleRoundedIcon
                  style={{ color: "#0C62C4", cursor: "pointer" }}
                />
                <MyText>My Profile</MyText>
                <LogoutRoundedIcon
                  style={{ color: "#9ea3ae", cursor: "pointer" }}
                />
                <OutText>Sign Out</OutText>
              </ButtonsContainer>
            </Info>
          </Profile>
          <ListContainer>
            <ListHeader>COLLECTIONS</ListHeader>
            <ListItem>PUMA X PERKS AND MINI</ListItem>
            <ListItem>PUMA X POKEMON</ListItem>
            <ListItem>PUMA X CHILDHOOD DREAMS</ListItem>
            <ListHeader>ACCOUNT</ListHeader>
            <ListItem>MY PROFILE</ListItem>
            <ListItem>ORDER HISTORY</ListItem>
            <ListItem>SETTINGS</ListItem>
            <ListItem>SIGN OUT</ListItem>
          </ListContainer>
        </LeftMenuContainer>
      </CanvasContainer>
    </Container>
  );
};

export default Navbar;
