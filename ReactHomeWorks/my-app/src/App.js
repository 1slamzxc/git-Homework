import React from 'react';
import Input from './HomeWorks/MINITODO/first exercise/input';
import Button from './HomeWorks/MINITODO/first exercise/button';
import Array from './HomeWorks/MINITODO/second exercise';
import State from './HomeWorks/hook/useStateEffect/State';
import ItemList from './HomeWorks/hook/useCallbackMemo';
import TextInput from './HomeWorks/hook/useRefContext/textinput';
import Header from './HomeWorks/hook/useRefContext/header';
import Content from './HomeWorks/hook/useRefContext/content';
import ChangeColor from './HomeWorks/hook/useRefContext/parent';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './HomeWorks/Task/Home';
import About from './HomeWorks/Task/About';
import Contact from './HomeWorks/Task/Contact';




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

      <h1>useRef, useContext</h1>

      <TextInput />

      <ChangeColor>
        <Header />
        <Content />
      </ChangeColor>

      <h1>Task</h1>

      <BrowserRouter>
        <Routes>
          <Route
            element={
              <div>
                <ul>
                  <li>
                    <Link to="/">на главную
                    </Link>
                  </li>
                  <li>
                    <Link to="/About">О нас
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contacts">Контакты
                    </Link>
                  </li>
                </ul>
                <Outlet />
              </div>
            }
          >
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contacts' element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
};

export default App;