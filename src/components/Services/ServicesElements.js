import styled from 'styled-components';

export const ServicesContainer = styled.div`
  background: url(${props => props.backgroundImageCustom});
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 985px) {
    padding: 80px 20px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  background: url(${props => props.backgroundImageCustom});
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 500px;
  padding: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ServicesIcon = styled.img`
  height: 130px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  color: rgb(39, 53, 73);
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  color: rgb(39, 53, 73);
  font-size: 0.9rem;
  text-align: center;
`;