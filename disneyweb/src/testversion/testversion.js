import React, { Component } from "react";
import { AppBar, Grid, withStyles, Paper } from "@material-ui/core";

import './testversionstyle.css'
import Header from "../Header/main";
import { Link } from "react-router-dom"


// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.

class Testversion extends Component {
  

  render() {
    
    return (
      <div>
        <Header></Header>
      <div className="container1">
        <Grid container spacing={6} justify="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={4} className="upper-grid1">
            <div>
            &nbsp;
            </div >
            <div className="individual1" >
            <div className= "color1" >
            <div className = "rectangle1" >
            <div class="text_movie1" >
                hellowordddddddddddd
                dddddddddddddddddd
                dddddddddasdfsdfasdfasdf
                 </div>
                 
            <div >
                <img src="./al1.jpg" className="profile1"></img>
            </div>
            </div>
            
            
            </div>
            </div>
           
            
            </Grid>
            

        

            

        </Grid>
      </div>
      </div>
    );
    
  }
}
export default (Testversion);
