import React from 'react';
import mathFunctions from './HomeWorks/math';
import Person from './HomeWorks/person';

const App = () => {
  console.log("Add:", mathFunctions.add(5, 3));
  console.log("Substract:", mathFunctions.subtract(8, 3));
  console.log(Person);

  return (
    <div>
      <h1>тайпскрипт дз</h1>
    </div>
  );
};

export default App;
