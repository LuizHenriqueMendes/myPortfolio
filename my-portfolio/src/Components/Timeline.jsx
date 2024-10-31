import React from 'react';
import '../Styles/Timeline.css';
import logoCSI from '../Images/logo-csi.png';
import logoPUC from '../Images/logo-puc.png';
import logoCEFET from '../Images/logo-cefet.png';
import logoUN from '../Images/logo-unity.png';
import logoEN from '../Images/logo-enactus.png';
import logoCEN from '../Images/logo-centauro.png';
import logoCUL from '../Images/logo-cultura.png';
import logoALI from '../Images/logo-alianca.png';


function Timeline() {
  return (
    <div className="timeline">

      <div className="timeline-item">
        <div className="timeline-year">12/2019</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoCUL} alt="Evento 1" />
          </div>
          <div className="timeline-text">
            <h3>Cultura Inglesa</h3>
            <p>Após fazer Cultura Inglesa desde os 11 anos, finalizei o curso, com alguns exames de Cambridge. </p>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">09/2020</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoUN} alt="Evento 1" />
          </div>
          <div className="timeline-text">
            <h3>Primeiro Curso de programação</h3>
            <p>Decidi experimentar e ver como é a criação e o desenvolvimento de jogos, 
              então conheci a Unity e os básicos da programação, tendo como primeira linguagem C#. </p>
          </div>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-year">12/2020</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoCSI} alt="Evento 1" />
          </div>
          <div className="timeline-text">
            <h3>Formatura de Ensino Médio no Colégio Santo Inácio</h3>
            <p>Entrei no Santo Inácio em 2008, onde estudei durante 13 anos. 
                Ao longo desse tempo, tive um ótimo desempenho escolar, fiz viagens com a 
                escola e trabalhos voluntários.
                 </p>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">03/2021</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoPUC} alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>PUC-Rio</h3>
            <p>Em 2021 fui aprovado na PUC-Rio no curso de Ciência da Computação,
            aonde completei o primeiro período da faculdade.</p>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">07/2021</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoCEFET} alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>CEFET/RJ</h3>
            <p>Mesmo fazendo curso na PUC, fui aprovado para o CEFET, 
            então optei por trancar minha matrícula na PUC e dar início ao curso
            de Ciência da Computação no CEFET/RJ.</p>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">02/2023</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoCEFET} alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>Atividade de Pesquisa</h3>
            <p>Ajudei uma professora na tarefa de traduzir aproximadamente 1500 frases da Língua Portuguesa para Língua Inglesa, 
              sem a utilização de softwares de tradução, utilizando apenas meus conhecimentos em ambas as línguas.</p>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">04/2023</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoEN} alt="Evento 2" />
          </div>
          <div className="timeline-text">
          <h3>Enactus CEFET/RJ</h3>
            <p>Escolhi uma extensão do CEFET que teria algo extra-curricular que não fosse exatamente ligado ao meu curso. Fui membro do Departamento Administrativo Financeiro da Enactus
              e representante financeiro do projeto Odoyá por alguns meses. Era responsável por prospectar parceiros e administrar o dinheiro que o projeto tinha para bancar os trabalhos voluntários.</p>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">04/2023</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoALI} alt="Evento 2" />
          </div>
          <div className="timeline-text">
          <h3>Aliança Francesa</h3>
            <p>Com o objetivo de aprender uma língua nova, entrei para o curso da Aliança Francesa.</p>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">09/2023</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoCEN} alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>Centauro Engenharia Telecom</h3>
            <p>Fui contratado como Estagiário de T.I. pela Centauro Engenharia, aonde faço diversas atividades, principalmente como desenvolvedor
              do Portal da empresa, em PHP, HTML, CSS, JavaScript e MySQL. </p>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-year">01/2024</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoEN} alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>Enactus CEFET/RJ</h3>
            <p>Estava me sentindo sobrecarregado com a faculdade, o Estágio novo e a Enactus, então optei por me desligar da Enactus para 
              conseguir me recompor. </p>
          </div>
        </div>
      </div>
   
      <div className="timeline-item">
        <div className="timeline-year">09/2024</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoCEFET} alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>Atividade de Pesquisa</h3>
            <p>Iniciei uma Pesquisa com um professor e uma colega sobre predição de atrasos aéreos. 
              Manipulamos dados e programamos em R para fazer previsão dos mesmos.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Timeline;
