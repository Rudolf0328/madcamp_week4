import { useState, useEffect, useRef } from "react";
import {Link, BrowserRouter as Router} from 'react-router-dom';
import "./needledrop.css"
import lp from './lp.png'
import frozen from './frozen.png'
import arm from './arm.png'
import circle from './circle.png'
import FirstEstab from "../MainPage/FirstEstab";


let toggle = "stop";
let song;
let songs = [];
const NeedleDrop =(props)=>{
    var title= new Array();
    var i = 0;
    title = ["Frozen Heart","Do You Want to Build a Snowman", "For the First Time in Forever","Love Is an Open Door","Let It Go", "Reindeers Are Better Than People", "In Summer","For the First Time in Forever Reprise", "Fixer Upper"];
    
    for(i=0;i<title.length;i++){
        var str = "./"+title[i]+".mp3";
        songs[i] = new Audio(str)
    }
    const sound = props.sound;
    const setSound = props.setSound;
    const auto = props.auto;
    const setAuto = props.setAuto;
    const currentT = props.currentT;
    const setCurrentT = props.setCurrentT;

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
                    if(songs[i].src==song.src) 
                    {
                        console.log("same");
                        document.getElementById(i).style.fontWeight = "bold";
                    }
                }
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
            song.currentTime = currentT;
            for(i = 0; i<songs.length;i++)
                {
                    if(songs[i].src==song.src) {
                        console.log("same");
                        document.getElementById(i).style.fontWeight = "bold";
                    }
                }
            song.play();
            setAuto(true);
            setSound(song);
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
            setCurrentT(song.currentTime);
            console.log(song.currentTime);
            setSound(song);
            setAuto(false);
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
        if(song != null )song.pause();
        song = songs[e.target.id]
        song.play();
        setSound(song);
        setAuto(true);
    }
    return(
        <div className="player">
        <img src = {frozen} className="cover" alt=""></img>
        <img src = {lp} className="lppan"alt=""></img>
        <div className="songs">
            {
                title.map((element, index) => (
                    <div id = {index} onClick={djdropthebeat}>{index}. {element}<br/></div>
                ))
            }
        </div>
        <img src = {arm} className="arm" alt="" onLoad = {playing} onClick={move}></img>
        </div>
    );
};
export default NeedleDrop;