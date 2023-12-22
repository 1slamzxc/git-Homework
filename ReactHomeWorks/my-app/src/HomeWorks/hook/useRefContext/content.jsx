import React, { useContext } from 'react';
import { Context } from './parent';

const Content = () => {
  const { color } = useContext(Context);

  return (
    <div style={{ padding: '1em', color: color === 'light' ? '#eee' : 'black' }}>
      <h2>Контент</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquam magnam </p>
    </div>
  );
}

export default Content;