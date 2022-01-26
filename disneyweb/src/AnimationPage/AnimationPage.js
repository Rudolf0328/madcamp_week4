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
      <Grid container sx={{ width: "100%" }}>
        {itemData.map((item) => (
          <Grid item xs key={item.img} className="card-card">
            <div className="poster front-card">
              <img
                position="absolute"
                // className="front-card"
                src={`${item.img}?w=164&fit=crop&auto=format`}
                // srcSet={`${item.img}?w=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy">
                  
                </img>
                <div position="absolute">안녕하세요 안녕 안녕 안녕 안녕하세요 아아아아아아아아</div>
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