import * as React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Grid, Box } from '@mui/material';
import './main.css';

const IntroBlock = styled.div`
  margin-bottom: 135px;
  @media (max-width: 768px) {
    padding: 25px;
  }`;


let First10Million = () => {
  return<div className='totalDivThree' >
    {/* <Box sx={{ width: '50%', height: "100%" }}> */}
      {/* <div className='line'> </div> */}
      <div className='lineCom'>
      <div className='circle-in-the-line-outer'>
      <div className='circle-in-the-line'>
      </div>
      <div className='year-beside-line'>
        2013
        </div>
      </div>
      </div>
    {/* </Box> */}
    
      {/* <Box sx={{
      width: "50%",
      height: "100%"
      }}> */}
      {/* <Fade right>
        <IntroBlock>
          
        </IntroBlock>
      </Fade>
    </Box> */}
      <Fade right>
        <IntroBlock>
          {/* <h1 align="left">|</h1> */}
      
          <div className='right-content'>
            첫 한국 천만 영화<br />
            겨울 왕국
          </div>
        </IntroBlock>
      </Fade>
  </div>
}

export default First10Million;