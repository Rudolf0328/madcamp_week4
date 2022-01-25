import "./miniPlayer.css"
import { IconButton, LinearProgress } from "@material-ui/core";
let toggle = false;
const MiniPlayer=(props)=>{
    var title = new Array();
    title = props.title;
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
    const songs = props.songs;
    function checkplay(){
        if(sound!=null && !sound.paused){
            document.getElementById("play").style.backgroundImage = "url('./pause.png')";
        }
        else{
            document.getElementById("play").style.backgroundImage = "url('./play-button.png')";
        }
    }
    function stopplay(){
        if(sound!=null && !sound.paused){
            sound.pause();
            document.getElementById("play").style.backgroundImage = "url('./play-button.png')";
        }
        else if(sound!=null && sound.paused){
            sound.play();
            document.getElementById("play").style.backgroundImage = "url('./pause.png')";
        }
    }
    function prevplay(){
        sound.pause();
      setCurTitle(curTitle=>curTitle-1);
      setSound(songs[curTitle]);
      setCurrentT(0);
      sound.play();
    }
    function nextplay(){
            sound.pause();
          setCurTitle(curTitle=>curTitle+1);
          setSound(songs[curTitle]);
          setCurrentT(0);
          sound.play();
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
        <div className="floating">
            <div className="album">
                <img className = "minicover" src = "./frozen.png"></img>
            </div>
            <div className = "controller">
                <div className="title">Let It Go</div>
                <div>
                <LinearProgress className = "prog" variant = "determinate" value={currentT/totalT*100}></LinearProgress>
                </div>{
                    show?<input type = "range" min = "0" max = "100" id = "slider" onChange={volumeChange}></input>:null
                }
                <div className="buttons">
                <button className = "volume" onClick={soundChange} ></button>
                <button className = "back" ></button>
                <button className = "play" id = "play" onClick={stopplay}></button>
                <button className = "next" onClick={nextplay}></button>
                </div>
            </div>
        </div>
    );
}
export default MiniPlayer;