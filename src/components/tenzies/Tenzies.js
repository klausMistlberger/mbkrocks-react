import React, {useState, useEffect} from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Navbar from './Navbar';
import '../css/Tenzies.css';

export default function Tenzies() {

    // if ( !localStorage.getItem( 'tenzies' ) ) {
    //     localStorage.setItem( 'tenzies', JSON.stringify( '-' ) );
    // };

    const [tenzies, setTenzies] = useState( false );
    // const [rolls, setRolls] = useState( 0 );
    // const [highscore, setHighscore] = useState( JSON.parse( localStorage.getItem( 'tenzies' ) ) );

    const [eyeMode, setEyeMode] = useState( true ); 
    const toggleEyeMode = () => {
        setEyeMode( prevMode => !prevMode );
    };

    const generateNewDie = () => {
        return (
            {
                value: Math.ceil( Math.random() * 6 ),
                isHeld: false,
                id: nanoid()
            }
        );
    };

    const allNewDice = () => {
        const tenRandomNumbers = [];
        for( let i=0; i<10; i++) {
            tenRandomNumbers.push( generateNewDie() );
        };
        // console.log( tenRandomNumbers );
        return tenRandomNumbers;
    };

    const [diceArray, setDiceArray] = useState( allNewDice() );

    useEffect(() => {
        const allDiceHeld = diceArray.every( die => die.isHeld );
        const allValuesMatch = diceArray.every( die => die.value === diceArray[0].value );
        if ( allDiceHeld && allValuesMatch ) {
            setTenzies( true );
            // console.log( "you've won" );
            // if ( highscore === '-' ) {
            //     setHighscore( rolls );
            //     localStorage.setItem( 'tenzies', JSON.stringify( rolls ) );
            // };
            // if ( rolls < highscore ) {
            //     setHighscore( rolls );
            //     localStorage.setItem( 'tenzies', JSON.stringify( rolls ) );
            // };
        };
    }, [diceArray]);

    const holdDice = (id) => {
        // console.log( id );
        setDiceArray( prevDice => {
            return prevDice.map( die => {
                return (
                    die.id === id ?
                        {...die, isHeld: !die.isHeld} 
                      : {...die}
                );
            });
        });
    };

    const dice = diceArray.map( (die, ix) => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld}
            holdDice={() => {holdDice(die.id)}}
            eyeMode={eyeMode}
        />
    ));

    const rollNewDice = () => {
        setDiceArray( prevDice => {
            return prevDice.map( die => die.isHeld ? die : generateNewDie() );
        });
        // setRolls( prevRolls => prevRolls + 1 );
    };

    const newGame = () => {
        setDiceArray( allNewDice() );
        setTenzies( false );
        // setRolls( 0 );
        // setHighscore( localStorage.getItem( 'tenzies' ) );
    };

    return (
        <div className="tenzies">
            { 
                tenzies 
                    &&  <Confetti 
                            className="confetti" 
                            width={484} 
                            height={400}
                        /> 
            }
            <Navbar 
                // highscore={highscore} 
                // rolls={rolls}
                eyeMode={eyeMode}
                toggleEyeMode={toggleEyeMode}
            />
            
            <h2 className="title">Tenzies</h2>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice--container">
                {dice}
            </div>
            { tenzies ? 
                <button className="btnRoll" onClick={newGame}>New Game</button>
              : <button className="btnRoll" onClick={rollNewDice}>Roll dice</button>
            }
        </div>
    );
};