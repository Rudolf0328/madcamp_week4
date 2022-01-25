import { useState, useEffect, useRef } from "react";
import {Link, BrowserRouter as Router} from 'react-router-dom';
import "./needledrop.css"
import lp from './lp.png'
import frozen from './frozen.png'
import arm from './arm.png'
import circle from './circle.png'
import FirstEstab from "../MainPage/FirstEstab";
import s1 from "./Do You Want to Build a Snowman.mp3";
import s2 from "./Let It Go.mp3";
import s3 from "./Frozen Heart.mp3";

let toggle = "stop";
const NeedleDrop =(props)=>{
    var title= new Array();
    title = ["Do You Want to Build a Snowman", "Let It Go", "Frozen Heart"];

    const song1 = new Audio(s1);
    const song2 = new Audio(s2);
    const song3 = new Audio(s3);
    var songs = [song1, song2, song3];

    const sound = props.sound;
    const setSound = props.setSound;
    const auto = props.auto;
    const setAuto = props.setAuto;
    const currentT = props.currentT;
    const setCurrentT = props.setCurrentT;
    // Math.degrees = function(radians) {
    //     return radians*(180/Math.PI);
    // };
    // army = document.getElementsByClassName('arm');
    // army.setAttribute('src','./arm.png');    
    // army.onmousedown = function(event) {
    //     let shiftX = event.clientX - army.getBoundingClientRect().left;
    //     let shiftY = event.clientY - army.getBoundingClientRect().top;

    //     document.body.appendChild(army);
      
    //     moveAt(event.pageX, event.pageY);
      
    //     // 초기 이동을 고려한 좌표 (pageX, pageY)에서
    //     // 공을 이동합니다.
    //     function moveAt(pageX, pageY) {
    //         army.style.left = pageX - shiftX + 'px';
    //         army.style.top = pageY - shiftY + 'px';
    //     }
      
    //     function onMouseMove(event) {
    //       moveAt(event.pageX, event.pageY);
    //     }
      
    //     // mousemove로 공을 움직입니다.
    //     document.addEventListener('mousemove', onMouseMove);
      
    //     // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    //     army.onmouseup = function() {
    //       document.removeEventListener('mousemove', onMouseMove);
    //       army.onmouseup = null;
    //     };
      
    //   };
      
    //   army.ondragstart = function() {
    //     return false;
    //   };
    function move(){
        if(toggle =="stop"){
            document.querySelector(".arm").classList.add("go");
            document.querySelector(".lppan").classList.add("lpspin");
            document.querySelector(".cover").classList.add("lpspin");
            toggle = "start";
            console.log("click")
            sound.src = song1;
            sound.currentTime = currentT;
            sound.play();
            setAuto(true);
            document.getElementById("song2").style.fontWeight = "bold";

        }
        else{
            document.querySelector(".arm").classList.remove("go");
            document.querySelector(".lppan").classList.remove("lpspin");
            document.querySelector(".cover").classList.remove("lpspin");
            toggle = "stop";
            setCurrentT(sound.currentTime);
            setSound(sound.src);
            sound.pause();
            setAuto(false);
            document.getElementById("song2").style.fontWeight = "normal";
        }
    }
    function djdropthebeat(e){
        console.log(title[e.target.id])
        var song = songs[e.target.id]
        song.play();
        setSound(song);
        setAuto(true);
    }
    return(
        <div className="player">
        <img src = {frozen} className="cover" alt=""></img>
        <img src = {lp} className="lppan"alt=""></img>
        <div className="songs">
        <div id = {0} onClick={djdropthebeat}>1. {title[0]}<br/></div>
        <div id = {1} onClick={djdropthebeat}>2. {title[1]}<br/></div>
        <div id = {2} onClick={djdropthebeat}>3. {title[2]}<br/></div>
        </div>
        <img src = {arm} className="arm" alt="" onClick={move}></img>
        </div>
    );
};
export default NeedleDrop;