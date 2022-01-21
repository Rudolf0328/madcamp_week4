import { Box } from "@mui/system";
import { Component } from "react";
import './main.css';

class Header extends Component {
  render() {
    return<Box className="container">
      <img src="./diswiki.png" className="logo-diswiki"> </img>
    </Box>
  }
}

export default Header;