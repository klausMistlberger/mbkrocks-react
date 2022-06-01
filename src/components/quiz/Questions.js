import React, {useState} from 'react';
import { convertHTMLEntities } from './htmlEntities';

export default function Questions(props) {
    // console.log( props );
    let questions = [];
    try {
        // mapping over questions
        questions = props.questions.map( (question, qix) => {
            // mapping over answers
            const answers = question.answers.map( (answer, aix) => {
                // returning answers
                return (
                    <div className="answer" 
                         key={answer} 
                         onClick={(ev) => {props.setAnswerData(ev)}}
                         data-i={`${qix}-${aix}`}
                         data-selection={props.answerIsSelected[qix][aix].toString()}
                    >
                        { convertHTMLEntities( answer ) }
                    </div>
                );
            }); // map answers
    
            // returning questions
            return (
                <div className="quiz-question" key={qix}>
                    <h2>
                        { convertHTMLEntities( question.question ) }
                    </h2>
                    <div className="answers--container">
                        {answers}
                    </div>
                    <hr />
                </div>
            );
        }); // map questions
    
    } catch (e) {
        console.log( e );
    };


    // Evaluation
    const [result, setResult] = useState(0);

    const checkAnswers = () => {
    
        let result = 0;
        const givenAnswers = document.querySelectorAll( '[data-selection="true"]' );

        // check answers
        givenAnswers.forEach( (el,ix) => {
            if ( el.innerHTML === props.questions[ix].correct_answer ) {
                result++;
                el.setAttribute( 'correct', 'true' );
            } else {
                el.setAttribute( 'incorrect', 'true' );
            };
        });

        // check not selected
        document.querySelectorAll( '[data-selection="false"]' ).forEach( el => { 
            el.setAttribute( 'not-selected', 'true' );
            props.questions.forEach( question => {
                el.innerHTML === question.correct_answer
                && el.setAttribute( 'correct', true );
            });
        });

        setResult( result );
        props.isAnswersChecked();
    };


    return (
        <div className="quiz">
            { questions }
            { !props.answersChecked ? 
                    <button 
                        className="button-startgame"
                        onClick={checkAnswers}
                    >
                        Check answers
                    </button> :
                    <div className="endgame">
                        <div className="result">You scored {result}/{props.questions.length} correct answers</div>
                        <button 
                        className="button-startgame"
                        onClick={props.newGame}
                    >
                        Play again
                    </button>
                    </div>
            }
        </div>
    );
};