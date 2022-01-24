// import React, { useRef} from "react";
// import './musicpage.css'


//   // prevBtn.addEventListener('click', translateContainer.bind(this, 1));
//   // nextBtn.addEventListener('click', translateContainer.bind(this, -1));

//   // (function addEvent(){
    
//   // })();

  
// function Carousel() {
//   const container = document.querySelector(".container");
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next"); 

//   prevBtn.classList.add("click-event-prev");
// // console.log(cona)

// function translateContainer(direction){
//   const selectedBtn = (direction === 1) ? 'prev' : 'next';
//   // container.style.transitionDuration = '500ms';
//   // container.style.transform = `translateX(${direction * (100 / 5)}%)`;
//   console.log(selectedBtn);
  
//   // nextBtn.classList.add("click-event-next");
//   container.ontransitionend = () => reorganizeEl(selectedBtn);
// }

// function reorganizeEl(selectedBtn) {
//   container.removeAttribute('style');
//   (selectedBtn === 'prev') ? container.insertBefore(container.lastElementChild, container.firstElementChild): container.appendChild(container.firstElementChild);
// }


  

//   return (
//     <div>
//       <h1>Mini Carousel</h1>
//         <div className="window">
//           <ul className="container">
          
//             <li className="cell">5</li>
//             <li className="cell">1</li>  
//             <li className="cell">2</li>
//             <li className="cell">3</li>
//             <li className="cell">4</li>
//           </ul>
//         </div>
//       <div className="button-container">
//         <button onClick={translateContainer.bind(this, 1)} className="prev">previous</button>
//         <button onClick={translateContainer.bind(this, -1)} className="next">next</button>
//       </div>
//     </div>
  
//   );
// }

// export default Carousel;