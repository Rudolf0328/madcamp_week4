import React, { Component } from "react";
import './sec5style.css'
import img_list02 from "./images/img_list02.jpg"
import img_list01 from "./images/img_list01.jpg"
import img_list03 from "./images/img_list03.jpg"
import mson1 from "./images/mson1.jpg"
import mson2 from "./images/mson2.jpg"
import mson3 from "./images/mson3.jpg"
import mson4 from "./images/mson4.jpg"
import mson5 from "./images/mson5.jpg"
import mson6 from "./images/mson6.jpg"
import mson7 from "./images/mson7.jpg"
import mson8 from "./images/mson8.jpg"
import mson9 from "./images/mson9.jpg"
// import $ from 'jquery';
// import jquery from 'jquery';





import video_1 from "./sky.mp4"

// $(function(){
//     /*변수및 요소 선언*/

//     var header = $('.header_wrap');
//     var sectionMainVisual = $('.sec_mainvis');
//     var sectionOverlap = $('.sec_list_overlap');
//     var sectionMainTop; //섹션의 top값을 구합니다.
//     var sectionMainBottom; //섹션의 BOTTOM값을 구합니다.

//     var parallaxBody = $('.sec_list_overlap'); //패럴럭스가 시작될 엘리먼트 지정
//     var parallaxList = $('.sec_parallax .img_box'); //변수에 페럴럭스에 반응할 이미지 리스트틀 지정합니다.

//     /*리사이즈, 스크롤할때 변해야 할 값들*/
//     var winScrollTop; // 스크롤바의 높이를 담을 변수를 선업합니다
//     var sectionIsMoving = false;

//     var parallaxOffsetTop; //패럴럭스가 시작될 요소의 상단 위치값
//     var parallaxThisTop; //패럴럭스가 시작될 위치값을 구함
//     var parallaxSpeed = 1200; // 패럴럭스 요소의 스피드
//     var parallaxPercent; // 패럴럭스 백분율값을 담을 변수를 선업합니다
//     var parallaxStartValue = 1000; //패럴럭스요소가 200 위치에서 시작하도록 설정합니다.
//     var parallaxMoveDistance; // 패럴럭스 요소가 움직일 거리를 담을 변수 선업합니다

//     function setProperty(){ // 스크롤할때 변할 값들을 셋팅해주는 함수

//         winScrollTop = $(window).scrollTop(); //스크롤바의 현재 위치를 구합니다
//         sectionMainTop = sectionMainVisual.offset().top; //섹션의 top값을 구합니다.
//         sectionMainBottom = sectionMainTop + sectionMainVisual.height(); //섹션의 BOTTOM값을 구합니다.

//         parallaxOffsetTop = parallaxBody.offset().top; //패럴럭스가 시작될 요소의 상단 위치값
//         parallaxThisTop = winScrollTop - parallaxOffsetTop; //패럴럭스가 시작될 위치값을 구함.
//         parallaxPercent = parallaxThisTop / parallaxSpeed * 100; // 이동할 거리 백분율 값을 담음
//         parallaxMoveDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * (parallaxPercent/100)))); //패럴럭스 요소가 움직일 거리를 구합니다

//     };

//     function motionParallax(){ // 스크롤할때 계속 호출될 모션 함수 선언
//         // console.log(parallaxPercent);

//         if(parallaxPercent > 60){
//             $('.sec_parallax').addClass('active');
//         }else {
//             $('.sec_parallax').removeClass('active');
//         }

//         /*action*/
//         parallaxList.eq(0).css({ // 계산된 값을 각각의 엘리먼에 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ parallaxMoveDistance +'px)'
//         });

//         parallaxList.eq(1).css({ // 계산된 값을 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ parallaxMoveDistance * 2.1 +'px)'
//         });

//         parallaxList.eq(2).css({ // 계산된 값을 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ parallaxMoveDistance * 2.5 +'px)'
//         });

//         parallaxList.eq(3).css({ // 계산된 값을 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ parallaxMoveDistance * 3.5 +'px)'
//         });

//         parallaxList.eq(4).css({ // 계산된 값을 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ parallaxMoveDistance * 4.2 +'px)'
//         });

//         parallaxList.eq(5).css({ // 계산된 값을 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ parallaxMoveDistance * 4.8 +'px)'
//         });

//         parallaxList.eq(6).css({ // 계산된 값을 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ parallaxMoveDistance * 5.3 +'px)'
//         });

//         parallaxList.eq(7).css({ // 계산된 값을 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ parallaxMoveDistance * 2.7 +'px)'
//         });

//         $('.sec_parallax .bg_line').css({ // 계산된 값을 css를 이용해 적용합니다
//             transform : 'translate(0px,'+ -parallaxMoveDistance*3 +'px)'
//         });
//     };

//     function moveSection(){ //스크롤할때 호출함

//         setProperty(); // 스크롤할때 변해야할 값들의 변수를 선언한 함수입니다

//         motionParallax(); //패럴럭스 처리 함수입니다

//         if(winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom){ //섹션에 진입했는지 체크합니다.

//             if(!sectionIsMoving){ //애니메이션이 진행중인지 체크합니다.
//                 sectionIsMoving = true;
//                 moveStartRender(); //섹션 이동을 처리해주는 함수
//             }

//             // console.log('section in');
//         }

//         if( winScrollTop >= sectionMainBottom){ //페이지가 아래에서 시작할경우 액티브되야할 클래스 처리해줌
//             activeCehck(); //새로고침을할때 페이지가 아래에서 시작할경우 액티브되야할 요소들을 처리해줌
//         }

//     };

//     function activeCehck(){ //새로고침을할때 페이지가 아래에서 시작할경우 액티브되야할 요소들을 처리해줌

//         header.addClass('active');
//         sectionMainVisual.addClass('active');
//         sectionOverlap.addClass('active');

//     };

//     function moveStartRender(){ //섹션 이동을 처리해주는 함수

//             if(!header.hasClass('active')){ //해더 클래스가 없을경우에는 아래로 내려오는 상황

//                 header.addClass('active');
//                 sectionMainVisual.addClass('active');
//                 sectionOverlap.addClass('active');

//                 $('html').stop(true).animate({
//                     scrollTop: sectionMainBottom+1 //IE버그 반복 버그 처리를 위해 1을 추가합니다.
//                 },500,function(){
//                     sectionIsMoving = false; //섹션이 이동중인지 체크하는 변수
//                 });

//             }else{ //해더 클래스가 있을경우 위로 올라가는 상황

//                 header.removeClass('active');
//                 sectionMainVisual.removeClass('active');
//                 sectionOverlap.removeClass('active');

//                 $('html').stop(true).animate({
//                     scrollTop: sectionMainTop
//                 },500,function(){
//                     sectionIsMoving = false; //섹션이 이동중인지 체크하는 변수
//                 });

//             }

//     };

//     function init(){ //최초 한번실행

//         moveSection(); // 스크롤 이동처리 함수입니다

//     };

//     $(window).scroll(function(e){ //스크롤 이벤트를 추가합니다.

//         moveSection(); // 스크롤 이동처리 함수입니다

//     });

//     init(); //start
// });

class Sec5 extends Component {
    
    
    
    render(){
    return (

        <div class="wrap1">
        <header class="header1_wrap">
            <div class="logo">각개전투- 시유</div>
        </header>
        <nav class="nav_list">
            <ul class="list">
                <li>
                    <button>Welcom</button>
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
                    지원 원경<br></br> 언제오냐?
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
                <h2 class="com_tit011">
                    IN LIST :)
                </h2>
                <p class="com_txt011">
                    해당요소가 엑티브 되면서 등장하는 리스트 이미지
                </p>
                <ul class="list">
                    <li>
                        <figure class="img_box">
                            <img src={img_list02} ></img>
                        </figure>
                        <figure class="img_box last">
                            <img src={img_list03}></img>
                        </figure>
                    </li>
                    <li>
                        <figure class="img_box">
                            <img src={img_list01}></img>
                        </figure>
                    </li>
                </ul>
            </article>
        </section>
        <section class="sec_parallax active">
            <h2 class="com_tit011">
                PARALLAX SCROLLING
            </h2>
            <p class="com_txt011">
                여러 요소들의 시간차를 이용해 이동하는 패럴럭스 기법을 배워보세요 :)
            </p>
            <article class="list_banner inner">
                <figure class="img_box img1">
                    <img src={mson1}></img>
                </figure>
                <figure class="img_box img2">
                    <img src={mson2}></img>
                </figure>
                <figure class="img_box img3">
                    <img src={mson3}></img>
                </figure>
                <figure class="img_box img4">
                    <img src={mson4}></img>
                </figure>
                <figure class="img_box img5">
                    <img src={mson5}></img>
                </figure>
                <figure class="img_box img6">
                    <img src={mson6}></img>
                </figure>
                <figure class="img_box img7">
                    <img src={mson7}></img>
                </figure>
                <figure class="img_box img8">
                    <img src={mson8}></img>
                </figure>
                <div class="bg_line"></div>
            </article>
        </section>
        <footer class="footer1">
            <div class="text_area">
                <p>
                    2020 GGANG CODING. 당신의 열정을 응원합니다. :)
                </p>
            </div>
        </footer>
    </div>

    )
    }
}

export default (Sec5);