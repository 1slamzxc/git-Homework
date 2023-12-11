import React from 'react';

const Array = ({todos}) => { 
  return (
    <div>
      {todos.map((todo) => (
        <div>
            {todo.title}
            <input type="checkbox" defaultChecked={todo.isCompleted} />
        </div>
      ))}
    </div>
  );
};

export default Array;