import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: url(${props => props.backgroundImageCustom});
  padding: 100px 0px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

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

export const ContactWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-gap: 0;
    padding: 0 10px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }

`;

export const ContactCard = styled.div`
  background: url(${props => props.backgroundImageCustom});
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 500px;
  padding: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactRowForm = styled.div`
  display: flex;
  width: 100%;
`;

export const ContactColForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
`;

export const ContactIcon = styled.img`
  height: 200px;
  margin: 30px;
  /* width: 160px; */
  margin-bottom: 10px;
`;

export const ContactH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: normal;
  color: rgb(39, 53, 73);
  margin: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactLabel = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ContactInput = styled.input`
  padding: 5px;
  height: 40px;
  width: 100%;
  border: none;
  background: #fafafa;
  border: 1px #333 solid;
  border-radius: 4px;
`;

export const ContactTextArea = styled.textarea`
  padding: 5px;
  width: 100%;
  border: none;
  background: #fafafa;
  border: 1px #333 solid;
  border-radius: 4px;
`;

export const ContactP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ContactButton = styled.button`
  margin: 5px; 
  border-radius: 4px;
  background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => big ? '14px 48px' : '12px 30px'};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
  }
`;

export const ContactErrors = styled.span`
  color: red;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: rgb(39, 53, 73);
  font-size: 2.5rem;
  margin: 5px;
`;