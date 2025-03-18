import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BuilderProvider } from './context/BuilderContext';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ElementProperties from './components/ElementProperties';

const App = () => (
  <BuilderProvider>
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Canvas />
        <ElementProperties />
      </div>
    </DndProvider>
  </BuilderProvider>
);

export default App;
