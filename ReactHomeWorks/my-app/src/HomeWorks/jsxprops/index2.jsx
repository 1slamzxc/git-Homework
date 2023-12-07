import React from 'react';
import Child from './child';
import Child2 from './child2';

const Props = () => {
    const obj = {
        name: "Islam",
        city: "Bishkek"
    }
    return (
        <div>
            {obj.name + " " + obj.city}
            <Child name="Child " num=" 1"/>
            <Child2 name="Child " number="2"/>
        </div>
    );
};

export default Props;