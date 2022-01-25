import logo from './logo.svg';
// import './App.css';


import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import NeedleDrop from './needledrop/needledrop';
import Header from './Header/main';
import Sec5 from './sec5/sec5';
import Bingbing from './bingbing/bingbing';
import Character from './CharacterPage/Character';
import InfoPage from './InfoPage/main'
import MiniPlayer from './miniPlayer/miniPlayer';
let song;
let songs = [];
function App() {
  var i;
  const title = ["Frozen Heart","Do You Want to Build a Snowman", "For the First Time in Forever","Love Is an Open Door","Let It Go", "Reindeers Are Better Than People", "In Summer","For the First Time in Forever Reprise", "Fixer Upper"];
  for(i=0;i<title.length;i++){
    var str = "./"+title[i]+".mp3";
    songs[i] = new Audio(str)
    songs[i].preload = "auto";
}
  const [sound, setSound] = useState(songs[0]);
  const [auto, setAuto] = useState(false);
  const [currentT, setCurrentT] = useState(0);
  const [totalT, setTotalT] = useState(0);
  const [show, setShow] = useState(false);
  const [curTitle,setCurTitle] = useState(0);
function nextsong(){
  console.log(sound.duration);
          setSound(songs[curTitle]);
          setCurrentT(0);
          sound.play();
          
}
  useEffect(() => {
    // if(sound!=null){
    //   if(!sound.paused){
    //     console.log(currentT,totalT);
    //     if(currentT>=totalT-1){
    //       sound.pause();
    //       console.log(curTitle);
    //       setCurTitle(curTitle=>curTitle+1);
    //       console.log(curTitle);
    //       nextsong();
    //     }
    //   }
    // }
    const interval = setInterval(async () => {
      if(sound!=null){
        if(!sound.paused){
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
    <Header/>
      <Routes>
     <Route path = "/" element = {<Sec5/>} />
      <Route path = "/player" element = {<NeedleDrop songs = {songs} curTitle = {curTitle} setCurTitle = {setCurTitle} title = {title} sound = {sound} setSound = {setSound} auto = {auto} setAuto = {setAuto} currentT = {currentT} setCurrentT = {setCurrentT} totalT = {totalT} setTotalT = {setTotalT}/>}/>
      <Route path = "/animation" element = {<InfoPage/>} />
       <Route path = "/music" element = {<Bingbing/>} />
      <Route path = "/characters" element = {<Character/>} />
      </Routes>
      <MiniPlayer songs = {songs} curTitle = {curTitle} setCurTitle = {setCurTitle} title = {title} show = {show} setShow = {setShow} sound = {sound} setSound = {setSound} currentT = {currentT} setCurrentT = {setCurrentT} totalT = {totalT} setTotalT = {setTotalT}/>
    </div>
    </Router>
    </>
  );
}

export default App;