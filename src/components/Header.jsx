import React from 'react';
import DrawerAppBar from './DrawerAppBar';
import videoBg from '../assets/dementia.mp4';
import Stack from '@mui/material/Stack';

const Header = () => {
  return (
    <div className='header'>
      <DrawerAppBar />
      <div className ="overlay"></div>
      <video src = {videoBg}  autoPlay loop muted />
      <Stack direction= "column" justifyContent="center" alignItems="center" spacing={1} className="content">
        <p>Lets put an end to Dementia</p>
        <h1>Education, Prevention and Awareness for Dementia.</h1>
        </Stack>
    </div>
  );
}

export default Header;


