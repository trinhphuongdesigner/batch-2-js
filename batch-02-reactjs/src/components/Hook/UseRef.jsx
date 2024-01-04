import React, { useRef, useState } from 'react';
import Button from '../buttonGroup/button';

const UseRef = () => {
  const inputRef = useRef(null); // Khởi tạo một tham chiếu useRef với giá trị ban đầu là null
  // const [input, setInput] = useState('');

  const focusInput = () => {
    // Sử dụng tham chiếu để focus vào input
    inputRef.current.focus();
  };


  // const changeInput = () => {
  //   console.log('««««« inputRef.current »»»»»', inputRef.current);
  //   inputRef.current.value = 'Trịnh Phương';
  // }

  return (
    <div>
      {/* <Button ref={inputRef}/> forwardRef */}
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Update input</button>
    </div>
  );
};

export default UseRef;
