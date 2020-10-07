import React from 'react';
import { Container } from './styles';
import Inscricao from '../../Img/BTN_Inscricao.PNG';
import Coorden from '../../Img/Whats_Coordenador.PNG';
import Instagram from '../../Img/instagram.PNG';


function InfosCoordenation() {

    document.title = 'UNASP - INSCRIÇÃO'
  return <>
    <Container>
      <div className="main">
        <div className="div_box">
            <img className="div_image" alt="avatar"src="https://4.bp.blogspot.com/-Dyc-9MvdjVA/TaTcZX5-OjI/AAAAAAAABsE/z2ehlsMMaHY/s1600/anonimoC.jpg"></img>
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

                
                    <a href="https://vestibular.unasp.br/">
                        <img src={Coorden} alt=""></img>
                    </a>

                    <a href="https://vestibular.unasp.br/">
                        <img src={Inscricao} alt=""></img>
                    </a>

                    <a href="https://vestibular.unasp.br/">
                        <img src={Instagram} alt=""></img>
                    </a>
        
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