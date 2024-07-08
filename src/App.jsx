import React from 'react';
import './App.css';
import Menu from './menu/Menu.jsx';
import Dificuldades from './dificuldade/Dificuldades.jsx';
import Index from './jogo/Index.jsx';
import Index2 from './jogo/Index2.jsx';
import Index3 from './jogo/Index3.jsx';


function App() {
  return (
    <>
      <Menu />
      <Index></Index>
      <Index2></Index2>
      <Index3></Index3>
      <Dificuldades />
    </>
  );
}

export default App;