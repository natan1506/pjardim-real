import React from 'react';
import Aspas from '../../images/aspas.png';
import backgroundDepoiments from '../../images/bg-depoiments.jpeg';

import {
  DepoimentsContainer,
  DepoimentsWrapper,
  DepoimentsCard,
  DepoimentsIcon,
  DepoimentsH2,
  DepoimentsH5,
  DepoimentsP
} from './DepoimentsElements';

const Depoiments = () => {
  return (
    <div id="depoiments">
      <DepoimentsContainer backgroundImageCustom={backgroundDepoiments}>
        <DepoimentsWrapper>
          <DepoimentsCard>
            <DepoimentsP>
              Conheci o Daniel pela internet e todo o contato foi online.Ele foi etremamente dedicado para conseguir o resultado que eu esperava.
              Fiquei meuito satisfeita com tudo.Obrigada
            </DepoimentsP>
            <DepoimentsIcon src={Aspas} />
            <DepoimentsH2>Ilda Machado, SP</DepoimentsH2>
            <DepoimentsH5>Consultoria Online</DepoimentsH5>
          </DepoimentsCard>
          <DepoimentsCard>
            <DepoimentsP>
            Realizei o sonho do Jardim Vertical e com certeza o Daniel foi fundamental neste processo, da visita ao pós venda.
            Está tudo perfeito, como combinado
            </DepoimentsP>
            <DepoimentsIcon src={Aspas} />
            <DepoimentsH2>Carolinna Spazzo, GO</DepoimentsH2>
            <DepoimentsH5>Jardim Vertical</DepoimentsH5>
          </DepoimentsCard>
          <DepoimentsCard>
            <DepoimentsP>
              Daniel nos acompanhou desde o início das obras, sempre preocupado com praticidade, segurança e bem-estar da familia, consagrando uma estética ímpar ao meu jardim.
            </DepoimentsP>
            <DepoimentsIcon src={Aspas} />
            <DepoimentsH2>Carlos Grande, MS</DepoimentsH2>
            <DepoimentsH5>Paisagismo</DepoimentsH5>
          </DepoimentsCard>
        </DepoimentsWrapper>
      </DepoimentsContainer>
    </div>
  )
}

export default Depoiments
