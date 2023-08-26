import React from 'react';
import DrawerAppBar from './DrawerAppBar';
import videoBg from '../assets/dementia.mp4';
import Stack from '@mui/material/Stack';
import Container from '@mui/system/Container';

const Header = () => {
  return (
    <div className='header'>
      <DrawerAppBar />
      
      <div className ="overlay"></div>
      <video src = {videoBg}  autoPlay loop muted />
      <Stack direction= "column" justifyContent="center" alignItems="center" spacing={1} className="content">
        <h1>Education, Prevention and Awareness for Dementia.</h1>
        <p>Remebering Together, Every Step of the Way</p>
        <button className="btn">Explore</button>
        </Stack>
    </div>
  );
}

export default Header;


