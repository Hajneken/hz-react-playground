import React, {useState, useEffect} from 'react';

const HookyButton = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter + 1);
    const handleReset = () => setCounter(0);
    const handleDouble = () => setCounter( counter * 2);

    // componentDidMount() componentDidUpdate() componentWillUnmount() combined
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${counter} times`;
    });

    /*
    What are side effects?

    "Data fetching, setting up a subscription, and
    manually changing the DOM in React components
    are all examples of side effects"
     */

    return(
        <div>
            <h1>Number of clicks: {counter}</h1>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDouble}>Double</button>
        </div>
    )
}

export default HookyButton;
