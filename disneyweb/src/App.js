import logo from './logo.svg';
// import './App.css';

import InfoPage from './InfoPage/main'
import React, { useEffect, useState } from "react";
import MainPage from './MainPage/main';
import NeedleDrop from './needledrop/needledrop';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Header from './Header/main';
import Sec6 from './sec6/sec6';
import Wheel from './MusicPage/Wheel';
import Sec5 from './sec5/sec5';
import Component from './sec6/sec6';
import s1 from "../src/needledrop/Do You Want to Build a Snowman.mp3";
import s2 from "../src/needledrop/Let It Go.mp3";
import s3 from "../src/needledrop/Frozen Heart.mp3";
// import Bingbing from './bingbing/bingbing';
// import Bingbing2 from './bingbing2/bingbing2';
import Bingbing3 from './bingbing3/bingbing3';
// import Bingbing4 from './bingbing4/bingbing4';


// import Carousel from './MusicPage/Carousel';
import MusicPage from './MusicPage/MusicPage';
import CharacterPage from './CharacterPage/CharacterPage';
import Character from './CharacterPage/Character';
// import Component from './sec6/sec6';

function App() {
  const [sound, setSound] = useState("");
  const [auto, setAuto] = useState(false);
  const [currentT, setCurrentT] = useState(0);

  useEffect(() => {
    console.log(sound)
  }, [sound, auto, currentT])

  return (
    <>
    <audio id = 'bgm' src = {sound} autoPlay = {auto} currenttime = {currentT}/>
    <Router>
    {/* <div className="App"> */}
    <Header/>
      <Routes>
     <Route path = "/" element = {<MainPage/>} />
      <Route path = "/home" element = {<NeedleDrop sound = {sound} setSound = {setSound} auto = {auto} setAuto = {setAuto} currentT = {currentT} setCurrentT = {setCurrentT}/>}/>
      <Route path = "/info" element = {<InfoPage/>} />
      <Route path = "/test" element = {<Sec6/>} /> 
       <Route path = "/music" element = {<Wheel/>} />
       <Route path = "/test2" element = {<Sec5/>} />
       {/* <Route path = "/bingbing" element = {<Bingbing/>} /> */}
       {/* <Route path = "/bingbing2" element = {<Bingbing2/>} /> */}
       <Route path = "/bingbing3" element = {<Bingbing3/>} />





      <Route path = "/test" element = {<Sec6/>} />

      <Route path = "/music" element = {<Wheel/>} />
      {/* <Route path = "/carousel" element = {<Carousel/>} /> */}
      <Route path = "/please" element = {<MusicPage/>} />

      {/* <Route path = "/test2" element = {<Sec5/>} /> */}
      <Route path = "/test3" element = {<Dance/>} />
      <Route path = "/characters" element = {<Character/>} />
      </Routes>
    {/* </div> */}
    </Router>
    </>
  );
}

export default App;