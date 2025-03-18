import React, { createContext, useState } from 'react';

export const BuilderContext = createContext();

export const BuilderProvider = ({ children }) => {
  const [elements, setElements] = useState([]);

  const addElement = (type) => {
    const newElement = {
      id: elements.length + 1,
      type,
      content: type === 'text' ? 'Sample Text' : 'Button',
      left: 50,
      top: 50,
    };
    setElements([...elements, newElement]);
  };

  const updateElement = (id, newProps) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...newProps } : el))
    );
  };

  return (
    <BuilderContext.Provider value={{ elements, setElements, addElement, updateElement }}>
      {children}
    </BuilderContext.Provider>
  );
};
