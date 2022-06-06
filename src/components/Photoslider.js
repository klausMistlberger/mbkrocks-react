import React from 'react';

export default function Photoslider(props) {

    const {photos, photoIndex, setPhotoIndex, setSlideshow} = props;

    const changePicture = event => {
        event.stopPropagation();
        const target = event.target;
        const nav = target.getAttribute( 'data-nav' );

        nav === 'forward'
            ? setPhotoIndex( prevIndex => {
                let newIndex = prevIndex;
                prevIndex < photos.length-1
                    ? newIndex++
                    : newIndex = 0
                ;
                return newIndex;
            })
            : setPhotoIndex( prevIndex => {
                let newIndex = prevIndex;
                prevIndex > 0
                    ? newIndex--
                    : newIndex = photos.length-1
                ;
                return newIndex;
            })
        ;
    };

    const closeSlideshow = event => {
        setSlideshow( prevVal => !prevVal );
    };

    return (
        <div 
            className="slideshow"
            onClick={closeSlideshow}
        >
            <div className="photoAndNav">
                <div
                    className="photoBack photoNav"
                    data-nav="back"
                    onClick={event => {changePicture(event)}}
                >
                </div>
                <img
                    src={`./photos/${photos[photoIndex]}`}
                    alt=""
                    className="activePhoto"
                />
                <div
                    className="photoForward photoNav"
                    data-nav="forward"
                    onClick={event => {changePicture(event)}}
                >
                </div>
            </div>
            <div>click to close</div>
        </div>
    );
};