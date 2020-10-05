import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function InfosUsers() {

   
  return <>
    <Container>
      <div className="main">
        <h1>Preencha os campos !</h1>
        <div className="inputs">
            
            <div className="double_input">
                <input className="input_name" placeholder="Nome"></input>
                <input className="input_phone" placeholder="Telefone"></input>
            </div>

            <input placeholder="E-mail"></input>

          <div className="div_button">

            <div className="div_selection">
              <p>Curso: </p>
              <p>Ciencia Da Computação</p>
            </div>
            <Link className="button"to="/infosCoordenation">
              <button>Próximo</button>
            </Link>
          </div>

        </div>
      </div>
    
    </Container>
  </>;
}

export default InfosUsers;