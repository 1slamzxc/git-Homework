import React, { useCallback, useMemo } from 'react';

const ItemList = () => {

  const evenNumbers = useMemo(() => {
    const array = [1,2,3,4,5,6,7,9,10]
    return array.filter(item => item % 2 === 0)
  }, [])

  const handleClick = useCallback((index) => {
    console.log(index);
  }, [])

  return (
    <div>
      {evenNumbers.map((elem, idx) => (
        <li key={idx} onClick={() => handleClick(idx)}>
          {elem}
        </li>
      ))}
    </div>
  );
};

export default ItemList;