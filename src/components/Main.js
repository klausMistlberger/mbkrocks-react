import React from 'react';

export default function Main(props) {

    const [showHeadings, setShowHeadings] = React.useState({
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false,
        h7: false,
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

    // setTimeout(() => {
    //     setShowHeadings( prevShow => ({
    //         ...prevShow,
    //         h4: true
    //     }));
    // }, multiplier*4);

    // setTimeout(() => {
    //     setShowHeadings( prevShow => ({
    //         ...prevShow,
    //         h5: true
    //     }));
    // }, multiplier*5);

    // setTimeout(() => {
    //     setShowHeadings( prevShow => ({
    //         ...prevShow,
    //         h6: true
    //     }));
    // }, multiplier*8);

    // setTimeout(() => {
    //     setShowHeadings( prevShow => ({
    //         ...prevShow,
    //         h7: true
    //     }));
    // }, multiplier*12);

    return (
        <div>
            <div className="main--placeholder">
                { showHeadings.h1 && <h1>Website in progress...</h1> }
                { showHeadings.h2 && <h2>please stand by...</h2> }
                { showHeadings.h3 && <h3>coming soon...</h3> }
                {/* { showHeadings.h4 && <h4>rest asured...</h4> } */}
                {/* { showHeadings.h5 && <h5>still waiting...???</h5> }
                { showHeadings.h6 && <h6>please leave...</h6> }
                { showHeadings.h7 && <h1>now</h1> } */}
            </div>
        </div>
    );
};