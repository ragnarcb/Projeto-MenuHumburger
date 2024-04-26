import React from 'react';
import Menu from './Components/Menu';
import './App.css';
import logo from'./blizzard-logo-6.png';
import video from'./JQ_Video_03.webm';

function App() {
  return (
    <div className="App">
      
      <header className="cabecalho">
        <section className="cabecalho-itens">
          <Menu/>
          <img src={logo} className="logo_bliz" alt="logo" />
         
          <nav className="cabecalho-menu">
            <a className="itens" href="">JOGOS</a>
            <a className="itens" href="">LOJA</a>
            <a className="itens" href="">NOTÍCIAS</a>
            <a className="itens" href="">ESPORTS</a>
            <a className="itens2" href="">Suporte</a>
            <a className="itens2" href="">Minha conta</a>
          </nav>
        </section>
      </header>
      <main>
        <div className="banner">
          <video className="video" autoPlay loop muted poster="">
            <source src={video}/>
          </video>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;