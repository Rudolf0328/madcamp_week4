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


let FirstColor = () => {
  return<div className='totalDivTwo'>
    {/* <Box sx={{ width: '50%', height: "100%" }}> */}
      {/* <div className='line'> </div> */}
      <div className='lineCom'>
      <div className='circle-in-the-line-outer'>
      <div className='circle-in-the-line'>
      </div>
      <div className='year-beside-line'>
        1937
        <Fade right>
        <IntroBlock>
          {/* <h1 align="left">|</h1> */}
      
          <div className='content-under-year'>
            첫 color animation <br />
            백설 공주와 일곱 난쟁이
          </div>
        </IntroBlock>
      </Fade>
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
  </div>
}

export default FirstColor;