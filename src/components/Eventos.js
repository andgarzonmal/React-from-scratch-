import React, { Component } from "react";

export class EventosES6 extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      contador: 0,
    }
    this.sum = this.sum.bind(this)
    this.rest = this.rest.bind(this)
  }

  sum() {
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  rest() {
    this.setState({
      contador: this.state.contador - 1,
    })
  }
  render() {
    return(
      <div>
        <h2>Eventos en componentes de clase ES6</h2>
        <h3>{this.state.contador}</h3>
        <nav>
        <button onClick={this.sum}>+</button>
        <button onClick={this.rest}>-</button>
        </nav>
      </div>
    )
  }
}

export class EventosES7 extends Component {
  
  state = {
    contador: 0,
  }

  sum = () => {
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  rest = () => {
    this.setState({
      contador: this.state.contador - 1,
    })
  }
  render() {
    return(
      <div>
        <h2>Eventos en componentes de clase ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
        <button onClick={this.sum}>+</button>
        <button onClick={this.rest}>-</button>
        </nav>
      </div>
    )
  }
}

function Boton(props) {
  return(
    <button onClick={props.myOnClick}>Boton Hecho componente</button>
  )
}

export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e)
    console.log(e.target)
    console.log(msg)
  }
  
  render() {
    return(
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button onClick={(e)=> this.handleClick(e, "Este es un saludo de amistad")}>Saludar</button>
        {/* Evento Personalizado */}
        {/* <Boton onClick={(e)=> this.handleClick(e, "Este es un saludo de amistad")}/> */}
        <Boton myOnClick={(e)=> this.handleClick(e, "Este es un saludo de amistad")}/>
      </div>
    )
  } 
}