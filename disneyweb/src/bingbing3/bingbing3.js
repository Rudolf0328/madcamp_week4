import "./bing3style.css"
import $ from 'jquery';
import disney_group from "./disney_group.jpg"
import disney_group2 from "./disney_group2.jpg"







function Bingbing3() {
    
    var pages = document.getElementsByClassName('page');
    
    // [...pages].reverse();
    for(var i = 0; i < pages.length; i++)
      {
        var page = pages[i];
        if (i % 2 === 0)
          {
            page.style.zIndex = (pages.length - i);
          }
      }
  
    document.addEventListener('DOMContentLoaded', function(){
      for(var i = 0; i < pages.length; i++)
        {

          //Or var page = pages[i];
          pages[i].pageNum = i + 1;
          
          pages[i].onclick=function()
            {
              if (this.pageNum % 2 === 0)
                {
                    console.log(this.pageNum)
                    console.log(pages)
                  this.classList.remove('flipped');
                  this.previousElementSibling.classList.remove('flipped');
                }
              else
                {
                    console.log(this.pageNum)
                    console.log(pages)
                  this.classList.add('flipped');
                  this.nextElementSibling.classList.add('flipped');
                }
             }
          }
    })


    return(
     
         
<div className="book">
  <div id="pages" className="pages">
    <div className="page"><p>1</p></div>
    <div className="page"><p>2</p></div>
    <div className="page"><p>3</p></div>
    <div className="page"><p>4</p></div>
    <div className="page"><p>5</p></div>
    <div className="page"><p>6</p></div>
    <div className="page"><p>7</p></div>
    <div className="page"><p>8</p></div>
    <div className="page"><p>9</p></div>
    <div className="page"><p>10</p></div>
    <div className="page"><p>11</p></div>
    <div className="page"><p>12</p></div>
    <div className="page"><p>13</p></div>
    <div className="page"><p>14</p></div>
    <div className="page"><p>15</p></div>
    <div className="page"><p>16</p></div>
    <div className="page"><p>17</p></div>
    <div className="page"><p>18</p></div>
    <div className="page"><p>19</p></div>
    <div className="page"><p>20</p></div>
  </div>
</div>

    )


}

export default Bingbing3

