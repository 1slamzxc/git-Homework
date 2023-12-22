import React, { useRef, useState } from 'react';

const TextInput = () => {
  const inputRef = useRef(null)
  const [text, setText] = useState("")

  const handleInputChange = () => {
    setText(inputRef.current.value)
  }

  const deleteBTN = () => {
    inputRef.current.value = ""
    setText("")
  }

  return (
    <div>
        <input type="text"  ref={inputRef} onChange={handleInputChange}/>
        <button onClick={deleteBTN}>Очистить</button>
        <label>{text}</label>
    </div>
  );
};

export default TextInput;