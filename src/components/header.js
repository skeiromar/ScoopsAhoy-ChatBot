import React from 'react';
import '../styles/header.css';

function ScoopHeader() {
    return (
        <div>
            <div id="header">
                <div id="header-img-container">
                    <img id="scoop_logo" src="https://tinyurl.com/y6fp7j2f" alt=""/>
                </div>   
                <span id="scoop-font">Scoop's Ahoy <i className="fas fa-ice-cream fa-1x"></i></span>
                <span id="menu-font">Menu</span>
            </div>
        </div>
    )
}

export default ScoopHeader;
