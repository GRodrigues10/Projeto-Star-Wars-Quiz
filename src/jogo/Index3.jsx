import React, { useState } from 'react';
import './styles.css';
import './mediaquery-index.css'
import { perguntasDificeis } from '../data/questions3'; // Importa as perguntas

function Index3() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const handleResposta = (correta) => {
    if (correta) {
      setPontuacao(pontuacao + 1);
    }

    const nextQuestion = perguntaAtual + 1;
    if (nextQuestion < perguntasDificeis.length) {
      setPerguntaAtual(nextQuestion);
    } else {
      setQuizFinalizado(true);
    }
  };

  return (
    <div className="center-container3" id='p3'>
      <div className="quiz-container">
        <div className="container">
          {quizFinalizado ? (
            <div className="resultado-final">
              <p className='part1'><span>Quiz finalizado!</span></p>
              <p className='part2'>Sua pontuação final foi:</p>
              <p className='part3'>{pontuacao}/{perguntasDificeis.length}</p>
            </div>
          ) : (
            <>
              <p>{perguntasDificeis[perguntaAtual].pergunta}</p>
              {perguntasDificeis[perguntaAtual].opcoesRespostas.map(opcao => (
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

export default Index3;