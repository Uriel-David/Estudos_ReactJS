import React from 'react';
import mock from '../mock';

/* const buttonA = <button>Primeiro Botão</button>
const buttonB = <button>Segundo Botão</button>
const hasCustomer = true

const App = () => {

  const renderFirstButton = () => (
    <div>
      Clique no botão abaixo para ver o que acontece
      <br/><br/>
      {buttonA}
    </div>
  )

  const renderSecondButton = () => (
    <div>
      Clique no botão abaixo para ver o que acontece
      <br/><br/>
      {buttonB}
    </div>
  )

  const showTeste = () => {
    if(!hasCustomer) return null

    return (
      <div>
        <h1>Nome para teste: Uriel David</h1>
      </div>
    )
  }

  console.log('hasCustomer: ', hasCustomer)

  return (
    <div>
      <p>Teste de aplicação</p>
      <p>Bem vindo a página ;D</p>
      {hasCustomer ? renderFirstButton() : renderSecondButton()}
      <div>
        {showTeste()}
      </div>
    </div>
  );
}; */

/* const App = () => {

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Teste de aplicação</p>
      <p>Bem vindo a página ;D</p>
      <div>
        <ul>
          {mock.map(renderCustomers)}
        </ul>
      </div>
    </div>
  )
} */

const App = () => {

  const name = 'Testando evento'

  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
  }

  const showEvent = (e) => {
    console.log('evento clicado')
    console.log(e)
    alert(name)
  }

  const Button = <button onClick={showEvent}>Mostrar Evento</button>

  return (
    <div>
      <p>Teste de aplicação</p>
      <p>Bem vindo a página ;D</p>
      <input onChange={handleChange} />
      {Button}
    </div>
  )
}

export default App;
