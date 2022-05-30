import React from 'react';
import './Main.css';
import About from './About';
import Projects from './Projects';
import Photography from './Photography';
import Contact from './Contact';

export default function Main(props) {
    // console.log( props );

    return (
        <div className="content-section">
            {
                props.navigation[0].isShown 
                &&  
                <div className="main">
                    <h1>Welcome to Klaus Mistlberger</h1>
                </div>
            }
            
            {props.navigation[1].isShown && <About />}
            {props.navigation[2].isShown && <Projects />}
            {props.navigation[3].isShown && <Photography />}
            {props.navigation[4].isShown && <Contact />}

        </div>
    );
};