import { Component } from "react";
import "./animation.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
      <ImageList sx={{ width: "100%" }} cols={6}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <div className="poster">
              <img
                src={`${item.img}?w=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"/>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
  }
}

export default AnimationPage;