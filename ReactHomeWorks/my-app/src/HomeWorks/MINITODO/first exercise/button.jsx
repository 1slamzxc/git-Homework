import React from 'react';

const Button = (props) => {

    const {
        style
    } = props

    return (
        <div>
            <button style={{background:style.background, borderRadius:style.borderRadius, color:style.color}}>БТН</button>
        </div>
    );
};

export default Button;