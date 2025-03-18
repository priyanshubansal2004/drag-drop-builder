import React, { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';

const Sidebar = () => {
  const { addElement } = useContext(BuilderContext);

  return (
    <div style={{ width: '25%', padding: '10px', background: '#f4f4f4' }}>
      <h3>Add Elements</h3>
      <button onClick={() => addElement('text')}>Add Text</button>
      <button onClick={() => addElement('button')}>Add Button</button>
    </div>
  );
};

export default Sidebar;
