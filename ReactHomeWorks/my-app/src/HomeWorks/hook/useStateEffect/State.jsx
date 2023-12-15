import React, { useEffect, useState } from 'react';

const State = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("Usee Effect");
    }, [counter])

    return (
        <div>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(prev => prev - 1)}>-</button>
        </div>
    );
};

export default State;