import React, { Component } from "react";
import { AppBar, Grid, withStyles, Paper, Box } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import './Gridstyle.css'
import Header from "../Header/main";
import { Link } from "react-router-dom"
import { CardContent, CardMedia, Typography } from "@mui/material";

let movies = [
  {
    title: "겨울왕국1",
    src: "./frozen_one.jpeg",
    logo: "./frozen1_logo.png",
    color: "#CCE5FF"
  }, 
  {
    title: "겨울왕국2",
    src: "./frozen2.jpeg",
    logo: "./frozen2_logo.png",
    color: "#6666FF"
   },
   {
     title: "라푼젤",
     src: "./tangled.jpeg",
     logo: "./tangled_logo.png",
     color: "#FFCCFF"
   }, 
   {
     title: "알라딘",
     src: "./aladin.jpeg",
     logo: "./aladin_logo.png",
     color: "#B266FF"
   }, 
   {
      title: "뮬란",
      src: "./mulan.jpeg",
      logo: "./mulan_logo.png",
      color: "#990000"

   },
   {
     title: "인어공주",
     src: "./ariel.jpeg",
     color: "#FF6666"
   }, 
   {
     title: "미녀와 야수",
     src: "./beautyandthebeast.jpg",
     color: "#FFE91A"
   }, 
   {
     title: "신데렐라",
     src: "./cinderella.jpeg",
     color: "#FFFBDB"
   }, 
   {
     title: "모아나",
     src: "./moana.jpg",
     color: "#00CC00"
   }, 
  //  {
  //    title: "포카혼타스",
  //    src: "./pochahontas.jpg"
  //   }, 
    { 
      title: "백설공주",
      src: "./whitesnow.jpg",
      color: "#FF0000"
    }
]


class InfoPage extends Component {
  constructor() {
    super();
    this.state = {
      movies
    }
  }

  render() {
    let { movies } = this.state;
    console.log(movies)
    return (
      <Grid container className="whole-background">
        <Grid item xs container flex-direction="row" className="upper-background">
          <Grid item xs>
            <div className="snow-white-top"></div>
          </Grid>
          <Grid item xs>
            <div className="cinderella-top"></div>
          </Grid>
          <Grid item xs>
            <div className="frozen-two-top"></div>
          </Grid>
          <Grid item xs>
            <div className="mulan-top"></div>
          </Grid>
          <Grid item xs>
            <div className="aladin-top"></div>
          </Grid>
          <Grid item xs>
            <div className="frozen-one-top"></div>
          </Grid>
          <Grid item xs>
            <div className="little-mermaid-top"></div>
          </Grid>
          <Grid item xs>
            <div className="moana-top"></div>
          </Grid>
          <Grid item xs>
            <div className="tangled-top"></div>
          </Grid>
        </Grid>
      <Grid item xs container width="100%" display="flex" flex-direction="row" className="background-setting">
        <Grid item xs>
          <div className="snow-white"></div>
        </Grid>
        <Grid item xs>
          <div className="cinderella"></div>
        </Grid>
        <Grid item xs>
          <div className="frozen-two"></div>
        </Grid>
        <Grid item xs>
          <div className="mulan"></div>
        </Grid>
        <Grid item xs>
          <div className="aladin"></div>
        </Grid>
        <Grid item xs>
          <div className="frozen-one"></div>
        </Grid>
        <Grid item xs>
          <div className="little-mermaid"></div>
        </Grid>
        <Grid item xs>
          <div className="moana"></div>
        </Grid>
        <Grid item xs>
          <div className="tangled"></div>
        </Grid>
      </Grid>
      
        {/* {
          movies.map((element, index) => (
            <div>
              <div sx={{ color: {element.color}}}>
                {/* <img src={element.src} alt={element.title} className="image-setting-left"></img>   */}
              {/* </div> */}
              
              
              {/* <CardMedia
                component="img"
                height="140"
                width="70%"
                image={element.src}
                alt={index}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element.title}
                </Typography>
              </CardContent> */}
            {/* </div> */}
          {/* ))
        } */}
      </Grid>
      // <div>
      //   {/* <Header></Header> */}
      // <div>
      //   <Grid container spacing={6} justify="flex-start">
      //     {
      //         movies.map((element, index) => (
      //           <Grid item xs={12} sm={6} md={4} lg={4}>
      //             <div className="individual" >
      //               <div className= "color">
                    
      //                 <div className = "rectangle" >
      //                   <div class="text" > Hello! </div>
      //                   <div >
      //                       <img src={element} alt={index} className="profile"></img>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </Grid>
      //         ))
      //       }
      //       <Grid item xs={12} sm={6} md={4} lg={4}>
      //       <div>
      //       &nbsp;
      //       </div >
      //       <div className="individual" >
      //       <div className= "color">
            
      //       <div className = "rectangle" >
      //       <div className="text" > Hello! </div>
      //       <div >
      //           <img src="female7.jpg" className="profile"></img>
      //       </div>
      //       </div>
      //       </div>
      //       </div>
      //       </Grid>
      //       <Grid item xs={12} sm={6} md={4} lg={4}>
      //       <div>
      //       &nbsp;
      //       </div >
      //       <div className="individual" >
      //       <div className= "color">
            
      //       <div className = "rectangle" >
      //       <div className="text" > Hello! </div>
      //       <div >
      //           <img src="female7.jpg" className="profile"></img>
      //       </div>
      //       </div>
      //       </div>
      //       </div>
      //       </Grid>
      //       <Grid item xs={12} sm={6} md={4} lg={4}>
      //       <div>
      //       &nbsp;
      //       </div >
      //       <div className="individual" >
      //       <div className= "color">
            
      //       <div className = "rectangle" >
      //       <div className="text" > Hello! </div>
      //       <div >
      //           <img src="female7.jpg" className="profile"></img>
      //       </div>
      //       </div>
      //       </div>
      //       </div>
      //       </Grid>
      //       <Grid item xs={12} sm={6} md={4} lg={4}>
      //       <div>
      //       &nbsp;
      //       </div >
      //       <div className="individual" >
      //       <div className= "color">
            
      //       <div className = "rectangle" >
      //       <div className="text" > Hello! </div>
      //       <div >
      //           <img src="female7.jpg" className="profile"></img>
      //       </div>
      //       </div>
      //       </div>
      //       </div>
      //       </Grid>
      //       <Grid item xs={12} sm={6} md={4} lg={4}>
      //       <div>
      //       &nbsp;
      //       </div >
      //       <div className="individual" >
      //       <div className= "color">
            
      //       <Link to = "/test2">
      //       <div className = "rectangle"  >
              
      //       <div className="text_movie" > Hello! </div>
      //       <div >
      //           <img src="female7.jpg" className="profile"></img>
      //       </div>
            
      //       </div>
      //       </Link>
      //       </div>
      //       </div>
      //       </Grid>

            

      //   </Grid>
      // </div>
      // </div>
    );
  }
}
export default (InfoPage);
