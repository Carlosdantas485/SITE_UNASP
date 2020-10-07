import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Arquitetura from '../../Img/Arquitetura.PNG';
import Biologia from '../../Img/Biologia.PNG';
import Ciencia from '../../Img/Ciencia_Computacao.PNG';
import Contabilidade from '../../Img/Contabilidade.PNG';
import Engenharia from '../../Img/Engenharia_Computacao.PNG';
import Educacao_Fisica from '../../Img/Educacao_Fisica.PNG';
import Enfermagem from '../../Img/Enfermagem.PNG';
import Direito from '../../Img/Direito.PNG';
import Fisioterapia from '../../Img/Fisioterapia.PNG';
import Nutricao from '../../Img/Nutricao.PNG';
import Pedagogia from '../../Img/Pedagogia.PNG';
import Psicologia from '../../Img/Psicologia.PNG';

function infosusers() {
    document.title = 'UNASP - SELEÇÃO'
  return <>
    <Container>
     <div className="main">
      <h1>Escolha Um Curso !</h1>
        <div className="OptionsList">

          <Link className="button"to="/infosusers">
              <img src={Arquitetura} alt="Curso Arquitetura"/>
          </Link>
          
          <Link className="button"to="/infosusers">
              <img src={Biologia} alt="Curso Biologia"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Ciencia} alt="Curso Ciencia da Computacao"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Contabilidade} alt="Curso Contabilidade"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Direito} alt="Curso Direito"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Engenharia} alt="Curso Engenharia"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Educacao_Fisica} alt="Curso Educacao Fisica"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Enfermagem} alt="Curso Enfermagem"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Fisioterapia} alt="Curso Fisioterapia"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Nutricao} alt="Curso Nutrição"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Pedagogia} alt="Curso Pedagogia"/>
          </Link>

          <Link className="button"to="/infosusers">
              <img src={Psicologia} alt="Curso Psicologia"/>
          </Link>
             
        </div>
     </div>

    </Container>
  </>;
}

export default infosusers;