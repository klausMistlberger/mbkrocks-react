import React from 'react';

export default function Photo(props) {

    const photos = props.photos.map( (element, index) => {
        const style = {
            backgroundImage: `url(./photos/${element})`
        };

        return (
            <div className="photo-container" key={element}>
                <div 
                    data-index={index}
                    data-image={element}
                    className="photo" 
                    style={style} 
                    onClick={ (event) => {props.openSlideshow(event)} }
                >    
                </div>
            </div>
        );
    });

    return (
        <div className="photos">
            { photos }
        </div>
    );
};