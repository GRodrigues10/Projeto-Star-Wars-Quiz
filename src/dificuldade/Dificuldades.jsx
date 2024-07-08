import React from 'react';
import './Dificuldade.css';
import './mediaquery-dificuldade.css'
import Index from '../jogo/Index'; // Importa o componente Index para dificuldade fácil
import Index2 from '../jogo/Index2';
import Index3 from '../jogo/Index3';
// Importações desnecessárias removidas

function Dificuldades() {

  const facil = () => {
    const dificuldade = document.querySelector('.container3');
    const facil = document.querySelector('.center-container');
    dificuldade.style.display = 'none';
    facil.style.display = 'flex';
  };


  const media = () =>{
    const dificuldade = document.querySelector('.container3');
    const media = document.querySelector('.center-container2');
    dificuldade.style.display = 'none';
    media.style.display = 'flex';
    
  }

  const dificil = () =>{
    
    const dificuldade = document.querySelector('.container3');
    const dificil = document.querySelector('.center-container3');
    dificuldade.style.display = 'none';
    dificil.style.display = 'flex';
  }


  const audio = () =>{
    
    const dificuldade = document.querySelector('.container3');
    const dificil = document.querySelector('.center-container3');
    dificuldade.style.display = 'none';
    dificil.style.display = 'flex';
  }



  return (
    <>
      
      <div className='container3'>
        <div className='dificuldade'>
          <h1>Dificuldade</h1>
        </div>
        <div className='btns'>
          <button className='círculo' id='facil' onClick={facil}>Fácil</button>
          <button className='círculo' id='media' onClick={media}>Média</button>
          <button className='círculo' id='dificil' onClick={dificil}>Difícil</button>
        </div>
      </div>
{/* 
      <div className='center-container' style={{ display: 'none' }}>
        <Index />
        <Index2></Index2>

      </div> */}
    </>
  );
}

export default Dificuldades;