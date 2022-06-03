import React, {useState} from 'react';
import './css/EntwederOder.css';

export default function EntwederOder() {

    const [entwederOder, setEntwederOder] = useState({
        entweder: '',
        oder: '',
    });

    const inputChange = (event) => {
        // console.log( event.target );
        setEntwederOder( prevValue => ({
            ...prevValue,
            [event.target.name]: event.target.value
        }));
    };

    const choices = 100;
    const randomNumber = () => Math.floor(Math.random() * (choices + 1));

    const [output, setOutput] = useState('');

    const getResult = (event) => {
        event.preventDefault();
        const number = randomNumber();
        number < choices
            ? (
                number % 2 === 0 
                    ? setOutput(entwederOder.entweder)
                    : setOutput(entwederOder.oder)
              )
            : setOutput('Keine Ahnung... Wirf eine Münze')
    };

    return (
        <div className="entweder-oder">
            <h2>Entweder Oder</h2>
            <form className="eOForm">
                <input 
                    type="text"
                    name="entweder"
                    value={entwederOder.entweder}
                    onChange={(event) => {inputChange(event)}}
                    placeholder="entweder"
                    className="eOForm-input"
                />
                <input 
                    type="text" 
                    name="oder"
                    value={entwederOder.oder}
                    onChange={(event) => {inputChange(event)}}
                    placeholder="oder"
                    className="eOForm-input"
                />
                <button className="button-game" onClick={getResult}>
                    Go
                </button>
            </form>
            <h3 className="eOResult">{output}</h3>
        </div>
    );
};