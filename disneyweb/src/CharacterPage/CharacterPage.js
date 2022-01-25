import { Grid } from "@mui/material";
import { Component } from "react";
import Header from "../Header/main";
import Character from "./Character";

let characterArr = [
  {
    name: "elsa",
    sex: "female",
    image: "./elsa.png"
  },
  {
    name: "anna",
    sex: "female",
    image: "./anna.png"
  },
  {
    name: "olaf",
    sex: "none",
    image: "./olaf.png"
  },
  {
    name: "kristoff",
    sex: "male",
    image: "./kristoff.png"
  },
  {
    name: "sven",
    sex: "none",
    image: "./sven.png"
  }
];


class CharacterPage extends Component {
  constructor() {
    super();
    this.state={
      characterArr
    }
  }

  render() {
    let {characterArr} = this.state;

    return<div>
      <Header></Header>
      <Grid container margin="20px" direction="row">{
        characterArr.map((element) => (
          <Character item props={element}></Character>
        ))
      }</Grid>
    </div>
  }
}

export default CharacterPage;