import {useState, useEffect} from 'react';
import '../css/Quiz.css';
import Welcome from './Welcome';
import Questions from './Questions';

export default function Quiz() {

    const [startScreen, setStartScreen] = useState( true );
    const startQuiz = () => {
        setStartScreen( false );
    };

    const [questions, setQuestions] = useState([]);
    const [newGame, setNewGame] = useState( 1 );
    const [answersChecked, setAnswersChecked] = useState( false );

    const isAnswersChecked = () => {
        setAnswersChecked( prev => !prev );
    };

    const startNewGame = () => {
        // setStartScreen( true );
        setNewGame( prevVal => prevVal + 1 );
        isAnswersChecked();
    };


    useEffect(() => {
        fetch( 'https://opentdb.com/api.php?amount=5' )
            .then( res => res.json() )
            .then( data => {
                // console.log( data.results );
                const questions = [];
                data.results.forEach( el => {
                    const questionObject = {
                        question: el.question,
                        correct_answer: el.correct_answer,
                        answers: null,
                        type: el.type,
                    };
                    if ( el.type === 'boolean' ) {
                        questionObject.answers = ['True', 'False'];
                    } else {
                        questionObject.answers = [el.correct_answer, ...el.incorrect_answers];
                        questionObject.answers.sort(() => Math.random() - 0.5);
                    }
                    questions.push( questionObject );
                });
                setQuestions( questions );
            })
        ;
    },
    [newGame]);

    const [answerIsSelected, setAnswerIsSelected] = useState([]);

    useEffect(() => {
        // set all possible 'answerIsSelected' to false
        const allAnswersArray = questions.map( question => {
            const singleAnswerArray = [];
            question.answers.forEach( (el,ix) => {
                singleAnswerArray[ix] = false;
            });
            return singleAnswerArray;
        });
        setAnswerIsSelected( allAnswersArray );
    },
    [questions]);

    const setAnswerData = (ev) => {
        console.log( answerIsSelected );
        console.log( 'change state' );
        const target = ev.target;
        // console.log( target );
        const answer = target.getAttribute( 'data-i' ).split('-');
        // console.log( answer );
        setAnswerIsSelected( prevSelection => {
            let answerSelection = [...prevSelection];
            answerSelection[answer[0]].forEach( (el, ix) => {
                // console.log( el, ix );
                ix.toString() === answer[1]
                    ? answerSelection[answer[0]][ix] = !el
                    : answerSelection[answer[0]][ix] = false;
            })
            console.log(answerSelection)
            return answerSelection;
        });
    };

    return (
        <div className="quiz">
            <img src="./images/top-right.png" alt="" className="topright" />
            <img src="./images/bottom-left.png" alt="" className="bottomleft" />
            { startScreen 
                ? <Welcome start={startQuiz} /> 
                : <Questions 
                    questions={questions} 
                    newQuestions={setQuestions}
                    setAnswerData={setAnswerData}
                    isSelected={answerIsSelected}
                    newGame={startNewGame}
                    isAnswersChecked={isAnswersChecked}
                    answersChecked={answersChecked}
                />
            }
        </div>
    );
};