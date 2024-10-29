// Timeline.js
import React from 'react';
import '../Styles/Timeline.css';

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-year">2020</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src="image1.jpg" alt="Evento 1" />
          </div>
          <div className="timeline-text">
            <h3>Me formei no Ensino Médio no Colégio Santo Inácio</h3>
            <p>Descrição do evento 1 que aconteceu em 2020.</p>
          </div>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-year">2021</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src="image2.jpg" alt="Evento 2" />
          </div>
          <div className="timeline-text">
            <h3>Título do Evento 2</h3>
            <p>Descrição do evento 2 que aconteceu em 2021.</p>
          </div>
        </div>
      </div>

      {/* Adicione mais itens conforme necessário */}
    </div>
  );
}

export default Timeline;
