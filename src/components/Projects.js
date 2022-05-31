import React, {useState} from 'react';
import './css/Projects.css';
import Tenzies from './tenzies/Tenzies';
import Quiz from './quiz/Quiz';

export default function Projects() {

    const [tenzies, setTenzies] = useState( false );

    const startStopGame = ( game, ev ) => {
        game ? ev.target.innerHTML = 'Start Game' : ev.target.innerHTML = 'Stop Game';
    }

    const startTenzies = (ev) => {
        setTenzies( prevState => !prevState );
        startStopGame( tenzies, ev );
    };

    const [quiz, setQuiz] = useState( false );
    const startQuiz = (ev) => {
        setQuiz( prevState => !prevState );
        startStopGame( quiz, ev );
    };

    return (
        <div className="projects">
            <h2>Projects</h2>

            { !quiz && <div className="tenzies-game">
                <h3>Tenzies</h3>
                <button className="button-game" onClick={(ev) => {startTenzies(ev)}}>
                    Start Game
                </button>
                {tenzies && <Tenzies />}
            </div> }

            { !tenzies && <div className="quiz-game">
                <h3>Quiz</h3>
                <button className="button-game" onClick={(ev) => {startQuiz(ev)}}>
                    Start Game
                </button>
                {quiz && <Quiz />}
            </div> }
            
        </div>
    );
};