import React, {useState, useEffect, useRef} from 'react';

import {Power3, TweenMax} from 'gsap';

const HookyButton = () => {
    const [counter, setCounter] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setCounter(counter + 1);
        setClicked(!clicked);
    };
    const handleReset = () => setCounter(0);
    const handleDouble = () => setCounter(counter * 2);
    const handleTriple = () => setCounter(counter * 3);

    // need ref for our animation
    let datRef = useRef(null);

    console.log(datRef)

    const demStyles = {'width': '40px', 'height': '40px', 'background': 'red', 'opacity': '0'};

    // componentDidMount() componentDidUpdate() componentWillUnmount() combined
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${counter} times`;
    });

    useEffect(() => {
        console.log(datRef);
        TweenMax.to(datRef, 0.8, {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut
        }
    )
    });

    //TweenMax is a GSAP plugin

    // datRef.current =

    /*
    What are side effects?

    "Data fetching, setting up a subscription, and
    manually changing the DOM in React components
    are all examples of side effects"
     */

    let stateOfClicked;

    clicked ? stateOfClicked = 'Yes' : stateOfClicked = 'No';

    return (
        <div>
            <div style={demStyles} ref={el => {
                datRef = el
            }}></div>
            <h1>Number of clicks: {counter}</h1>
            <h2>Evenly clicked: {stateOfClicked}</h2>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleTriple}>Triple</button>
        </div>
    )
}

export default HookyButton;
