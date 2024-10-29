// Timeline.js
import React from 'react';
import '../Styles/Timeline.css';

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-year">12/2020</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src="image1.jpg" alt="Evento 1" />
          </div>
          <div className="timeline-text">
            <h3>Me formei no Ensino Médio no Colégio Santo Inácio</h3>
            <p>Entrei no Santo Inácio em 2008, onde estudei durante 13 anos. 
                Ao longo desse tempo, tive um ótimo desempenho escolar, fiz viagens com a 
                escola e trabalhos voluntários.
                 </p>
          </div>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-year">01/2021</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src="image2.jpg" alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>Entrei para a PUC-Rio</h3>
            <p>Em 2021 fui aprovado na PUC-Rio no curso de Ciência da Computação,
            aonde completei o primeiro período da faculdade.</p>
          </div>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-year">07/2021</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src="image2.jpg" alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>Entrei para o CEFET/RJ</h3>
            <p>Mesmo fazendo curso na PUC, fui aprovado para o CEFET, 
            então optei por trancar minha matrícula na PUC e dar início ao curso
            de Ciência da Computação no CEFET/RJ.</p>
          </div>
        </div>
      </div>
      {/* Adicione mais itens conforme necessário */}
    </div>
  );
}

export default Timeline;
