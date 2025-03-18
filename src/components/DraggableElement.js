import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableElement = ({ element }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: element,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        position: 'absolute',
        left: element.left,
        top: element.top,
        padding: '8px',
        border: '1px solid #ccc',
        background: '#fff',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {element.content}
    </div>
  );
};

export default DraggableElement;
