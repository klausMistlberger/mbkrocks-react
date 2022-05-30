import React from 'react';
import dice from './dice';

export default function Die(props) {
    // console.log( props );
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : '#ffffff'
    };

    return (
        <div 
            className='die' 
            style={styles} 
            onClick={props.holdDice}
        >
            { props.eyeMode ? dice[props.value] : props.value }
        </div>
    );
};