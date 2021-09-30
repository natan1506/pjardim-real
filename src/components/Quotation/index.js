import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import backgroundAbout from '../../images/bg-about.jpeg';

import {
  QuotationContainer,
  QuotationH1,
  QuotationForm,
  QuotationRowForm,
  QuotationColForm,
  QuotationLabel,
  QuotationInput,
  QuotationTextArea,
  QuotationErrors,
  QuotationButton
} from './QuotationElements';

const Quotation = () => {
  emailjs.init("user_CNgIeqRVlLSRhksjUTWPv");

  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data, r) => {
    alert(`Obrigado por enviar sua mensagem, logo entraremos em contato!`);
    const templateID = 'template_9kls87j';
    const serviceID = 'service_1oe5xoi';

    sendFeedback(serviceID, templateID, { 
      from_name: `${data.user_name} ${data.user_lastname}`, 
      message_html: `
        telefone: ${data.user_phone}
        mensagem: ${data.user_message}`, 
      reply_to: data.user_email 
    })
    r.target.reset();
  }

  const sendFeedback = (serviceID, templateID, variables) => {
    emailjs.send(
        serviceID, templateID,
        variables
    ).then(res => {
      console.log(res.text)
    })
      .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

  return (
    <div id="quotation">
      <QuotationContainer backgroundImageCustom={backgroundAbout}>
        <QuotationH1>Vamos conversar sobre o seu projeto?</QuotationH1>
        <QuotationForm 
        onSubmit={handleSubmit(onSubmit)}
        >
          <QuotationRowForm>
            <QuotationColForm>
              <QuotationLabel>Nome</QuotationLabel>
              <QuotationInput type="text" name="user_name" placeholder="Exemplo: Bruno"
                {...
                  register("user_name",{ 
                      required: true, 
                      maxLength: {
                          value: 20,
                          message: "Por favor insira nome com até 20 caracteres"
                      } 
                  })
                } 
                />
              <br/>
              <QuotationErrors>{errors.user_name?.type === 'required' && "Nome obrigatório"}</QuotationErrors>
            </QuotationColForm>
            <QuotationColForm>
              <QuotationLabel>Sobrenome</QuotationLabel>
              <QuotationInput type="text" name="user_lastname" placeholder="Exemplo: Lima"
                {...register("user_lastname", { 
                      required: true, 
                      maxLength: {
                          value: 20,
                          message: "Por favor insira sobrenome com até 20 caracteres"
                      } 
                  })
                } 
              />
              <br/>
              <QuotationErrors>{errors.user_lastname?.type === 'required' && "Nome obrigatório"}</QuotationErrors>
            </QuotationColForm>
          </QuotationRowForm>
          <QuotationRowForm>
            <QuotationColForm>
              <QuotationLabel>Email</QuotationLabel>
              <QuotationInput type="email" name="user_email"  placeholder="Exemplo: exemplo@email.com" 
                {...register("user_email", {
                      required: true,
                      pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address"
                      }
                  })
                }
              />
              <br/>
              <QuotationErrors>{errors.user_email?.type === 'required' && "email obrigatório"}</QuotationErrors>
            </QuotationColForm>
            <QuotationColForm>
              <QuotationLabel>Telefone</QuotationLabel>
              <QuotationInput type="text" name="user_phone" placeholder="Exemplo: (67) 99999-9999" 
                {...register("user_phone", {
                      required: true,
                      pattern: {
                        value: 20,
                        message: "Por favor, insira um telefones"
                      }
                  })
                }
              />
              <br/>
              <QuotationErrors>{errors.user_phone?.type === 'required' && "Telefone obrigatório"}</QuotationErrors>
            </QuotationColForm>
          </QuotationRowForm>
          <QuotationRowForm>
            <QuotationColForm>
              <QuotationLabel>Mensagem</QuotationLabel>
              <QuotationTextArea name="user_message" rows="5" placeholder="Escreva sua mensagem" 
                {...register("user_message", {
                      required: true
                  })
                } 
              />
              <br/>
              <QuotationErrors>{errors.user_message?.type === 'required' && "Mensagem obrigatória"}</QuotationErrors>
            </QuotationColForm>
          </QuotationRowForm>
          <QuotationButton type="submit">Enviar</QuotationButton>
        </QuotationForm>
      </QuotationContainer>
    </div>
  )
}

export default Quotation
