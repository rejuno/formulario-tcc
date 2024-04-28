import React, { useState } from 'react';
import './App.css';

function App() {


  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objeto: '',
    marca: '',
    cor: '',
    detalhe: ''
    // Adicione outros campos do formulário aqui
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para validar os dados do formulário antes de avançar
    // Por exemplo, verificar se todos os campos obrigatórios foram preenchidos

    // Avança para a próxima etapa


  setStep(step + 1);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        
        {/*PERGUNTA 1*/}
        {step === 1 && (
          <div id="component_p1">

            <div id="question">

            <label id="question_1">
              Se você não encontrou seu objeto nas pesquisas, não perca a esperança. Ele pode ainda não ter sido entregue no setor de Achados e Perdidos. <br></br>
              Você pode reportar sua perda e caso alguém entregue seu objeto aqui, nós logo te avisaremos.
            </label>
            </div>

            <button type="submit" id="next">Avançar</button>

          </div>
        )}



        {/*PERGUNTA 2*/}
        {step === 2 && (
          <div id="component_p2">
            <div id="component_name_email">
            <label id="name_answer">
              <input
              placeholder='Nome'
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>

            <label id="email_answer">
              <input
                placeholder='Email'
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            </div>
            <button type="submit" id="next">Avançar</button>

          </div>
        )}


{/*PERGUNTA 3*/}
  {step === 3 && (
          <div id="component_p3">
            <div id="questions">
            
            <div id="questions_content">
            <label id="question_3">
            Como é o objeto? Quanto mais detalhes você der, mais fácil será de identificar o objeto e devolvê-lo para você
            </label>
            
            

            <select 
            id="objeto"
            name="objeto"
            value={formData.objeto}
            onChange={handleInputChange}
            >
              <option value="garrafa">Garrafa</option>
              <option value="oculos">Óculos</option>
              <option value="guardachuva">Guarda-Chuva</option>
            </select>


            <input
                placeholder='Marca'
                id="marca"
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleInputChange}
              />
              <label id="color_text">Cor <input type="color" value="#ff0000" onChange={handleInputChange} name="cor" id="color"/></label>
            </div>
            
            
              




          <div id="question_3_2">
              <label id="question_3_2_sub">Tem algum detalhe a mais pra ajudar a identificar?</label>
              
              <input
                id="detalhe"
                placeholder='Descrição'
                type="textarea"
                name="detalhe"
                value={formData.detalhe}
                onChange={handleInputChange}
              />
              </div>
              
              </div>
            
              <button type="submit" id="next">Avançar</button>

          </div>
        )}





{/*PERGUNTA 4*/}
{step === 4 && ( 
  <div id="component_p4">
    
    <div id="question_4">
    <label id="question_4_sub">Quando ocorreu a perda?</label>
    <input type="date" id="start" name="trip-start" value="2022-01-01" min="2018-01-01" max="2050-12-31" />
    </div>

    <button type="submit" id="next">Avançar</button>
  </div>
)}



{/*PERGUNTA 5*/}
{step === 5 && ( 
  <div id="component_p5">
    
    <div id="question_5">
    <label id="question_5_sub">Onde ocorreu a perda? </label>
    <select 
            id="local"
            name="local"
            value={formData.local}
            onChange={handleInputChange}
            >
              <option value="naosei">Não Lembro</option>
              <option value="banheiro">Banheiro</option>
              <option value="sala">Sala</option>
              <option value="saguao">Saguão</option>
              <option value="auditorio">Auditório</option>
            </select>
    </div>

            <button type="submit" id="next">Avançar</button>
  </div>
)}




{/*CONFIRMANDO OS DADOS*/}
{step === 6 && ( 
  
  <div id="component_confirm">

  <div id="confirm">
  
    <label>Confirmar dados </label>
    {/*inserir informações que foram geradas*/}
  
  </div>
  
    <button type="submit" id="next">Avançar</button>
  </div>
)}





{/*MENSAGEM DE SUCESSO*/}

{step === 7 && ( 
  <div id="component_sucess">
    <div id="sucess">
      <label id="sucess_sub">Seu reporte foi enviado com sucesso, seguiremos te informando por e-mail. 
      A gente pode te ajudar na divulgação do seu objeto, basta gerar um ‘cartaz de procurado’ nas opções abaixo pra compartilhar nas suas redes ou voltar à tela principal</label>
      <button id="cartaz">Gerar Cartaz</button>
    </div>


    <button id="bMenu">Voltar ao menu principal</button>

  </div>
)}

      </form>
    </div>
  );
}

export default App;
