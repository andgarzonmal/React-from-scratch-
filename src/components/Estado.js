import React, { Component } from "react";

function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  )
}


export default class Estado extends Component {
  constructor(props){
    super(props) 
    this.state = {
      contador: 0,
    }

    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1
    //   }); 
    // }, 1000);

  }
  render(){
    return(
      <div>
        <h1>
        El Estado
        </h1>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo = {this.state.contador}/>
      </div>
    )
  }
}