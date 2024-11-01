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
import { useTranslation } from 'react-i18next';


function Timeline() {
  const { t } = useTranslation();

  return (
    <div className="timeline">

      <div className="timeline-item">
        <div className="timeline-year">12/2019</div>
        <div className="timeline-content">
          <div className="timeline-image">
            <img src={logoCUL} alt="Evento 1" />
          </div>
          <div className="timeline-text">
            <h3>{t('about1Title')}</h3>
            <p>{t('about1')}</p>
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
            <h3>{t('about2Title')}</h3>
            <p>{t('about2')}</p>
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
            <h3>{t('about3Title')}</h3>
            <p>{t('about3')}
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
            <h3>{t('about4Title')}</h3>
            <p>{t('about4')}</p>
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
            <h3>{t('about5Title')}</h3>
            <p>{t('about5')}</p>
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
            <h3>{t('about6Title')}</h3>
            <p>{t('about6')}</p>
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
          <h3>{t('about7Title')}</h3>
            <p>{t('about7')}</p>
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
          <h3>{t('about8Title')}</h3>
            <p>{t('about8')}</p>
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
            <h3>{t('about9Title')}</h3>
            <p>{t('about9')}</p>
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
            <h3>{t('about10Title')}</h3>
            <p>{t('about10')}</p>
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
            <h3>{t('about11Title')}</h3>
            <p>{t('about11')}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Timeline;
