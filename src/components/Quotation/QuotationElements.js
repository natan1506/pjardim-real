import styled from 'styled-components';

export const QuotationContainer = styled.div`
  background: url(${props => props.backgroundImageCustom});
  /* border-top: 1px solid #010606; */
  /* height: 800px; */
  padding: 100px 0px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #010606; */

  @media screen and (max-width: 985px) {
    /* height: 1200px; */
    padding: 80px 20px;

  }

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const QuotationWrapper = styled.div`
  /* max-width: 1000px; */
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
`;

export const QuotationCard = styled.div`
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
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const QuotationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const QuotationRowForm = styled.div`
  display: flex;
  width: 100%;
`;

export const QuotationColForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
`;

export const QuotationIcon = styled.img`
  height: 130px;
  /* width: 160px; */
  margin-bottom: 10px;
`;

export const QuotationH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const QuotationLabel = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const QuotationInput = styled.input`
  padding: 5px;
  height: 40px;
  width: 100%;
  border: none;
  background: #fafafa;
  border: 1px #333 solid;
  border-radius: 4px;
`;

export const QuotationTextArea = styled.textarea`
  padding: 5px;
  width: 100%;
  border: none;
  background: #fafafa;
  border: 1px #333 solid;
  border-radius: 4px;
`;

export const QuotationP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const QuotationButton = styled.button`
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

export const QuotationErrors = styled.span`
  color: red;
`;