import React, { useContext, useState } from 'react';
import { BuilderContext } from '../context/BuilderContext';

const ElementProperties = () => {
  const { elements, updateElement } = useContext(BuilderContext);
  const [selectedId, setSelectedId] = useState(null);
  
  const selectedElement = elements.find((el) => el.id === selectedId);

  return (
    <div style={{ width: '25%', padding: '10px', background: '#ddd' }}>
      <h3>Element Properties</h3>
      <select onChange={(e) => setSelectedId(Number(e.target.value))}>
        <option value="">Select Element</option>
        {elements.map((el) => (
          <option key={el.id} value={el.id}>
            {el.type} #{el.id}
          </option>
        ))}
      </select>

      {selectedElement && (
        <>
          <input
            type="text"
            value={selectedElement.content}
            onChange={(e) => updateElement(selectedId, { content: e.target.value })}
          />
        </>
      )}
    </div>
  );
};

export default ElementProperties;
