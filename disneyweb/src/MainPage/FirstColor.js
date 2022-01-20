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
  return<div className='totalDiv' >
    {/* <Box sx={{ width: '50%', height: "100%" }}> */}
      {/* <div className='line'> </div> */}
      <div className='lineCom'>
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
    <Box sx={{
      width: "50%",
      height: "100%"
      }}>
      <Fade right>
        <IntroBlock>
          {/* <h1 align="left">|</h1> */}
      
          <h6 align="right">
            1937년, <br />
            첫 color animation <br />
            백설 공주와 일곱 난쟁이
          </h6>
        </IntroBlock>
      </Fade>
    </Box>
  </div>
}

export default FirstColor;