import "./bing4style.css"
import $ from 'jquery';
// import disney_group from "./disney_group.jpg"

function Bingbing4() {

    console.clear();
    var wrap_turn = $(".wrap-turn");
    var wrap_curr = $(".wrap-curr");
    var wrap_back = $(".wrap-back");
    var wrap_all = $(".wrap-all");
    var nextPage = 3;
    
    
    turnForward();
    
    document.getElementById("btn_go").addEventListener("click",function(){
      $('.wrap-turn, .wrap-back, .wrap-curr').velocity("stop",true);
      turnForward(); 
    });
    
    document.getElementById("btn_stop").addEventListener("click",function(){
       $('.wrap-turn, .wrap-back, .wrap-curr').velocity("stop",true);
       //wrap_back.velocity("pause",false);
    });
    
    function turnForward() {
    
      var dur = 1800; //total animation time
      var width = 35;
      var borderRadius = wrap_back.outerHeight();
      borderRadius = (borderRadius*0.1)/1.8;
      
      //shrink wrap_turn down to half size to hide current page and keep back right aligned with current
      wrap_turn.velocity({width: width+'vw'},
                   {duration: dur*0.8, easing: 'easeInOutSine',complete:rewrap()});
      //rotate current as if lifting up
      wrap_curr.velocity({rotateY:['-90deg','0deg'],width:0},{duration: dur*0.55, easing: 'easeInSine',complete:function(){wrap_curr.hide();}});
      /*wrap_back.velocity({width: width+'vw'},
                   {duration: dur, easing: 'easeInOutCubic'});*/
      wrap_back.velocity({width: [(width*0.5)+'vw','linear']
                           ,rotateY: ['30deg','easeInOutCubic','70deg']
                           ,scale: [1.1,[.16,.45,.52,1.5]]
                           ,boxShadowX: [-50,'easeOutCubic']
                           ,borderTopRightRadius: borderRadius + 'px'
                           ,borderBottomRightRadius: borderRadius + 'px'}
                         ,{duration: dur*0.5, easing: 'easeOutCubic', complete: function(){
                            wrap_back.velocity({ width: width+'vw'
                                               ,rotateY: '0deg'
                                               ,scale:1
                                                ,boxShadowX: [10,'linear']
                                               ,borderTopRightRadius: 5
                                               ,borderBottomRightRadius: 0}
                                              ,{duration: dur*0.5
                                                ,easing: 'easeOutSine'
                                                ,complete: function(){wrap_back.removeAttr('style');}});
                                         }});
    }
    
    function turnBack() {
      
    }
    
    function rewrap(){
      //need to call these before clearing styles
      wrap_curr.velocity("stop");
      wrap_back.velocity("stop"); 
      if(nextPage == 6){
        nextPage = 1;
      }
      var next = $("#next");
      var curr = $("#current");
      //reset styles
      wrap_turn.removeAttr('style');
      wrap_curr.removeAttr('style');
      wrap_back.removeAttr('style');
      //after turning, wrap the new current and next pages
      //curr is hidden 
      curr.hide();
      curr.id = '';
      wrap_all.append(curr);
      //prev is hidden (except back and pref are blank)
      //next becomes curr
      wrap_curr.append(next); 
      next.attr('id','current');
      //back becomes prev (except back and pref are blank)
      
      //move next page up
      var np = $("[data-page='" + nextPage + "']");
      np.insertBefore(wrap_turn);
      np.attr('id','next');
      np.show();
      nextPage +=1;
      //turnForward();
    }
    
    function skipTo(page){
      //move old pages to bottom of wrap_all
      //var next = document.getElementById("next");
      var curr = document.getElementById("current");
      curr.style.display = 'none';
      curr.id = '';
      wrap_all.insertBefore(curr,wrap_all.lastChild);
      //next.style.display = 'none';
      //next.id = '';
      //wrap_all.insertBefore(next,wrap_all.lastChild);
      
      var next = document.querySelector("[data-page='" + (page) + "']");
      curr = document.querySelector("[data-page='" + (nextPage-1) + "']");
      //reset styles
      wrap_turn.removeAttribute('style');
      wrap_curr.removeAttribute('style');
      wrap_back.removeAttribute('style');
      
      //set id and classes on new pages
      curr.id = 'current';
      curr.removeAttribute('style');
      wrap_curr.insertBefore(curr,null); 
      next.id = 'next';
      wrap_all.insertBefore(next,wrap_turn); 
      //unhide pages
      curr.removeAttribute('style');
      next.removeAttribute('style');
      
      nextPage = page+1;
    }



    return (
        <div>
        <div class="wrap-all">
  <div class="cover"></div>
  <div id="next" class="page right" data-page="2"><p>Next page</p><img src="https://unsplash.it/300?random"/></div>
  <div class="wrap-turn"> 
    <div class="wrap-curr">
      <div id="current" class="page right" data-page="1">
        <h1>TEST</h1>
        <p>Current page with lots of text on it.</p>
        <img src="https://unsplash.it/300/200?random"/>
      </div>
    </div>
    <div class="wrap-prev" data-page="0">
      <div id="prev" class="page left">
        
      </div>
    </div>
    <div class="wrap-back">
      <div id="back" class="page" >
       
      </div>
    </div>
  </div>
  <div class="page right" style="display:none" data-page="3"><img src="https://unsplash.it/300/200?random"/><p>More text from a hidden page</p></div>
  <div class="page right" style="display:none" data-page="4"><img src="https://unsplash.it/300/200?random"/><p>Yet more</p></div>
  <div class="page right" style="display:none" data-page="5"><p>...and even more!</p><img src="https://unsplash.it/400?random"/></div>
  <div class="edge-left edge"></div>
  <div class="edge-right edge"></div>
</div>
<div id="btn_go">Go</div>
<div id="btn_stop">Stop</div>
</div>

    )
}


export default Bingbing4