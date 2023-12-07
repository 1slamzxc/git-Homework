import React from 'react';

const JSX = () => {

    const arr = [1,2,3,4,5]
    const string = 'Hello '
    const click = 'click'

    return (
        <div>
            <div><h2>ARRAY:    {arr}</h2></div>
            <h1>{string}World</h1>
            <button>{click}</button>
        </div>
    );
};

export default JSX;