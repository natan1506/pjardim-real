import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-5.svg';

import {
  DepoimentsContainer,
  DepoimentsH1,
  DepoimentsWrapper,
  DepoimentsCard,
  DepoimentsIcon,
  DepoimentsH2,
  DepoimentsP
} from './DeppoimentsElements';

const Depoiments = () => {
  return (
    <DepoimentsContainer id="Depoiments">
      <DepoimentsH1>Depoimentos</DepoimentsH1>
      <DepoimentsWrapper>
        <DepoimentsCard>
          <DepoimentsP>
            We help reduce your fess and increase your overall revenue.
          </DepoimentsP>
          <DepoimentsH2>Reduce expenses</DepoimentsH2>
        </DepoimentsCard>
        <DepoimentsCard>
          <DepoimentsIcon src={Icon2} />
          <DepoimentsH2>Virtual Offices</DepoimentsH2>
          <DepoimentsP>
            You can access our platform online anywhere in the world.
          </DepoimentsP>
        </DepoimentsCard>
        <DepoimentsCard>
          <DepoimentsIcon src={Icon3} />
          <DepoimentsH2>Premium Benefits</DepoimentsH2>
          <DepoimentsP>
            Unlock our special membership card that returns 5% cash back.
          </DepoimentsP>
        </DepoimentsCard>
      </DepoimentsWrapper>
    </DepoimentsContainer>
  )
}

export default Depoiments
