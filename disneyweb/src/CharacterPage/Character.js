import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import "./characterpage.css"

let dummy = {
  name: "elsa",
  sex: "female",
  image: "./elsa.png"
};

let Character = (props) => {
  let {name, sex, image} = props.props;
  let test = dummy;

  console.log(props)
  console.log(name, sex, image)

  // return<Box width="200px" margin="20px">
  //     <img alt="frame" src="./frame.png" position="relative"></img>
  //     <img alt="character" src={image} position="absolute"></img>
  //   </Box>

  return (
    <div className="frame-background" style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
      {/* <div textAlliagn="center"> */}
        <img alt="character" className="image-size" position="absolute" src={image}></img>
      {/* </div> */}
    </div>
  )
}

export default Character;