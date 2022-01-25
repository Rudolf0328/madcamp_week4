import React, { Component } from "react";
import './shelfstyle.css'
import img_list02 from "./images/img_list02.jpg"
import { Link } from "react-router-dom";


import $ from 'jquery'

function Shelf(){
    
    return(   
      
    <div class="books">
  <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/lp.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <div></div>
      <div></div>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      <Link to  = "/player">
  <img src="/al6.jpg">
     </img>
      </Link>
      </div>


      )
}

export default Shelf