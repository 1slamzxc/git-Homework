import React from 'react';
import Input from './HomeWorks/MINITODO/first exercise/input';
import Button from './HomeWorks/MINITODO/first exercise/button';
import Array from './HomeWorks/MINITODO/second exercise';
import State from './HomeWorks/hook/useStateEffect/State';
import ItemList from './HomeWorks/hook/useCallbackMemo';



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
        isCompleted: false,
        id: 1
    },
    {
        title: 'Buy milk!',
        isCompleted: true,
        id: 2
    },
    {
        title: 'Drive a Car!',
        isCompleted: false,
        id: 3
    },
]
  
  return (
      
    <div className='app'>

      <h1>Home Work 4 react MINITODO</h1>

      <Input style={inputStyle} placeholder="Введите текст..." title="ВВедите текст" width="300px" height="50px"/>
      
      <Button style={btnStyle}/>

      <Array todos={todos}/>

      <hr></hr>
      <h1>Hooki Home work 5: useState, useEffect</h1>

      <State />

      <h1>useCallback, useMemo</h1>

      <ItemList />
      

    </div>

  );
};

export default App;