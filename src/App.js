import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {

    const headerMenu = [
        "About",
        "Projects",
        "Photography",
        "Contact"
    ];

    return (
        <div className="App">
            <Header nav={headerMenu}/>
            <Main />
        </div>
    );
};
