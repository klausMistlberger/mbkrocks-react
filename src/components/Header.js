import React from 'react';

export default function Header(props) {
    // console.log(props)

    const navItems = props.nav.map( el => {
        return (
            <div key={el} className="nav--item">{el}</div>
        )
    })

    return(
        <nav>
            <a href="/" className="logo">MBK</a>
            {navItems}
            <div className="burger-menu">
                <div className="burger-menu--line"></div>
                <div className="burger-menu--line"></div>
                <div className="burger-menu--line"></div>
            </div>
        </nav>
    );
};