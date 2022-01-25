import { Box } from "@mui/system";
import { Component } from "react";
import './main.css';
<<<<<<< HEAD
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
=======
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom"
>>>>>>> wk

class Header extends Component {
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
              <div className="to-right-underline">
                <Link to="./info" style={{ textDecoration: 'none' }}>
                <div color="black" fontSize='24px' align='center' variant="overline" sx={{ fontWeight: 700 }}>작품</div>
                </Link>
              
              </div>
            </div>
          {/* </CustomWidthTooltip>
        </ThemeProvider> */}
      </Grid>
      <Link to = "/home" style={{textDecoration: "none"}}>
        <Grid item xs>
        <div className = "big">
        <div className="to-right-underline">
                <div color="black" fontSize='24px' align='center' variant="overline" sx={{ fontWeight: 700 }}>음악</div>
                
                </div>
              </div>
      </Grid>
      </Link>
      <Grid item xs>
      <div className = "big">
      <div className="to-right-underline">
              <div color="black" fontSize='24px' align='center' variant="overline" sx={{ fontWeight: 700 }}>미니게임</div>
              </div>
            </div>
      </Grid>
      
      <Grid item xs container alignItems='center'>
        <Grid item xs>
          <Typography color="black" fontSize='18px' align='right' sx={{ fontWeight: 700 }}>공듀</Typography>
        </Grid>
        <Grid item xs>
          <img className="round-image"></img>
        </Grid>
      </Grid>
    </Grid>
  }
}

export default Header;