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
import AnimationPage from './AnimationPage/AnimationPage';

import "./header.css";


import MiniPlayer from './miniPlayer/miniPlayer';
import Character from './CharacterPage/Character';
import CharacterPage from './CharacterPage/CharacterPage';
import Testversion from './testversion/testversion';

let song;
let songs = [];
function App() {
  var i;
  
  const [sound, setSound] = useState(songs[0]);
  const [auto, setAuto] = useState(false);
  const [currentT, setCurrentT] = useState(0);
  const [totalT, setTotalT] = useState(0);
  const [show, setShow] = useState(false);
  const [curTitle,setCurTitle] = useState(0);
  const [isplaying, setIsplaying] = useState(false);
  const [title,setTitle] = useState(["Frozen Heart","Do You Want to Build a Snowman", "For the First Time in Forever","Love Is an Open Door","Let It Go", "Reindeers Are Better Than People", "In Summer","For the First Time in Forever Reprise", "Fixer Upper"]);
  for(i=0;i<title.length;i++){
    var str = "./"+title[i]+".mp3";
    if(songs[i] == null) songs[i] = new Audio(str)
    songs[i].preload = "auto";
}

  function nextsong(){
  console.log(sound.duration);
          setSound(songs[curTitle]);
          setCurrentT(0);
          sound.play();
          
}
  useEffect(() => {
    if(currentT>=totalT-1.0){
      song = sound;
      if(song != null ){
        song.pause();
        song.remove();
        song.remove();
        song.srcObject = null;
    }
      song = songs[curTitle+1]
      song.play();
      setSound(song);
      setCurTitle(curTitle=>curTitle+1);
      console.log(song.currentTime);
      setCurrentT(0);
      setTotalT(song.duration);
      setAuto(true);
    }
    const interval = setInterval(async () => {
      if(sound!=null){
        if(!sound.paused){
          console.log(auto);
          setCurrentT(sound.currentTime);
        }
      }
    }, 1000); // <- interval in ms
  }, [sound, auto, currentT])

  return (
    <>
    {/* <audio id = 'bgm' src = {sound} autoPlay = {auto}/> */}
    <Router>
    <div className="App">
    {/* <Header/> */}
      <Routes>
     <Route path = "/" element = {<Sec5/>} />
      <Route path = "/player" element = {<NeedleDrop songs = {songs} curTitle = {curTitle} setCurTitle = {setCurTitle} title = {title} sound = {sound} setSound = {setSound} auto = {auto} setAuto = {setAuto} currentT = {currentT} setCurrentT = {setCurrentT} totalT = {totalT} setTotalT = {setTotalT}/>}/>
      <Route path = "/animation" element = {<AnimationPage/>} />
      <Route path = "/music" element = {<InfoPage title = {title} setTitle = {setTitle}/>} />
      <Route path = "/characters" element = {<CharacterPage/>} />
      <Route path = "/testversion" element = {<Testversion/>} />

       {/* <Route path = "/music" element = {<Bingbing/>} /> */}
      {/* <Route path = "/characters" element = {<Character/>} /> */}
      </Routes>
      <MiniPlayer songs = {songs} curTitle = {curTitle} setCurTitle = {setCurTitle} title = {title} show = {show} setShow = {setShow} sound = {sound} setSound = {setSound} currentT = {currentT} setCurrentT = {setCurrentT} totalT = {totalT} setTotalT = {setTotalT} auto = {auto} setAuto = {setAuto}/>
    </div>
    </Router>
    </>
  );
}

export default App;