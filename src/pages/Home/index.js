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

        <Link className="button"to="/selection">
          <img src={Feira} alt=""></img>
        </Link>
      </div>
    </Container>
  </>;
}

export default Home;