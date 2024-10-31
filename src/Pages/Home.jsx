import React from 'react';
import '../Styles/Home.css';

function Home() {
  return (
    
    <div className="home-container">  
      <h1 className="welcome-text">Bem-vindo(a)!</h1>
      <div className="home-content">
        <div className="home-about">
          <p>Eu me chamo Luiz Henrique Mendes e tenho 21 anos. Atualmente estudo 
          Ciência da Computação no CEFET-RJ e estou em busca de um estágio!</p>
      
          <p>Desde pequeno gostei de jogar video-game, por isso um dia decidi 
          tentar criar meu próprio jogo. Foi então que descobri a programação. 
          Comecei a pesquisar mais sobre e encontrei o curso de Ciência da 
          Computação, nele descobri mais e mais sobre o mundo da programação, 
          e como ela está presente em quase tudo.</p>

          <p>Hoje em dia sou Estagiário de T.I. na empresa Centauro Engenharia 
          há 1 ano, mas estou em busca de um novo emprego para evoluir minhas 
          habilidades em outras partes desta profissão.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
