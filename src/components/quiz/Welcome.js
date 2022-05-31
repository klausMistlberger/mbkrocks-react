import React from 'react';

export default function Welcome(props) {
    return (
        <div className="welcome-screen">
            <h1>Quizzical</h1>
            <p>Test your knowledge</p>

            {/* <select name="difficulty" id="">
                <option value="any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select> */}

            <button 
                className="button-startgame" 
                onClick={props.start}
            >
                Start quiz
            </button>
        </div>
    );
};