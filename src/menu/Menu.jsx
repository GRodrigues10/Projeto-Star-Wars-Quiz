import './menu.css';
import './mediaquery-menu.css'
import anakin from '../assets/anakin.webp';
import darthvader from '../assets/vader2.png';
import musica from '../assets/musica.mp3';

function Menu() {
    function inicia() {
        const iniciaJogo = document.querySelector('.container2');
        const dificuldade = document.querySelector('.container3');
        
        iniciaJogo.style.display = 'none';
        dificuldade.style.display = 'flex';
        
        // Criar elemento de áudio
        let audio = document.createElement('audio');
        
        // Configurar o src com o caminho do arquivo de áudio
        audio.src = musica;
        
        // Iniciar a reprodução do áudio
        audio.play();
        audio.volume = 0.5
    }

    return (
        <>
            <div className='container2'>
                <div className='anakin'>
                    <img src={anakin} alt="imagem do anakin" />
                </div>
                <div className='título-menu'>
                    <h1>STAR WARS</h1>
                    <button onClick={inicia}>Iniciar</button>
                </div>
                <div className='vader'>
                    <img src={darthvader} alt="imagem do darth vader" />
                </div>
            </div>
        </>
    );
}

export default Menu;