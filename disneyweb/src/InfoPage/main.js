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
    src: "./frozen1.jpeg",
    logo: "./frozen1_logo.png"
  }, 
  {
    title: "겨울왕국2",
    src: "./frozen2.jpeg",
    logo: "./frozen2_logo.png"
   },
   {
     title: "라푼젤",
     src: "./tangled.jpeg",
     logo: "./tangled_logo.png"
   }, 
   {
     title: "알라딘",
     src: "./aladin.jpeg",
     logo: "./aladin_logo.png"
   }, 
   {
      title: "뮬란",
      src: "./mulan.jpeg",
      logo: "./mulan_logo.png"
   },
  //  {
  //    title: "인어공주",
  //    src: "./ariel.jpeg"
  //  }, 
  //  {
  //    title: "미녀와 야수",
  //    src: "./beautyandthebeast.jpg"
  //  }, 
  //  {
  //    title: "신데렐라",
  //    src: "./cinderella.jpeg"
  //  }, 
  //  {
  //    title: "모아나",
  //    src: "./moana.jpg"
  //  }, 
  //  {
  //    title: "포카혼타스",
  //    src: "./pochahontas.jpg"
  //   }, 
  //   { 
  //     title: "백설공주",
  //     src: "./whitesnow.jpg"
  //   }
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
      <div className="background-setting">
        {
          movies.map((element, index) => (
            <div>
              <Box>
                <img src={element.logo} alt={element.title} className="image-setting"></img>  
              </Box>
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
            </div>
          ))
        }
      </div>
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
