import React, { useContext } from 'react';
import { Context } from './parent';

const Header = () => {
  const { color, colorFunction } = useContext(Context);

  return (
    <header style={{ background: color === 'light' ? '#eee' : 'black', padding: '20px', marginTop: '20px' }}>
      <h1 style={{ color: color === 'light' ? '#333' : '#eee' }}>Поменять бэкграунд</h1>
      <button onClick={colorFunction}>
        Поменять на {color}
      </button>
    </header>
  );
}

export default Header;