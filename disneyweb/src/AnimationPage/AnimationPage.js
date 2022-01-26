import { Component } from "react";
import "./animation.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Header from "../Header/main";
import { Grid } from "@mui/material";

const itemData = [
  {
    img: "./aladin.jpeg",
    title: "Aladin"
  },
  {
    img: "./thelittlemermaid.jpg",
    title: "The Little Mermaid"
  },
  {
    img: "./cinderella.jpeg",
    title: "Cinderella"
  },
  {
    img: "./beautyandthebeast_poster.jpg",
    title: "Beauty And The Beast"
  },
  {
    img: "./frozen_poster.jpg",
    title: "Frozen1"
  },
  {
    img: "./frozen2_poster.jpeg",
    title: "Frozen2"
  },
  {
    img: "./moana_poster.jpg",
    title: "Moana"
  },
  {
    img: "./mulan_poster.jpg",
    title: "Mulan"
  },
  {
    img: "./tangled.jpeg",
    title: "Tangled"
  },
  {
    img: "./pochahontas.jpg",
    title: "Pochahontas"
  }
]

class AnimationPage extends Component {
  render() {
    return(
    <div className="animation-page-background">
      <Header/>
      <div className="cards-setting">
      <Grid container spacing={4} justify="flex-start">
        {itemData.map((item) => (
          <Grid item xs={6} sm={6} md={4} lg={4} key={item.img} className="card-card">
            <div className="poster">
              <div className="textt_movie1">fdfdfd</div>
            <div className="posternew" position = "absolute">
           
              <img
                position="absolute"
                // className="front-card"
                src={`${item.img}?w=164&fit=crop&auto=format`}
                // srcSet={`${item.img}?w=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy">
                  
                </img>
               
            </div>

            </div>
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  )
  }
}

export default AnimationPage;