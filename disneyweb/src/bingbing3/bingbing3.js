import "./bing3style.css"
import $ from 'jquery';
import disney_group from "./disney_group.jpg"
import disney_group2 from "./disney_group2.jpg"







function Bingbing3() {
    
    var pages = document.getElementsByClassName('page');
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
                  this.classList.remove('flipped');
                  this.previousElementSibling.classList.remove('flipped');
                }
              else
                {
                  this.classList.add('flipped');
                  this.nextElementSibling.classList.add('flipped');
                }
             }
          }
    })


    return(
     
         
<div className="book">
  <div id="pages" className="pages">
    <div className="page"><p>LP record!</p></div>
    <div className="page"></div>
    <div className="page"><p>Hello there!</p></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>
    <div className="page"></div>

    <div classname="page">
       
    </div>
    
  </div>
</div>

    )


}

export default Bingbing3

