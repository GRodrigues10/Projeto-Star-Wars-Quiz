import React, { useState } from 'react';
import './styles.css';
import './mediaquery-index.css'
import { perguntasFaceis } from '../data/questions'; // Importa as perguntas

function Index() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const handleResposta = (correta) => {
    if (correta) {
      setPontuacao(pontuacao + 1);
    }

    const nextQuestion = perguntaAtual + 1;
    if (nextQuestion < perguntasFaceis.length) {
      setPerguntaAtual(nextQuestion);
    } else {
      setQuizFinalizado(true);
    }
  };

  return (
    <div className="center-container" id='part2'>
      <div className="quiz-container">
        <div className="container">
          {quizFinalizado ? (
            <div className="resultado-final">
              <p className='part1'><span>Quiz finalizado!</span></p>
              <p className='part2'>Sua pontuação final foi:</p>
              <p className='part3'>{pontuacao}/{perguntasFaceis.length}</p>
            </div>
          ) : (
            <>
              <p>{perguntasFaceis[perguntaAtual].pergunta}</p>
              {perguntasFaceis[perguntaAtual].opcoesRespostas.map(opcao => (
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

export default Index;