import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {

    const navMenu = [
        {
            name: "Main", 
            isShown: true,
            id: 0
        },
        {
            name: "About",
            isShown: false,
            id: 1
        },
        {
            name: "Projects",
            isShown: false,
            id: 2
        },
        {
            name: "Photography",
            isShown: false,
            id: 3
        },
        {
            name: "Contact",
            isShown: false,
            id: 4
        }
    ];

    const [navigationMenu, setNavigationMenu] = useState(navMenu);

    const changeNavigation = (ev) => {
        const target = ev.target;
        // console.log( target.innerHTML );
        setNavigationMenu( prevNav => {
            const newNav = [...prevNav];
            newNav.forEach( el => {
                el.name === target.innerHTML
                    ? el.isShown = true
                    : el.isShown = false
            });
            // console.log( newNav );
            return newNav;
        });
    };
    
    return (
        <div className="App">
            <Header 
                navigation={navigationMenu}
                changeNavigation={changeNavigation}
            />
            <Main navigation={navigationMenu} />
        </div>
    );
};
