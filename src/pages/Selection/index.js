import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function infosusers() {

  return <>
    <Container>
     <div className="main">
      <h1>Escolha Um Curso !</h1>
        <div className="OptionsList">
          <Link className="button"to="/infosusers">
            <button>
              <p>
                Publicidade E Propaganda
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Educação Física
              </p>
            </button>
          </Link>
          
          <Link className="button"to="/infosusers">
            <button>
              <p>
                Direito
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
            <p>
              Administração
            </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Ciencias Biologicas
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Pedagogia
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Ciencia Da Computação
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Engenharia Da Computação
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Nutrição
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Agronomia
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Engenharia
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                História
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Contabilidade
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Fisiotarepia
              </p>
            </button>
          </Link>

          <Link className="button"to="/infosusers">
            <button>
              <p>
                Enfermagem
              </p>
            </button>
          </Link>
        </div>

     </div>
     

    </Container>
  </>;
}

export default infosusers;