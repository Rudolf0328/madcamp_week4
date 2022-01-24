import "./bing2style.css"
import disney_group from "./disney_group.jpg"
import disney_group2 from "./disney_group2.jpg"

let test = [
    disney_group, disney_group2
];


 // Core
 function Bingbing2() {
    return (
        <div class="book">
  <div class="pagenext">
    <img src={disney_group2}></img>

    <p>Lorem .</p>
  
  <p>Contrary to 2.</p>
  
  <p>Lorem Ipsum is m.</p>
  
  <p>Lorem Ipsum is .</p>
  
  <p>At vero eos..</p>
  </div>
  
  
  <div class="page"> {
   test.map(element => (
       <div>
        <p>Lorem Ipsum .</p>

            
        <p>Contrary .</p>

        <p>Lorem Ipsum </p>

        <p>Lorem .</p>

        <p>At vero eos .</p>
        <div class="pageprev">
        <img src={element}></img>
        </div>
       </div>
        
    ))
      
    }
  </div>  
  <div class="line"></div>

  
  
  



    </div>

  
    )
 }

     
 export default Bingbing2