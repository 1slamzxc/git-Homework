import React from 'react';
import Event from './HomeWorks/Event/Event';
import ContactList from './HomeWorks/Event/contactList';

const App = () => {

  const contacts = [
    { id: 1, name: 'Asan', email: 'Asan228@mail.ru' },
    { id: 2, name: 'Uson', email: 'Uson228@mail.ru' }
]
  
  return (
      
    <div className='app'>

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

    </div>

  );
};

export default App;