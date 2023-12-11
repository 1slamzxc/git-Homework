import React from 'react';
import Input from './HomeWorks/MINITODO/first exercise/input';
import Button from './HomeWorks/MINITODO/first exercise/button';
import Array from './HomeWorks/MINITODO/second exercise';


const App = () => {

  const inputStyle = {
    background: "orange",
    border: "none",
    color: "black",
    outline: "none",
    borderRadius: "12px",
  };

  const btnStyle = {
    background: "blue",
    borderRadius: "12px",
    color: "white"
  }

  const todos = [
    {
        title: 'Go to School!',
        isCompleted: false
    },
    {
        title: 'Buy milk!',
        isCompleted: true
    },
    {
        title: 'Drive a Car!',
        isCompleted: false
    },
]
  
  return (
      
    <div className='app'>

      <h1>Home Work 4 react</h1>

      <Input style={inputStyle} placeholder="Введите текст..." title="ВВедите текст" width="300px" height="50px"/>
      
      <Button style={btnStyle}/>

      <Array todos={todos}/>

    </div>

  );
};

export default App;