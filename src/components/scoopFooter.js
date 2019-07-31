import React from 'react';
import "../styles/scoopFooterStyle.css";

function ScoopFooter() {
    return (
        <div>
            <p className="hline"></p>
        
            <footer className="ftr-cnt">

                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/muhammad-omar-3403a315a/">
                            <abbr title="My Linkedin">
                                <i class="fab fa-linkedin fa-8x"></i>
                            </abbr>
                        </a>
                    </li>
                
                    </ul>
                    <ul>
                    <li>
                        <a href="https://github.com/skeiromar/" class="github-logo-a">
                            <abbr title="My Github">
                                <i class="fab fa-github fa-8x"></i>
                            </abbr>
                        </a>
                    </li>
                    
                    </ul>
                    <ul>
                    <li>
                        <a href="https://angel.co/muhammad-omar-5">
                            <abbr title="My Angel list">
                                <i class="fab fa-angellist fa-8x"></i>
                            </abbr>
                        </a>
                    </li>

                    </ul>
                    <ul>
                    <li>
                        <a href="https://skeiromar.github.io/My-Portfolio-Site/">
                            <abbr title="My Personal Site">
                                <i class="fas fa-laptop-code fa-8x"></i>
                            </abbr>
                        </a>
                    </li>
            
                </ul>
            </footer>
        </div>
    )
}

export default ScoopFooter;
