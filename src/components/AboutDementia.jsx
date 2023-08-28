import React from 'react';
import { Container } from '@mui/system'
import { Typography } from '@mui/material';


function AboutDementia() {
  return (
    <div className="about-dementia">
    <Container maxWidth="md">
        <Typography variant="p" sx={{color:"#ffba00", fontSize:"1.7rem", textAlign:"center", width:"50%"}} className="quote">
        "Kindness can transform someone's dark moment with a blaze of light. You'll never know how much your caring matters. Make a difference for another today."
        - Amy Leigh Mercree
        </Typography>
    </Container>
    </div>
  );
}

export default AboutDementia;


