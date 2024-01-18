import React, { createContext, useContext, useState } from 'react';

// Tạo một Context
const MyContext = createContext();

// Tạo một Context Provider
const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('Initial Value');

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <MyContext.Provider value={{ value, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Sử dụng Hook useContext để sử dụng giá trị từ Context
const MyComponent = () => {
  const { value, updateValue } = useContext(MyContext);

  return (
    <div>
      <p>Current Value: {value}</p>
      <button onClick={() => updateValue('New Value')}>Update Value</button>
    </div>
  );
};

// Sử dụng Context Provider để bao bọc các components cần sử dụng giá trị từ Context
const Context = () => {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
};

export default Context;
