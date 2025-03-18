import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { BuilderContext } from '../context/BuilderContext';
import DraggableElement from './DraggableElement';

const Canvas = () => {
  const { elements, updateElement } = useContext(BuilderContext);

  const [, drop] = useDrop({
    accept: 'element',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        updateElement(item.id, {
          left: Math.round(item.left + delta.x),
          top: Math.round(item.top + delta.y),
        });
      }
    },
  });

  return (
    <div
      ref={drop}
      style={{
        width: '70%',
        height: '500px',
        position: 'relative',
        border: '2px dashed #aaa',
        margin: '20px auto',
      }}
    >
      {elements.map((el) => (
        <DraggableElement key={el.id} element={el} />
      ))}
    </div>
  );
};

export default Canvas;
