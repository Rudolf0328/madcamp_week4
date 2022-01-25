import { Box, Typography } from "@material-ui/core";
import { Component } from "react";

const picArr = [
  {
    name: 'one',
    image: "./pic1.png"
  },
  {
    name: 'two',
    image: "./pic2.jpg"
  },
  {
    name: 'three',
    image: "./pic3.jpg"
  },
  {
    name: 'four',
    image: "./pic4.jpg"
  },
];  

console.log(picArr)

class MusicPage extends Component {
  constructor() {
    super();
    this.state = {
      picArr: picArr
    }
  }

  render() {
    let { picArr } = this.state
    console.log(picArr)
    return<div>
      {
        picArr.map(element => {
          console.log(element);
          <Box maxWidth={"300px"}>
            <img src={element.image}></img>
          </Box>
        })
      }
    </div>
  }
}

export default MusicPage;