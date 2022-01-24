import logo from './logo.svg';
// import './App.css';

import InfoPage from './InfoPage/main'
import React, { useEffect, useState } from "react";
import MainPage from './MainPage/main';
import NeedleDrop from './needledrop/needledrop';
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Header from './Header/main';
import Sec6 from './sec6/sec6';
import Sec5 from './sec5/sec5';
import Dance from './Dance/dance'
import Component from './sec6/sec6';
import s1 from "../src/needledrop/Do You Want to Build a Snowman.mp3";
import s2 from "../src/needledrop/Let It Go.mp3";
import s3 from "../src/needledrop/Frozen Heart.mp3";
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
      <Route path = "/test2" element = {<Sec5/>} />
      <Route path = "/test3" element = {<Dance/>} />
      </Routes>
    {/* </div> */}
    </Router>
    </>
  );
}

export default App;