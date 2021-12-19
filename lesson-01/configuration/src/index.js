import React, { Component } from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import "./styles.css"

/* const element = "Teste"
const element2 = <h1>Olá mundo ;D</h1>

function App() {
  return (
    <div>
      {element}
      {element2}
    </div>
  )
} */

/* function sum(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      Uriel David - Introdução ao ReactJS
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
} */

/* function soma(a, b) {
  alert(a + b)
}

function App() {
  return (
    <div className="App">
      Hello world!
      <Button onClick={() => soma(10, 20)} name="Uriel David" />
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(40, 10)} name="teste componente" />
        </ComponentB>
      </ComponentA>
    </div>
  )
} */

/* class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentWillMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state

    return (
      <div>
        <h1>{ clock }</h1>
        <button onClick={() => this.alterarCopo()}>{ copo }</button>
      </div>
    )
  }
} */

const App = () => {
  return (
    <div>
      Hello World!
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
