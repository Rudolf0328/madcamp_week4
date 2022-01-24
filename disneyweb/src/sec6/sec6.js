import React, { Component } from "react";
import './sec6style.css'





class Sec6 extends Component {
    render(){
    return (
        <div className="wrap">
        <header className="header_wrap">
            <div className="logo">GGANG CODING</div>
        </header>
        <section className="sec01 active">
            <article className="inner">
                <div className="tb_row">
                    <div className="tb_cell">
                        <nav className="nav_list">
                            <ul className="list">
                                <li>
                                    <a href="" className="active">
                                        <span className="txt">TODAY</span>
                                        <span className="mask"></span> 
                                        <span className="mask2"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="txt">IMAGE Mask</span>
                                        <span className="mask"></span>
                                        <span className="mask2"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="txt">TEXT Mask</span>
                                        <span className="mask"></span>
                                        <span className="mask2"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="txt">OVERLAP</span>
                                        <span className="mask"></span>
                                        <span className="mask2"></span>
                                    </a>
                                </li>
                                
                                
                
                                
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="bg_rotate"></div>
            </article>
        </section>
        <footer className="footer">
            <div className="text_area">
                <p>
                    2020 GGANG CODING. 당신의 열정을 응원합니다. :)
                </p>
            </div>
        </footer>
    </div>
    )
}
}

export default (Sec6);