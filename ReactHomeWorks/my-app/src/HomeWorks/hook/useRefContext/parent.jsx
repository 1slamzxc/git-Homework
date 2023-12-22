import React, { createContext, useState } from 'react';

export const Context = createContext();

const ChangeColor = ({ children }) => {
  const [color, setColor] = useState('light');

  const colorFunction = () => {
    setColor((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Context.Provider value={{ color, colorFunction }}>
      {children}
    </Context.Provider>
  );
}

export default ChangeColor;