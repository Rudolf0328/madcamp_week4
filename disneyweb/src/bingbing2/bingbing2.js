import "./bing2style.css"
import disney_group from "./disney_group.jpg"
import disney_group2 from "./disney_group2.jpg"
import jaeho from "./jae.jpeg"

let test = [
    disney_group, disney_group2, jaeho,disney_group, disney_group2, jaeho,disney_group, disney_group2, jaeho
];

//let cnt = 0;
 // Core
 function Bingbing2() {
    let cnt = 0;
    function turnP(){
        // document.querySelector('.pageprev').classList.remove("opac");
        // document.querySelector('.page').classList.remove("turnpage");
        console.log(cnt);
        console.log(test[cnt]);
        // document.querySelector('.pageprev').style.animationPlayState = "running";
        //     document.querySelector('.page').style.animationPlayState = "running";
        document.querySelector('.pageprev').classList.add("opac");
        document.querySelector('.page').classList.add("turnpage");
        document.getElementById('turnBt').disabled = true;
        setTimeout(() => {
            cnt++;
            cnt++;
            document.getElementById('turnBt').disabled = false;
        },2000);
        document.getElementById('page3').src = test[cnt+2];
        document.getElementById('page1').src = test[cnt];
        document.getElementById('page2').src = test[cnt+1];

    }
    return (
        <div>
        <div className="book">
  <div className="pagenext" id = "pagenext">
    <img id = 'page3' src={test[cnt+2]}></img>
  </div>
  
  <div className="page" id = "page" >
       <div>
        <img id = 'page1' src={test[cnt+1]}></img>
        <div className="pageprev" id = "pageprev">
        <img id = 'page2' src={test[cnt]}></img>
        </div>
       </div>
        
      
  {/* <div class="page" id = "page" > {
   test.map(element => (
       <div>
        <img src={test[cnt]}></img>
        <div class="pageprev" id = "pageprev">
        <img src={test[cnt+1]}></img>
        </div>
       </div>
        
    ))
      
    } */}
  </div>  
  <div className="line"></div>
    </div>
    <button id = 'turnBt' onClick={turnP}>here</button>
    </div>
  
    )
 }

     
 export default Bingbing2