import "./miniPlayer.css"
import { IconButton, LinearProgress } from "@material-ui/core";
import {Link, BrowserRouter as Router} from 'react-router-dom';
let toggle = false;
let song;
let songs = [];
const MiniPlayer=(props)=>{
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
    const show = props.show;
    const setShow = props.setShow;
    const currentT = props.currentT;
    const setCurrentT = props.setCurrentT;
    const totalT = props.totalT;
    const setTotalT = props.setTotalT;
    const curTitle = props.curTitle;
    const setCurTitle = props.setCurTitle;
    const auto = props.auto;
    const setAuto = props.setAuto;
    function checkplay(){
        console.log(auto);
        if(sound !=null) {
            console.log(sound);
            song = sound;
        }
        if(sound!=null && sound.paused){
            document.getElementById("play").style.backgroundImage = "url('./play-button.png')";
        }
        else{
            document.getElementById("play").style.backgroundImage = "url('./pause.png')";
        }
    }
    function stopplay(){
        if(sound!=null && !sound.paused){
            sound.pause();
            setAuto(false);
            
            document.getElementById("play").style.backgroundImage = "url('./play-button.png')";
        }
        else if(sound!=null && sound.paused){
            sound.play();
            setAuto(true);
            setSound(song);
            setTotalT(song.duration);
            document.getElementById("play").style.backgroundImage = "url('./pause.png')";
        }
    }
    function prevplay(){
        if(song != null ){
            song.pause();
            song.remove();
            song.srcObject = null;
        }
        song = songs[curTitle-1]
        song.play();
        setSound(song);
        setCurTitle(curTitle=>curTitle-1);
        console.log(song.currentTime);
        setCurrentT(0);
        setTotalT(song.duration);
        setAuto(true);
    }
    function nextplay(){
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
    function soundChange(){
        if(show == false) setShow(true);
        else setShow(false);
        console.log(toggle);
    }
    function volumeChange(){
        var ran = document.getElementById("slider");
        // ran.innerHTML = ran.value;
        console.log(ran.value);
        sound.volume =(ran.value/100);
    }
    return(
        <div className="floating" onMouseOut={checkplay} onMouseEnter={checkplay}>
            <Link to  = "/player">
            <div className="album">
                <img className = "minicover" src = "./frozen.png"></img>
            </div>
            </Link>
            <div className = "controller">
                <div className="title">{title[curTitle]}</div>
                <div>
                <LinearProgress className = "prog" variant = "determinate" value={currentT/totalT*100}></LinearProgress>
                </div>{
                    show?<input type = "range" min = "0" max = "100" id = "slider" onChange={volumeChange}></input>:null
                }
                <div className="buttons">
                <button className = "volume" onClick={soundChange} ></button>
                <button className = "back" onClick={prevplay}></button>
                {
                    auto?<button className = "play" id = "play" backgroundimage = "url('./pause.png')" onClick={stopplay}></button>:<button className = "play" id = "play"  backgroundimage = "url('./play-button.png')" onClick={stopplay}></button>
                }
                <button className = "next" onClick={nextplay}></button>
                </div>
            </div>
        </div>
    );
}
export default MiniPlayer;