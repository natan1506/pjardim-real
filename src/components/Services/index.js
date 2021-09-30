import React from 'react';
import VerticalGarden from '../../images/vertical-garden.png';
import Vase from '../../images/vase.png';
import Landscaping from '../../images/landscaping.png';
import Consult from '../../images/consult.png';
import backgroundAbout from '../../images/bg-about.jpeg';
import backgroundService from '../../images/bg-service.png';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <div id="services">
      <ServicesContainer backgroundImageCustom={backgroundAbout}>
        <ServicesH1>Serviços</ServicesH1>
        <ServicesWrapper>
          <ServicesCard backgroundImageCustom={backgroundService}>
            <ServicesIcon src={VerticalGarden} />
            <ServicesH2>JARDIM VERTICAL</ServicesH2>
            <ServicesP>
              Projetos personalizados desenvolvidos de forma única, mantendo exclusividade e sofisticação, atendendo áreas externas e internas. 
              Nosso portfólio conta com modelos Naturais, Preservados (folhas desidratadas) e Permanentes (artificial), de acordo com as especifícações de 
              cada ambiente, preservando o gosto e bem-estar do cliente.
            </ServicesP>
          </ServicesCard>
          <ServicesCard backgroundImageCustom={backgroundService}>
            <ServicesIcon src={Vase} />
            <ServicesH2>VASOS</ServicesH2>
            <ServicesP>
              Contamos com portfólio de vasos e peças vietnamitas com entrega para todo território brasileiro;
              <br/>
              Linha de vasos esmaltados premium;
              <br/>
              Linha de vasos de cerâmica e cimento com pintura automotiva premium.
              Contate-nos e consulte disponibilidade. Temos a melhor opção para seu ambiente.
            </ServicesP>
          </ServicesCard>
          <ServicesCard backgroundImageCustom={backgroundService}>
            <ServicesIcon src={Landscaping} />
            <ServicesH2>PAISAGISMO</ServicesH2>
            <ServicesP>
              Projetos autorais e execução de áreas residenciais e corporativas.
              <br/>
              Repaginar um espaço existente ou readequar um novo layout, levando em consideração fatores climáticos, solo, iluminação;
              <br/>
              escolha das espécies, prezando pela harmonia e longevidade do jardim.
            </ServicesP>
          </ServicesCard>
          <ServicesCard backgroundImageCustom={backgroundService}>
            <ServicesIcon src={Consult} />
            <ServicesH2>CONSULTORIA ONLINE</ServicesH2>
            <ServicesP>
              Perfeito para quem tem um orçamento reduzido e/ou prazo curto. Conversamos sobre sua necessidade e você envia fotos e medidas do seu espaço. 
              Depois alinhamos o estilo paisagístico ideal para a proposta, contando com perspectivas e especificações, e todas as informações necessárias para 
              execução do projeto. 
              <br/>
              Solo, drenagem, sistema de irrigação, controle de pragas, adubação, fertilizantes, iluminação e escolha de plantas
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </div>
  )
}

export default Services
