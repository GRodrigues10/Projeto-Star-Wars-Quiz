import React, { useState } from 'react';
import './styles.css';
import './mediaquery-index.css'
import { perguntasMedias } from '../data/questions2'; // Importa as perguntas de dificuldade média

function Index2() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const handleResposta = (correta) => {
    if (correta) {
      setPontuacao(pontuacao + 1);
    }

    const nextQuestion = perguntaAtual + 1;
    if (nextQuestion < perguntasMedias.length) {
      setPerguntaAtual(nextQuestion);
    } else {
      setQuizFinalizado(true);
    }
  };

  const reiniciar = () =>{
    window.location.reload()
  }

  return (
    <div className="center-container2">
      <div className="quiz-container" id="part2">
        <div className="container">
          {quizFinalizado ? (
            <div className="resultado-final">
              <p className='part1'><span>Quiz finalizado!</span></p>
              <p className='part2'>Sua pontuação final foi:</p>
              <p className='part3'>{pontuacao}/{perguntasMedias.length}</p>
              <button className='reiniciar' onClick={reiniciar}>Reiniciar Quiz</button>
            </div>
          ) : (
            <>
              <p>{perguntasMedias[perguntaAtual].pergunta}</p>
              {perguntasMedias[perguntaAtual].opcoesRespostas.map(opcao => (
                <div className="content" key={opcao.resposta} onClick={() => handleResposta(opcao.correta)}>
                  <span>{opcao.alternativa} - {opcao.resposta}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index2;