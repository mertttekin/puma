import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';


const Container = styled.div`

`



const TopLeftIcon = (props) => {

  const handleClick = () => {
    console.log('Simgesine tıklandı.');
    props.ToogleCanvas();
  };

  return (
    <Container>
      <IconButton onClick={handleClick}>
        <MenuIcon style={{fontSize:43,cursor:'pointer',color:'black'}}/>
      </IconButton>
    </Container>
  )
}

export default TopLeftIcon