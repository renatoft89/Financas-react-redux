import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Content from './components/Content';

function App() {
  return (
    // Provider para prover as informaĂ§oes somente no componente que vai utilizar. <Home />
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

export default App;
