import React, {useState} from 'react';
import './css/Projects.css';
import Tenzies from './tenzies/Tenzies';
import Quiz from './quiz/Quiz';
import EntwederOder from './EntwederOder';

export default function Projects() {

    const [tenzies, setTenzies] = useState( false );

    const startStopGame = ( game, event, eo ) => {
        eo 
            ? (game ? event.target.innerHTML = 'Decide' : event.target.innerHTML = 'Stop deciding')
            : (game ? event.target.innerHTML = 'Start Game' : event.target.innerHTML = 'Stop Game')
    };

    const startTenzies = (event) => {
        setTenzies( prevState => !prevState );
        startStopGame( tenzies, event );
    };

    const [quiz, setQuiz] = useState( false );
    const startQuiz = (event) => {
        setQuiz( prevState => !prevState );
        startStopGame( quiz, event );
    };

    const [eo, setEo] = useState( false );
    const startEo = (event) => {
        setEo( prevState => !prevState );
        startStopGame( eo, event, true );
    };

    return (
        <div className="projects">
            { !(tenzies || quiz || eo) && <h2>Projects</h2> }
            <div className="project-examples">
                {/* -------------------------- Tenzies -------------------------- */}
                { (!quiz && !eo) && <div className="project">
                    <h3>Tenzies</h3>
                    { !tenzies && <p className="project-description">A dice game</p> }
                    <button className="button-game" onClick={(event) => {startTenzies(event)}}>
                        Start Game
                    </button>
                    {tenzies && <Tenzies />}
                </div> }

                {/* -------------------------- Quiz -------------------------- */}
                { (!tenzies && !eo) && <div className="project">
                    <h3>Quiz</h3>
                    { !quiz && <p className="project-description">Test your knowledge</p> }
                    <button className="button-game" onClick={(event) => {startQuiz(event)}}>
                        Start Game
                    </button>
                    {quiz && <Quiz />}
                </div> }


                { (!tenzies && !quiz) && <div className="project">
                    <h3>Entweder-Oder</h3>
                    { !eo && <p className="project-description">Undecisive?</p> }
                    <button className="button-game" onClick={(event) => {startEo(event)}}>
                        Decide
                    </button>
                    {eo && <EntwederOder />}
                </div> }

            </div>
            

                {/* <div className="entweder-oder-generator">
                    <h3>Entweder-Oder</h3>

                    
                </div> */}
            
        </div>
    );
};