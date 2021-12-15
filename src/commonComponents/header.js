import React from 'react';
import {useState,useEffect} from 'react';
import '../styles/header.css';
import khanda from "../images/khanda.jpg";
import menu from "../images/menu.png";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="logoHeaderDiv">
                <img className="khandaLogoHeaderImage" src={khanda}/>
                <p className="HeaderGurbaniText">Gurbani</p>
            </div>
            
            <img src={menu} className="menu"/>
        </div>
   
    )
}

export default  Header;