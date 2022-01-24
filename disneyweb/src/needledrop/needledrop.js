import { useState, useEffect, useRef } from "react";
import {Link, BrowserRouter as Router} from 'react-router-dom';
import "./needledrop.css"
import lp from './lp.png'
import frozen from './frozen.png'
import arm from './arm.png'
import circle from './circle.png'
let toggle = "stop";
const NeedleDrop =()=>{
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
            toggle = "start";
        }
        else{
            document.querySelector(".arm").classList.remove("go");
            toggle = "stop";
        }
    }
    return(
        <div className="player">
        <img src = {frozen} className="cover" alt=""></img>
        <img src = {lp} className="lppan"alt=""></img>
        <img src = {arm} className="arm" alt="" onClick={move}></img>
        <img src = {circle} className="circle" alt=""></img>
        </div>
    );
};
export default NeedleDrop;