import React, { useState } from 'react';
import "./Menu.css";
import svg from './icons8-cardápio.svg';

function Menu() {
  const [aberto, setAberto] = useState(false);

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  return (
    <div className="dropdown">
      <div className="botao" onClick={toggleMenu}>
        <img src={svg} alt="Menu" />
        
      </div>
     
      {aberto && (
        <div className="dropdown-content">
            <a href="">JOGOS</a>
            <a href="">LOJA</a>
            <a href="">NOTÍCIAS</a>
            <a href="">ESPORTS</a>
            <a  href="">SUPORTE</a>
            <a  href="">MINHA CONTA</a>
        </div>
      )}
    </div>
  );
}

export default Menu;
