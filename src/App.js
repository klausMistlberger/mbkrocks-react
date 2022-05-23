import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {

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

export default App;
