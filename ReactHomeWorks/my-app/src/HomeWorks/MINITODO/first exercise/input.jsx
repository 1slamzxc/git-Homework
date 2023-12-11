import React from 'react';

const Input = (props) => {

const {
    style,
    title,
    placeholder,
    width,
    height
} = props

    return (
        <div>
            <input type="text" style={{background: style.background,border: style.border,color: style.color,outline: style.outline,
            borderRadius: style.borderRadius, width:width, height:height}} title={title} placeholder={placeholder}/>
        </div>
    );
};

export default Input;