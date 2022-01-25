import React, { Component } from "react";
import './sec5style.css'
// import img_list02 from "./images/img_list02.jpg"
// import img_list01 from "./images/img_list01.jpg"
// import img_list03 from "./images/img_list03.jpg"
// import mson1 from "../../images/images/mson1.jpg"
// import mson2 from "../../images/images/mson2.jpg"
// import mson3 from "../../images/images/mson3.jpg"
// import mson4 from "../../images/images/mson4.jpg"
// import mson5 from "../../images/images/mson5.jpg"
// import mson6 from "../../images/images/mson6.jpg"
// import mson7 from "../../images/images/mson7.jpg"
// import mson8 from "../../images/images/mson8.jpg"
// import mson9 from "./images/mson9.jpg"

// import dp1 from "./images/images/dp1.jpg"
// import dp2 from "./images/images/dp2.jpg"
// import dp3 from "./images/images/dp3.jpg"
// import dp4 from "./images/images/dp4.jpg"
// import dp5 from "./images/images/dp5.jpg"
// import dp6 from "./images/images/dp6.jpg"
// import dp7 from "./images/images/dp7.jpg"
// import dp8 from "./images/images/dp8.jpg"
// import dp9 from "./images/images/dp9.jpg"
// import dp10 from "./images/images/dp10.jpg"
// import dp11 from "./images/images/dp11.jpg"
// import dp12 from "./images/images/dp12.jpg"
// import dp13 from "./images/images/dp13.jpg"
// import dp14 from "./images/images/dp14.jpg"
// import dp15 from "./images/images/dp15.jpg"
// import dp16 from "./images/images/dp16.jpg"
// import dp17 from "./images/images/dp17.jpg"

// import $ from 'jquery';
// import jquery from 'jquery';
import $ from 'jquery';






// import video_1 from "./sky.mp4"
import video_1 from "./disney.mp4"
import { Link } from "react-router-dom";


function Sec5(){
    
    $(function(){
        /*변수및 요소 선언*/
    
        var header = $('.header_wrap');
        var sectionMainVisual = $('.sec_mainvis');
        var sectionOverlap = $('.sec_list_overlap');
        var sectionMainTop; //섹션의 top값을 구합니다.
        var sectionMainBottom; //섹션의 BOTTOM값을 구합니다.
    
        var parallaxBody = $('.sec_list_overlap'); //패럴럭스가 시작될 엘리먼트 지정
        var parallaxList = $('.sec_parallax .img_box'); //변수에 페럴럭스에 반응할 이미지 리스트틀 지정합니다.
    
        /*리사이즈, 스크롤할때 변해야 할 값들*/
        var winScrollTop; // 스크롤바의 높이를 담을 변수를 선업합니다
        var sectionIsMoving = false;
    
        var parallaxOffsetTop; //패럴럭스가 시작될 요소의 상단 위치값
        var parallaxThisTop; //패럴럭스가 시작될 위치값을 구함
        var parallaxSpeed = 1200; // 패럴럭스 요소의 스피드
        var parallaxPercent; // 패럴럭스 백분율값을 담을 변수를 선업합니다
        var parallaxStartValue = 1000; //패럴럭스요소가 200 위치에서 시작하도록 설정합니다.
        var parallaxMoveDistance; // 패럴럭스 요소가 움직일 거리를 담을 변수 선업합니다
    
        function setProperty(){ // 스크롤할때 변할 값들을 셋팅해주는 함수
    
            winScrollTop = $(window).scrollTop(); //스크롤바의 현재 위치를 구합니다
            console.log(winScrollTop)
            sectionMainTop = sectionMainVisual.offset().top; //섹션의 top값을 구합니다.
            // sectionMainBottom = sectionMainTop + sectionMainVisual.height(); //섹션의 BOTTOM값을 구합니다.
    
            parallaxOffsetTop = parallaxBody.offset().top; //패럴럭스가 시작될 요소의 상단 위치값
            parallaxThisTop = winScrollTop - parallaxOffsetTop; //패럴럭스가 시작될 위치값을 구함.
            console.log(parallaxThisTop)
            console.log("parallaxThisTop")
            parallaxPercent = parallaxThisTop / parallaxSpeed * 100; // 이동할 거리 백분율 값을 담음
            parallaxMoveDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * (parallaxPercent/100)))); //패럴럭스 요소가 움직일 거리를 구합니다
    
        };
    
        function motionParallax(){ // 스크롤할때 계속 호출될 모션 함수 선언
            // console.log(parallaxPercent);
    
            if(parallaxPercent > 60){
                $('.sec_parallax').addClass('active');
            }else {
                $('.sec_parallax').removeClass('active');
            }
    
            /*action*/
            parallaxList.eq(0).css({ // 계산된 값을 각각의 엘리먼에 css를 이용해 적용합니다
                transform : 'translate(0px,'+ parallaxMoveDistance +'px)'
            });
    
            parallaxList.eq(1).css({ // 계산된 값을 css를 이용해 적용합니다
                transform : 'translate(0px,'+ parallaxMoveDistance * 2.1 +'px)'
            });
    
            parallaxList.eq(2).css({ // 계산된 값을 css를 이용해 적용합니다
                transform : 'translate(0px,'+ parallaxMoveDistance * 2.5 +'px)'
            });
    
            parallaxList.eq(3).css({ // 계산된 값을 css를 이용해 적용합니다
                transform : 'translate(0px,'+ parallaxMoveDistance * 3.5 +'px)'
            });
    
            parallaxList.eq(4).css({ // 계산된 값을 css를 이용해 적용합니다
                transform : 'translate(0px,'+ parallaxMoveDistance * 4.2 +'px)'
            });
    
            parallaxList.eq(5).css({ // 계산된 값을 css를 이용해 적용합니다
                transform : 'translate(0px,'+ parallaxMoveDistance * 4.8 +'px)'
            });
    
            parallaxList.eq(6).css({ // 계산된 값을 css를 이용해 적용합니다
                transform : 'translate(0px,'+ parallaxMoveDistance * 5.3 +'px)'
            });
    
            parallaxList.eq(7).css({ // 계산된 값을 css를 이용해 적용합니다
                transform : 'translate(0px,'+ parallaxMoveDistance * 2.7 +'px)'
            });
    
            $('.sec_parallax .bg_line').css({ // 계산된 값을 css를 이용해 적용합니다
                transform : 'translate(0px,'+ -parallaxMoveDistance*3 +'px)'
            });
        };
    
        function moveSection(){ //스크롤할때 호출함
    
            setProperty(); // 스크롤할때 변해야할 값들의 변수를 선언한 함수입니다
    
            motionParallax(); //패럴럭스 처리 함수입니다
    
            if(winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom){ //섹션에 진입했는지 체크합니다.
    
                if(!sectionIsMoving){ //애니메이션이 진행중인지 체크합니다.
                    sectionIsMoving = true;
                    moveStartRender(); //섹션 이동을 처리해주는 함수
                }
    
                // console.log('section in');
            }
    
            if( winScrollTop >= sectionMainBottom){ //페이지가 아래에서 시작할경우 액티브되야할 클래스 처리해줌
                activeCehck(); //새로고침을할때 페이지가 아래에서 시작할경우 액티브되야할 요소들을 처리해줌
            }
    
        };
    
        function activeCehck(){ //새로고침을할때 페이지가 아래에서 시작할경우 액티브되야할 요소들을 처리해줌
    
            header.addClass('active');
            sectionMainVisual.addClass('active');
            sectionOverlap.addClass('active');
    
        };
    
        function moveStartRender(){ //섹션 이동을 처리해주는 함수
    
                if(!header.hasClass('active')){ //해더 클래스가 없을경우에는 아래로 내려오는 상황
    
                    header.addClass('active');
                    sectionMainVisual.addClass('active');
                    sectionOverlap.addClass('active');
    
                    $('html').stop(true).animate({
                        scrollTop: sectionMainBottom+1 //IE버그 반복 버그 처리를 위해 1을 추가합니다.
                    },500,function(){
                        sectionIsMoving = false; //섹션이 이동중인지 체크하는 변수
                    });
    
                }else{ //해더 클래스가 있을경우 위로 올라가는 상황
    
                    header.removeClass('active');
                    sectionMainVisual.removeClass('active');
                    sectionOverlap.removeClass('active');
    
                    $('html').stop(true).animate({
                        scrollTop: sectionMainTop
                    },500,function(){
                        sectionIsMoving = false; //섹션이 이동중인지 체크하는 변수
                    });
    
                }
    
        };
    
        function init(){ //최초 한번실행
    
            moveSection(); // 스크롤 이동처리 함수입니다
    
        };
    
        $(window).scroll(function(e){ //스크롤 이벤트를 추가합니다.
    
            moveSection(); // 스크롤 이동처리 함수입니다
    
        });
    
        init(); //start
    });
    
    
    return (
      <Link to="/animation">
        <div class="wrap">
        <header class="header_wrap">
            <div class="logo">Disney Wiki</div>
        </header>
        <nav class="nav_list">
            <ul class="list">
                <li>
                    <button>Welcome</button>
                </li>
                <li>
                    <button>to</button>
                </li>
                <li>
                    <button>Disney</button>
                </li>
            </ul>
        </nav>
        <section class="sec_mainvis">
            <article class="main_visual">
                <h2 class="tit">
                    <br></br> 
                </h2>
                <figure class="video_fixed">
                    <video width="100%" autoplay = "autoplay" loop = "loop" muted = "muted">
                      <source src={video_1} type="video/mp4"></source>
                    </video>
                </figure>
            </article>
        </section>
        <section class="sec_list_overlap active">
            <article class="list_overlap inner">
                <h2 class="com_tit01">
                    HELLO :)
                </h2>
                <p class="com_txt01">
                    Princess Picture
                </p>
                <ul class="list">
                    <li>
                        <figure class="img_box">
                            <img src="./images/images/dp18.jpg"width="500px" height="312.5px" ></img>
                        </figure>
                        <figure class="img_box last">
                            <img src="./images/images/dp20.jpg" width="500px" height="312.5px"></img>
                        </figure>
                    </li>
                    <li>
                        <figure class="img_box">
                            <img src="./images/images/dp25.jpg" width="600px" height="625px"></img>
                        </figure>
                    </li>
                </ul>
            </article>
        </section>
        <section class="sec_parallax active">
            <h2 class="com_tit01">
                환영합니다
            </h2>
            <p class="com_txt01">
                디즈니 공주들을 같이 만나 보아요 :)
            </p>
            <article class="list_banner inner">
                <figure class="img_box img1">
                    <img src="./images/images/dp11.jpg"></img>
                </figure>
                <figure class="img_box img2">
                    <img src="./images/images/dp17.jpg"></img>
                </figure>
                <figure class="img_box img3">
                    <img src="./images/images/dp12.jpg"></img>
                </figure>
                <figure class="img_box img4">
                    <img src="./images/images/dp10.jpg"></img>
                </figure>
                <figure class="img_box img5">
                    <img src="./images/mson5.jpg"></img>
                </figure>
                <figure class="img_box img6">
                    <img src="./images/images/dp15.jpg"></img>
                </figure>
                <figure class="img_box img7">
                    <img src="./images/images/dp16.jpg"></img>
                </figure>
                <figure class="img_box img8">
                    <img src="./images/images/dp9.jpg"></img>
                </figure>
                <div class="bg_line"></div>
            </article>
        </section>
        <footer class="footer1">
            <div class="text_area">
                <p>
                    
                </p>
            </div>
        </footer>
    </div>
    </Link>

    )
    }

export default (Sec5);