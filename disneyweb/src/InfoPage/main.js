import React, { Component } from "react";
import { AppBar, Grid, withStyles, Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { MDBSmoothScroll } from "mdbreact";
import './Gridstyle.css'


// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.

class InfoPage extends Component {
  render() {
    return (
      <div className="container">
        <Grid container spacing={6} justify="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color">
            
            <div className = "rectangle" >
            <div class="text" > Hello! </div>
            <div >
                <img src="female7.jpg" className="profile"></img>
            </div>
            </div>
            </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div>
            <div className="individual">
            <Paper className = "paper">
            <div >
                <img src="female7.jpg" className="profile"></img>
              </div>
            </Paper>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div>
            <div className="individual">
            <Paper className = "paper">
            <div >
                <img src="female7.jpg" className="profile"></img>
              </div>
            </Paper>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div>
            <div className="individual">
            <Paper className = "paper">
            <div >
                <img src="female7.jpg" className="profile"></img>
              </div>
            </Paper>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div>
            <div className="individual">
            <Paper className = "paper">
            <div >
                <img src="female7.jpg" className="profile"></img>
              </div>
            </Paper>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div>
            &nbsp;
            </div>
            <div className="individual">
            <Paper className = "paper">
            <div >
                <img src="female7.jpg" className="profile"></img>
              </div>
            </Paper>
            </div>
            </Grid>

            

        </Grid>
      </div>
    );
  }
}
export default (InfoPage);
