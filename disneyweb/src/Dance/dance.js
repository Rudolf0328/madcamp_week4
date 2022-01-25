import React, { Component } from "react";
import dance_play from "./dance.mp4"
import $ from 'jquery';


function Dance () {
    

    $(function(){

        var svgPath = $('#ggang_svg path');
        var isPlay = false;
    
        function svgSet(){
    
            svgPath[0].style.strokeDasharray = svgPath[0].getTotalLength() + ',' + svgPath[0].getTotalLength();
            svgPath[0].style.strokeDashoffset = svgPath[0].getTotalLength();
    
        }
    
        function init(){
            svgSet();
            drawSvg();
        }
    
        function drawSvg(){
    
            var winScrollTop = $(window).scrollTop();
            var scrollHeight = $(document).height();
            var scrollRealHeight = scrollHeight - $(window).height();
            var parallaxPercent = (winScrollTop / scrollRealHeight * 100) * 1.5;
    
            var parallaxStartValue = svgPath[0].getTotalLength();
            var parallaxMoveDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * (parallaxPercent/100)))); //패럴럭스 요소가 움직일 거리를 구합니다
    
            svgPath[0].style.strokeDashoffset = parallaxMoveDistance;
    
            if(parallaxPercent >= 100 && !isPlay){
    
                isPlay = true;
                $('.video_wrap').css({ opacity:1 });
    
                setTimeout(function(){
                    $('.video_wrap').find('video')[0].play();
    
                    $('.svg_wrap').css({ opacity:0 });
                },500)
    
            }else if(parallaxPercent < 100 && isPlay){
    
                isPlay = false;
                $('.video_wrap').css({ opacity:0 });
    
                $('.video_wrap').find('video')[0].pause();
                $('.video_wrap').find('video')[0].currentTime = 0;
    
                $('.svg_wrap').css({ opacity:1 });
    
            }
    
        }
    
        $(window).scroll(function(){
            drawSvg();
        })
    
        init();
    
    
    });
    

    return (
        <div class="wrap">
        <h2 class="fix_tit">
            <span>SVG :D</span>
            <strong>PARALLAX</strong>
        </h2>
        <div class="svg_wrap">
            <svg id="ggang_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                <path class="cls-1" d="M733.5,420.5s56-4,69,10,94,53,95,57,14,0,14,0l12-16s11-25,22-28,48-35,48-35,23-14,52-9l11,6-50,16s-22,7-42,54c0,0-17,17-24,18,0,0,4,16-3,26,0,0,18,33,14,37s35-17,60,14c0,0,21,26-1,58,0,0-9,21-23,25v17s4,33,8,35c0,0,28,62,25,83l18,49-45,4,10-8s3-35-16-55c0,0-33-80-32-96,0,0-15-5-18-19,0,0-19-22-18-26,0,0-95-36-119-75,0,0-17,69-31,81,0,0-8,36-17,46,0,0-3,7-32,20l-35,17s-59,56-60,57-9,1-9,1,0,30-3,31l8,12s27,3,23,14c0,0-1,7-14,6h-36s-56-37-55-44,15-38,25-36l91-79s35-25,43-25l12-15,16-109s4-34-57-72-92-23-103-59c0,0,3-28,7-30l-5-90,1-15s-36-43-39-42-30-33,21-21c0,0,95,31,89,52,0,0,4,14-18,24l1,93-4,11Z"/>
            </svg>
        </div>
        <figure class="video_wrap">
            <video src={dance_play} muted loop></video>
        </figure>
    </div>
    )

    }

export default (Dance);