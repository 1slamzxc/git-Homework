import React from 'react';

const Event = (props) => {

    const {
        btnTitle,
        placeholder,
        onClick,
        onChange,
        onBlur,
        onFocus,
        style,
        mouseClick,
        MouseEnter,
        mouseLeave,
        KeyDown 
    } = props

    return (
        <div>
            <div>

                <button onClick={onClick} onMouseEnter={MouseEnter}> {btnTitle} </button>
                <input type="text" style={style} onFocus={onFocus} onMouseLeave={mouseLeave} onBlur={onBlur} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} onMouseOver={mouseClick}/>
                <input type="text" onKeyDown={KeyDown}/>
            </div>
        </div>
    );
};

export default Event;