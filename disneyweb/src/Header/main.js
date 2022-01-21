import { Box } from "@mui/system";
import { Component } from "react";
import './main.css';
import { Grid, Link, Typography } from "@mui/material";

class Header extends Component {
  render() {
    return<div className='container' alignItems="center" justifyContent='space-evenly' className='menu' flexDirection='row' spacing={2} sx={{
      // width: '100%',
      // height: '15%',
      padding: '2.5%',
      height: "157px",
      backgroundColor: 'white',
    }} className="header">
      <div className='item' alignItems="flex-start">
          <Link to="/home">
            <img src="./diswiki.png" align='left' width='241px' height='88.86px'></img>
          </Link>
      </div>
      <div className='item'>
        <a>
          <Typography color="black" fontSize='24px' align='center' sx={{ fontWeight: 700 }}>작품</Typography>
        </a>
      </div>
      <div className='item'>
        <a>
          <Typography color="black" fontSize='24px' align='center' sx={{ fontWeight: 700 }}>음악</Typography>
        </a>
      </div>
      <div className='item'>
        <a>
          <Typography color="black" fontSize='24px' align='center' sx={{ fontWeight: 700 }}>미니게임</Typography>
        </a>
      </div>
      
      <div className='item' xs className='container' alignItems='center'>
        <div className='item'>
          <Typography color="black" fontSize='18px' align='right' sx={{ fontWeight: 700 }}>공듀</Typography>
        </div>
        <div className='item'>
          <img className="round-image"></img>
        </div>
      </div>
    </div>
  }
}

export default Header;