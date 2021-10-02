import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  background: url(${props => props.backgroundImageCustom});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 985px) {
    padding: 20px 0;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ProjectsWrapper = styled.div`
  margin: 0 auto 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1220px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin: 64px 0;
  text-shadow: 1px 1px 2px  #000;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsCard = styled.div`
  border: 2px solid #010606;
  border-radius: 3px;
  margin: 10px;
  height: 230px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ProjectsIcon = styled.img`
  height: 250px;
  width: 100%;
  border-radius: 4px;
`;