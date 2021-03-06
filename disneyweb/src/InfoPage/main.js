import React, { Component } from "react";
import { AppBar, Grid, withStyles, Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import './Gridstyle.css'
import Header from "../Header/main";
import { Link } from "react-router-dom"
import { unstable_deprecatedPropType } from "@mui/utils";

// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.

let toggle1 = false;
let InfoPage = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title : props.title
  //   }
  // }
  
  function onClickLP(e) {
    console.log("on click")
    console.log(e.target.id)
    if(e.target.id == 1) {
      console.log("frozen")
      let title=["Frozen Heart","Do You Want to Build a Snowman", "For the First Time in Forever","Love Is an Open Door","Let It Go", "Reindeers Are Better Than People", "In Summer","For the First Time in Forever Reprise", "Fixer Upper"]
      props.setTitle(title);
      props.setImage("./al4.jpg")
    } else if(e.target.id == 2) {
      console.log("aladin")
      let title=["Friend Like Me", "Arabian Nights", "Speechless", "Prince Ali"]
      props.setTitle(title)
      props.setImage("./al3.jpg")
    }
  }

  const doAction = () => {
    const height = this.height
    const width = this.setState.prototype.spacing
      
    //Increase dimension(Zooming)
    this.setState({
      height : height + 10,
      width : width + 10,
    })  
  }
  // clickalbum(){
  //   if(!toggle1){
  //     document.querySelector(".color").classList.add("clickalbum");
  //     toggle1 = true;
  //   }
  //   else{
  //     document.querySelector(".color").classList.remove("clickalbum");
  //     toggle1 = false;
  //   }
  // }
    let url = "/player"
    return (
      <div>
        <Header></Header>
      <div className="container">
        <Grid container spacing={6} justify="flex-start">
          <Grid item xs={12} sm={6} md={4} lg={4} className="upper-grid">
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color" id = "color" >
            <Link
              to={{
                pathname: url,
                state: {
                  img: "./al1.jpg",
                  titles: []
                },
              }}
            >
              <div className = "rectangle" >
            <div class="text" > </div>
            <div >
                <img src="./al1.jpg" className="profile"></img>
            </div>
            </div>
            </Link>
            <div className="lpsize">
              <img src = './lp.jpg' ></img>
            </div>
            
            </div>
            </div>
           
            
            </Grid>
            

            
            <Grid item xs={12} sm={6} md={4} lg={4} className="upper-grid">
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color" id = "color" >
          <Link to ="/player">
            <div className = "rectangle" >
            <div class="text" > </div>
            <div >
                <img src="./al2.jpg" className="profile"></img>
            </div>
            </div>
            </Link>
            <div className="lpsize">
              <img src = './lp.jpg' ></img>
            </div>
            
            </div>
            </div>
           
            
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} className="upper-grid">
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color" id = "color" >
            <Link
              to={{
                pathname: url
              }}
            >
            <div className = "rectangle" >
            <div class="text" > </div>
            <div >
                <img src="./al3.jpg" className="profile" id={2} onClick={onClickLP}></img>
            </div>
            </div>
            </Link>
            <div className="lpsize">
              <img src = './lp.jpg' ></img>
            </div>
            
            </div>
            </div>
           
            
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} className="upper-grid">
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color" id = "color" >
            <Link
              to={{
                pathname: url
              }}
            >
            <div className = "rectangle" >
            <div class="text" > </div>
            <div >
                <img src="./al4.jpg" className="profile" id={1} onClick={onClickLP}></img>
            </div>
            </div>
            </Link>
            <div className="lpsize">
              <img src = './lp.jpg' ></img>
            </div>
            
            </div>
            </div>
           
            
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} className="upper-grid">
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color" id = "color" >
          <Link to ="/player">
            
            <div className = "rectangle" >
            <div class="text" > </div>
            <div >
                <img src="./al5.jpg" className="profile"></img>
            </div>
            </div>
            </Link>
            <div className="lpsize">
              <img src = './lp.jpg' ></img>
            </div>
            
            </div>
            </div>
           
            
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} className="upper-grid">
            <div>
            &nbsp;
            </div >
            <div className="individual" >
            <div className= "color" id = "color" >
          <Link to ="/player">
            <div className = "rectangle" >
            <div class="text" > </div>
            <div >
                <img src="./al6.jpg" className="profile"></img>
            </div>
            </div>
            </Link>
            <div className="lpsize">
              <img src = './lp.jpg' ></img>
            </div>
            
            </div>
            </div>
           
            
            </Grid>

            

        </Grid>
      </div>
      </div>
    );
    

}
export default (InfoPage);