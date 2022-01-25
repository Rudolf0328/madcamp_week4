import React, { Component } from "react";
import { AppBar, Grid, withStyles, Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import './Gridstyle.css'
import Header from "../Header/main";
import { Link } from "react-router-dom"

// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.


class InfoPage extends Component {
  
  doAction(){
    const height = this.height
    const width = this.setState.prototype.
      
    //Increase dimension(Zooming)
    this.setState({
      height : height + 10,
      width : width + 10,
    })  
  }

  render() {
    return (
      <div>
        <Header></Header>
      <div className="container">
        <Grid container spacing={6} justify="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={4} className="upper-grid">
            <div>
            &nbsp;
            </div >
            <Link to="/player">
            <div className="individual" >
            <div className= "color" >
            
            <div className = "rectangle" >
            <div class="text" > Hello! </div>
            <div >
                <img src="./al1.jpg" className="profile"></img>
            </div>
            </div>
            <div className="lpsize">
              <img src = './lp.jpg' ></img>
            </div>
            
            </div>
            </div>
            </Link>
            
            
            
            </Grid>
            

            
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color">
            
            <div className = "rectangle" >
            <div className="text" > Hello! </div>
            <div >
                <img src="./al2.jpg" className="profile"></img>
            </div>
            </div>
            </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color">
            
            <div className = "rectangle" >
            <div className="text" > Hello! </div>
            <div >
                <img src="./al3.jpg" className="profile"></img>
            </div>
            </div>
            </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color">
            
            <div className = "rectangle" >
            <div className="text" > Hello! </div>
            <div >
                <img src="./al4.jpg" className="profile"></img>
            </div>
            </div>
            </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color">
            
            <div className = "rectangle" >
            <div className="text" > Hello! </div>
            <div >
                <img src="./al5.jpg" className="profile"></img>
            </div>
            </div>
            </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color">
            
            <Link to = "/test2">
            <div className = "rectangle"  >
              
            <div className="text_movie" > Hello! </div>
            <div >
                <img src="./al6.jpg" className="profile"></img>
            </div>
            
            </div>
            </Link>
            </div>
            </div>
            </Grid>

            

        </Grid>
      </div>
      </div>
    );
    
  }
}
export default (InfoPage);