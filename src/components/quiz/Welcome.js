import React from 'react';

export default function Welcome(props) {
    return (
        <div className="welcome-screen">
            <h2>Quizzical</h2>
            <p>Test your knowledge</p>

            <button 
                className="button-startgame" 
                onClick={props.start}
            >
                Start quiz
            </button>
        </div>
    );
};