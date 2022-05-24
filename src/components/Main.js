import React from 'react';

export default function Main(props) {

    const [showHeadings, setShowHeadings] = React.useState({
        h1: false,
        h2: false,
        h3: false,
    });

    const multiplier = 2500;

    setTimeout(() => {
        setShowHeadings( prevShow => ({
            ...prevShow,
            h1: true
        }));
    }, multiplier*1);

    setTimeout(() => {
        setShowHeadings( prevShow => ({
            ...prevShow,
            h2: true
        }));
    }, multiplier*2);

    setTimeout(() => {
        setShowHeadings( prevShow => ({
            ...prevShow,
            h3: true
        }));
    }, multiplier*3);

    return (
        <div>
            <div className="main--placeholder">
                {/* { showHeadings.h1 && <h1>Website in progress...</h1> }
                { showHeadings.h2 && <h2>please stand by...</h2> }
                { showHeadings.h3 && <h3>coming soon...</h3> } */}
            </div>
        </div>
    );
};