import React from 'react';

const app = () => {

    const contacts = [
        { id: 1, name: 'Asan', email: 'Asan228@mail.ru' },
        { id: 2, name: 'Uson', email: 'Uson228@mail.ru' }
    ]

    return (
        <div>
            <h1 className='exercise'>HOME WORK 1</h1>

            <JSX />
            <Props />

            <h1 className='exercise'>HOME WORK 2</h1>

            <Event 
                btnTitle = "CLICK!!!"
                onClick = {() => console.log("BTN CLICK")}
                onFocus = {() => console.log("INPUT FOCUS")}
                mouseLeave = {() => console.log("Mouse LEFT")}
                onBlur = {() => console.log("BLUR")} 
                onChange = {(value) => console.log(value)}
                placeholder = "Write Something Here ..."
                style={{ border: 'none', padding: '10px', marginLeft: "10px"}}
            />
            <Event 
                btnTitle = "КЛИК!!!"
                onClick = {() => console.log("BTN CLICK")}
                onFocus = {() => console.log("INPUT FOCUS")}
                mouseLeave = {() => console.log("Mouse LEFT")}
                onBlur = {() => console.log("BLUR")} 
                onChange = {(value) => console.log(value)}
                placeholder = "Напишите..."
                style={{ border: 'none', padding: '10px', marginLeft: "10px", background: 'pink', color: '#fff', borderRadius: '10px', width: "200px"}}
                mouseOver={() => console.log("Этот блок")}
                handleMouseEnter={() => console.log("Block BTN")}
                KeyDown={(event) => console.log(event.key)}
            />
            <ContactList contacts={contacts}/>

            <h1 className='exercise'>HOME WORK 3</h1>

            <ParentComponent>
            <ChildComponent1/>
            <ChildComponent2/>
            </ParentComponent>
            <div>
                <h1>2 задание ПОртал</h1>
                <div id="portal-root"></div>
            <PortalComponent />
            </div>
        </div>
    );
};

export default app;