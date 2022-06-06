import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Photoslider from './components/Photoslider';
import photolist from './components/photolist';

export default function App() {

    const navMenu = [
        {
            name: "Hoi", 
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

    const [photoIndex, setPhotoIndex] = useState( 0 );
    
    const [slideshow, setSlideshow] = useState(false);
    const openSlideshow = event => {
        const target = event.target;
        // console.log( target );
        setPhotoIndex( target.getAttribute( 'data-index' ) );
        setSlideshow( prevVal => !prevVal );
    };
    
    return (
        <div className="App">
            <Header 
                navigation={navigationMenu}
                changeNavigation={changeNavigation}
            />
            <Main 
                navigation={navigationMenu}
                slideshow={slideshow}
                openSlideshow={openSlideshow}
            />

            { slideshow && <Photoslider 
                    photos={photolist}
                    photoIndex={photoIndex}
                    setPhotoIndex={setPhotoIndex}
                    setSlideshow={setSlideshow}
                /> }
        </div>
    );
};
