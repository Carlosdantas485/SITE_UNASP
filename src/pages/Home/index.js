import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Feira from'../../Img/Feira.JPG';

function Home() {
  document.title = 'UNASP - HOME'
  return <>
    <Container>
      <div className="main">
        <h1> Seja Bem-Vindo !</h1>

        <iframe className="iframe" title="iframe"src="https://www.youtube.com/embed/gqOuiGWY7ZQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

       <div className="box_text">
        <h2> Seja bem vindo(a) a nossa Feira de Carreiras virtual!! </h2>
        <p>Por aqui teremos um momento inicial em que você conhecerá profissionais que estudaram aqui no UNASP (só apertar o play), e em seguida muitas atividades e programações que poderão fazer parte do SEU FUTURO em breve!!! </p>
        <p>Divirta-se passeando e conhecendo sobre os cursos de Graduação do UNASP - Campus SP!</p>
        <p>Ah! E no final acontecerá um sorteio com brindes específicos de cada curso! Você não pode perder! Fique conosco e aproveite cada momento especial!</p>
       </div>
        <Link className="button"to="/selection">
          <img src={Feira} alt=""></img>
        </Link>
      </div>
    </Container>
  </>;
}

export default Home;