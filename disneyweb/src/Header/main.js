import { Box } from "@mui/system";
import { Component } from "react";
import './main.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Link, Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { Tooltip, tooltipClasses } from "@material-ui/core";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: 137,
    // color: '#191C83'
  },
});

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#191C83"
        }
      }
    }
  }
});

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
          <Link to="/home">
            <img src="./diswiki.png" align='left' width='241px' height='88.86px'></img>
          </Link>
      </Grid>
      <Grid item xs>
        <ThemeProvider theme={theme}>
          <CustomWidthTooltip>
            <Typography color="black" fontSize='24px' align='center' variant="overline" sx={{ fontWeight: 700 }}>작품</Typography>
          </CustomWidthTooltip>
        </ThemeProvider>
      </Grid>
      <Grid item xs>
      <ThemeProvider theme={theme}>
          <CustomWidthTooltip>
            <Typography color="black" fontSize='24px' align='center' variant="overline" sx={{ fontWeight: 700 }}>음악</Typography>
          </CustomWidthTooltip>
        </ThemeProvider>
      </Grid>
      <Grid item xs>
      <ThemeProvider theme={theme}>
          <CustomWidthTooltip>
            <Typography color="black" fontSize='24px' align='center' variant="overline" sx={{ fontWeight: 700 }}>미니게임</Typography>
          </CustomWidthTooltip>
        </ThemeProvider>
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