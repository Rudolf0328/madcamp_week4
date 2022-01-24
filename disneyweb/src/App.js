import logo from './logo.svg';
// import './App.css';

import InfoPage from './InfoPage/main'
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import MainPage from './MainPage/main';
=======

// import MainPage from './MainPage/main';
>>>>>>> a5cc230c2b55b176acd5b21092d74ab93ae8d5df
import NeedleDrop from './needledrop/needledrop';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Header from './Header/main';
import Sec6 from './sec6/sec6';
import Wheel from './MusicPage/Wheel';
import Sec5 from './sec5/sec5';
import Dance from './Dance/dance'
import Component from './sec6/sec6';
import s1 from "../src/needledrop/Do You Want to Build a Snowman.mp3";
import s2 from "../src/needledrop/Let It Go.mp3";
import s3 from "../src/needledrop/Frozen Heart.mp3";
import Card from './Card/card'
import Bingbing from './bingbing/bingbing';
import Bingbing2 from './bingbing2/bingbing2';

// import Carousel from './MusicPage/Carousel';
import MusicPage from './MusicPage/MusicPage';
import CharacterPage from './CharacterPage/CharacterPage';
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
<<<<<<< HEAD
     <Route path = "/" element = {<MainPage/>} />
      <Route path = "/home" element = {<NeedleDrop sound = {sound} setSound = {setSound} auto = {auto} setAuto = {setAuto} currentT = {currentT} setCurrentT = {setCurrentT}/>}/>
=======
     {/* <Route path = "/" element = {<MainPage/>} /> */}
       <Route path = "/home" element = {<NeedleDrop/>} /> 
       <Route path = "/header" element = {<Header/>} /> 
>>>>>>> a5cc230c2b55b176acd5b21092d74ab93ae8d5df
      <Route path = "/info" element = {<InfoPage/>} />
      <Route path = "/test" element = {<Sec6/>} /> 
       <Route path = "/music" element = {<Wheel/>} />
       <Route path = "/test2" element = {<Sec5/>} />
      <Route path = "/test3" element = {<Dance/>} /> 
       <Route path = "/card" element = {<Card/>} />
       <Route path = "/bingbing" element = {<Bingbing/>} />
       <Route path = "/bingbing2" element = {<Bingbing2/>} />


      <Route path = "/test" element = {<Sec6/>} />

      <Route path = "/music" element = {<Wheel/>} />
      {/* <Route path = "/carousel" element = {<Carousel/>} /> */}
      <Route path = "/please" element = {<MusicPage/>} />

      {/* <Route path = "/test2" element = {<Sec5/>} /> */}
      <Route path = "/test3" element = {<Dance/>} />
<<<<<<< HEAD
=======

      <Route path = "/characters" element = {<CharacterPage/>} />



>>>>>>> a5cc230c2b55b176acd5b21092d74ab93ae8d5df
      </Routes>
    {/* </div> */}
    </Router>
    </>
  );
}

export default App;