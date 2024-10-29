import React from 'react';
import Header from '../Components/Header';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <p>Bem-vindo(a) à minha página inicial!</p>
      </div>
    </div>
  );
}

export default Home;
