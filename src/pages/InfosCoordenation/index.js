import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function InfosCoordenation() {

   
  return <>
    <Container>
      <div className="main">
        <div className="div_box">
            <img className="div_image" src="https://4.bp.blogspot.com/-Dyc-9MvdjVA/TaTcZX5-OjI/AAAAAAAABsE/z2ehlsMMaHY/s1600/anonimoC.jpg"></img>
            <div className="div_infos">
                <table border="0">
                    <tr>
                        <td>09:30H palestra 1</td>
                    </tr>
                    <tr>
                        <td>10:00H palestra 2</td>
                    </tr>
                    <tr>
                        <td>10:30H palestra 3</td>
                    </tr>
                </table>

                <button>
                    <p>
                        Conversar com coordenação
                    </p>
                    <p>
                        (11) 98765-4321
                    </p>
                </button>

                <button>
                    <p>
                        Inscrição Do Vestibular
                    </p>
                   
                </button>

                <button>
                    <p>
                        Instagram
                    </p>
                </button>
            </div>
        </div>
        <div className="div_cupom">
            <p>Aproveite O Cupom De Desconto Para O Vestibular</p>
            <div className="div_code">
                <p>COMP21</p>
            </div>
            <p>Valido Até 12/12/2020 12:00</p>
        </div>
      </div>
    
    </Container>
  </>;
}

export default InfosCoordenation;