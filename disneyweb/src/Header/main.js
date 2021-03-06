import { Box } from "@mui/system";
import { Component } from "react";
import './main.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import {Link} from "react-router-dom";
// import { Tooltip, tooltipClasses } from "@material-ui/core";
import Zoom from '@mui/material/Zoom';

// const CustomWidthTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))({
//   [`& .${tooltipClasses.tooltip}`]: {
//     width: 137,
//     // color: '#191C83'
//   },
// });

// const theme = createTheme({
//   components: {
//     MuiTooltip: {
//       styleOverrides: {
//         tooltip: {
//           backgroundColor: "#191C83"
//         }
//       }
//     }
//   }
// });

// TODO: 선 가운데로 이동
// TODO: 글씨 크기 조절
// TODO: 타이포그래피 버튼으로 변경
// TODO: 탭 누르면 선이랑 글씨 볼드 유지되게

class BeforeHeader extends Component {
  render() {
    return<Grid container alignItems="center" className="menu" name="hover-feedback" justifyContent='space-evenly' flexDirection='row' spacing={2} sx={{
      // width: '100%',
      // height: '15%',
      padding: '2.5%',
      height: "157px",
      backgroundColor: 'white',
    }} className="header">
      <Grid item xs alignItems="flex-start">
          <Link to="/">
            <img src="./diswiki.png" align='left' width='241px' height='88.86px'></img>
          </Link>
      </Grid>
      <Grid item xs>
        {/* <ThemeProvider theme={theme}>
          <CustomWidthTooltip> */}
            <div className = "big">
              <div className="to-right-underline" style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                <Link to="./info" style={{ textDecoration: 'none' }}>
                <div color="black" fontSize='24px' id="normal-font-menu" align='center' variant="overline" sx={{ fontWeight: 700 }}>작품</div>
                </Link>
              
              </div>
            </div>
          {/* </CustomWidthTooltip>
        </ThemeProvider> */}
      </Grid>
      
        <Grid item xs>
        <div className = "big">
          <div className="to-right-underline" style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
            <Link to = "/home" style={{textDecoration: "none" }}>
                <div color="black" fontSize='24px' id="normal-font-menu" align='center' variant="overline" sx={{ fontWeight: 700 }}>음악</div>
                </Link>
                </div>
              </div>
      </Grid>
      <Grid item xs>
      <div className = "big">
      <div className="to-right-underline" style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
              <div color="black" fontSize='24px' id="normal-font-menu" align='center' variant="overline" sx={{ fontWeight: 700 }}>미니게임</div>
              </div>
            </div>
      </Grid>
      
      <Grid item xs container alignItems='center'>
        <Grid item xs>
          <div color="black" fontSize='18px' id="normal-font-menu" align='center' sx={{ fontWeight: 700, right: "10px" }}>공듀</div>
        </Grid>
        <Grid item xs>
          <img className="round-image"></img>
        </Grid>
      </Grid>
    </Grid>
  }
}

class Header extends Component {
  render() {
  return (
  <Grid continer className="header-design">
    <Grid item xs alignItems="flex-start" align="center">
      <Link to="/animation">
        <img src="./camera.png" className="icon-design"></img>
      </Link>
    </Grid>
    <Grid item xs align="center">
      <Link to="/">
      <img src="./diswiki.png" className="logo-design"></img>
      </Link>
    </Grid>
    <Grid item xs align="center">
      <Link to="/music">
        <img src="./music-notes.png" className="icon-design"></img>
      </Link>
    </Grid>
  </Grid>
  )
  }
}

export default Header;