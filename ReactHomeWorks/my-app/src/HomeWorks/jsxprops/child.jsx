import React from 'react';

const Child= (props) => {
    return (
        <div>
            {props.name}
            {props.num}
        </div>
    );
};

export default Child;