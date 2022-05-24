import React, { useEffect, useState } from 'react';

export default function Header(props) {
    // console.log(props)

    const [width, setWidth] = useState( window.innerWidth );
    
    window.addEventListener( 'resize', () => {
        setWidth( window.innerWidth );
    });

    // let navItemContainer;

    useEffect(() => {
        const navItemContainer = document.querySelector( '.nav--item-container' );
        // console.log( navItemContainer );
        window.innerWidth < 576 ? 
            navItemContainer.setAttribute( 'portrait', 'true' ) 
          : navItemContainer.setAttribute( 'portrait', 'false' )
        ;
    },[width])

    const navItems = props.nav.map( el => {
        return (
            <div key={el} className="nav--item">{el}</div>
        )
    });

    const [burgerMenu, setBurgerMenu] = useState(false);
    const openBurgerMenu = () => {
        setBurgerMenu( prev => !prev );
    };

    useEffect(() => {
        const navItemContainer = document.querySelector( '.nav--item-container' );
        const isActive = !navItemContainer.getAttribute( 'active' );
        navItemContainer.setAttribute( 'active', `${burgerMenu}` );
    },[burgerMenu]);

    return(
        <nav>
            <a href="/" className="logo">MBK</a>
            <div className="nav--item-container" portrait="" active="false">{navItems}</div>
            <div className="burger-menu" onClick={openBurgerMenu}>
                <div className="burger-menu--line"></div>
                <div className="burger-menu--line"></div>
                <div className="burger-menu--line"></div>
            </div>
        </nav>
    );
};