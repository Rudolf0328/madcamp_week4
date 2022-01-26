// import { useState, useEffect, useRef } from "react";
// import {Link, BrowserRouter as Router} from 'react-router-dom';
import "./needledrop.css"
import lp from './lp.png'
import arm from './arm.png'
import circle from './circle.png'
import Header from "../Header/main";


let toggle = "stop";
let song;
let songs = [];
const NeedleDrop =(props)=>{
    var title = new Array();
    title = props.title;
    var i = 0;
    for(i=0;i<title.length;i++){
        var str = "./"+title[i]+".mp3";
        if(songs[i] == null) songs[i] = new Audio(str)
        songs[i].preload = "auto";
    }
    const sound = props.sound;
    const setSound = props.setSound;
    const auto = props.auto;
    const setAuto = props.setAuto;
    const currentT = props.currentT;
    const setCurrentT = props.setCurrentT;
    const curTitle = props.curTitle;
    const setCurTitle = props.setCurTitle;
    const totalT = props.totalT;
    const setTotalT = props.setTotalT;
    // const songs = props.songs;
    function playing(){
        console.log("playing");
        console.log(sound);
        if(sound !=null) {
            if(!sound.paused){
                document.querySelector(".arm").classList.add("go");
                document.querySelector(".lppan").classList.add("lpspin");
                document.querySelector(".cover").classList.add("lpspin");
                toggle = "start";
                song = sound;
                for(i = 0; i<songs.length;i++)
                {
                    console.log(songs[i],sound);
                    document.getElementById(i).style.fontWeight = "normal";
                    if(songs[i].src==song.src) 
                    {
                        console.log("same");
                        document.getElementById(i).style.fontWeight = "bold";
                    }
                }
            }
            else{
                document.querySelector(".arm").classList.remove("go");
            document.querySelector(".lppan").classList.remove("lpspin");
            document.querySelector(".cover").classList.remove("lpspin");
            for(i = 0; i<songs.length;i++)
            document.getElementById(i).style.fontWeight = "normal";
            toggle = "stop";
            song.pause();
            setAuto(false);
            setCurrentT(song.currentTime);
            console.log(song.currentTime);
            setSound(song);
            setTotalT(song.duration);
            }
        }
    }
    function move(){
        if(toggle =="stop"){
            document.querySelector(".arm").classList.add("go");
            document.querySelector(".lppan").classList.add("lpspin");
            document.querySelector(".cover").classList.add("lpspin");
            toggle = "start";
            if(sound !=null) {
                console.log(sound);
                song = sound;
            }
            else song = songs[0];
            for(i = 0; i<songs.length;i++)
                {
                    if(songs[i].src==song.src) {
                        console.log("same");
                        setCurTitle(i);
                        document.getElementById(i).style.fontWeight = "bold";
                    }
                }
            song.play();
            setAuto(true);
            setSound(song);
            setCurrentT(song.currentTime);
            setTotalT(song.duration);
            console.log(song.duration);
            
            // var temp = sound.toString().substr(-1);
            // console.log(temp);
            // document.getElementById(temp).style.fontWeight = "bold";
        }
        else{
            document.querySelector(".arm").classList.remove("go");
            document.querySelector(".lppan").classList.remove("lpspin");
            document.querySelector(".cover").classList.remove("lpspin");
            for(i = 0; i<songs.length;i++)
            document.getElementById(i).style.fontWeight = "normal";
            toggle = "stop";
            song.pause();
            setAuto(false);
            setCurrentT(song.currentTime);
            console.log(song.currentTime);
            setSound(song);
            setTotalT(song.duration);
            // var temp = sound.toString().substr(-1);
            // document.getElementById(temp).style.fontWeight = "normal";
        }
    }
    function djdropthebeat(e){
        console.log(title[e.target.id])
        for(i = 0; i<songs.length;i++)
            document.getElementById(i).style.fontWeight = "normal";
        document.getElementById(e.target.id).style.fontWeight = "bold";
        document.querySelector(".arm").classList.add("go");
        document.querySelector(".lppan").classList.add("lpspin");
        document.querySelector(".cover").classList.add("lpspin");
        toggle = "start";
        if(song != null ){
            song.pause();
            // song.remove();
            // song.srcObject = null;
        }
        song = songs[e.target.id]
        song.play();
        setSound(song);
        setCurTitle(e.target.id);
        console.log(song.currentTime);
        setCurrentT(song.currentTime);
        setTotalT(song.duration);
        setAuto(true);
    }
    return(
      <div>
      <Header/>
        <div className="player" onMouseOver = {playing}>
          
        <img src = "./frozen.png" className="cover" alt=""></img>
        <img src = {lp} className="lppan"alt=""></img>
        <div className="songs">
            {
                title.map((element, index) => (
                    <div id = {index} onClick={djdropthebeat}>{index+1}. {element}<p/>
                    <br/>
                    </div>
                ))
            }
        </div>
        <img src = {arm} className="arm" alt="" onLoad = {playing} onClick={move}></img>
        </div>
        </div>
    );
};
export default NeedleDrop;