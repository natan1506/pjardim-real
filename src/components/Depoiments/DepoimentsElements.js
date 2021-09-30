import styled from 'styled-components';

export const DepoimentsContainer = styled.div`
  background: url(${props => props.backgroundImageCustom});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 985px) {
    padding: 80px 20px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const DepoimentsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
  }
`;

export const DepoimentsCard = styled.div`
  width: auto;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const DepoimentsIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;

export const DepoimentsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const DepoimentsH2 = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  margin-Top: 10px;
  color: rgb(112 ,130, 219);
  white-space: nowrap;
`;

export const DepoimentsH5 = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  margin-Top: 10px;
  color: rgb(149, 165, 175);
`;


export const DepoimentsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: rgb(149, 165, 175);
`;