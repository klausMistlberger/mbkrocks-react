import React from 'react';
import './css/Projects.css';
import Tenzies from './tenzies/Tenzies';

export default function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <Tenzies />
            {/* <div>Tenzies</div> */}
            {/* <div>Quiz</div> */}
        </div>
    );
};