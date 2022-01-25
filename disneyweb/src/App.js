import logo from './logo.svg';
// import './App.css';


import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";

import Shelf from './shelf/shelf';
import NeedleDrop from './needledrop/needledrop';
import Header from './Header/main';
import Sec5 from './sec5/sec5';
// import Bingbing from './bingbing/bingbing';
// import Character from './CharacterPage/Character';
import InfoPage from './InfoPage/main'


function App() {
  const [sound, setSound] = useState();
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
     <Route path = "/" element = {<Sec5/>} />
     <Route path = "/shelf" element = {<Shelf/>} />

      <Route path = "/player" element = {<NeedleDrop sound = {sound} setSound = {setSound} auto = {auto} setAuto = {setAuto} currentT = {currentT} setCurrentT = {setCurrentT}/>}/>
      <Route path = "/animation" element = {<InfoPage/>} />
       {/* <Route path = "/music" element = {<Bingbing/>} /> */}
      {/* <Route path = "/characters" element = {<Character/>} /> */}
      </Routes>
    {/* </div> */}
    </Router>
    </>
  );
}

export default App;