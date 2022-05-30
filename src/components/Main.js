import React from 'react';
import './Main.css';
import About from './About';

export default function Main(props) {
    // console.log( props );

    return (
        <div className="main">
            This Main
            <h1>Welcome to Klaus Mistlberger</h1>
            {props.navigation[1].isShown && <About />} 
        </div>
    );
};