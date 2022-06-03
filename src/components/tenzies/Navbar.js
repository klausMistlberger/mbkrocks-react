import React from 'react';

export default function Navbar(props) {
    // console.log( props );
    return (
        <div 
            className={ props.eyeMode ? "navbar eyes": "navbar"}
        >
            {/* <div>
                <p>Highscore: {props.highscore}</p>
                <p>Amount of rolls: {props.rolls}</p>
            </div> */}

            <div className="toggler">
                <p className="toggler--numbers">Numbers</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleEyeMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--eyes">Eyes</p>
            </div>
        </div>
    );
};