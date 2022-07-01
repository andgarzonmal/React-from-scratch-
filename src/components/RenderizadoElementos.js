import React, {Component} from "react";
import data from '../Helpers/data.json';

function ElementosLista (props) {
  return (
    <li>
      <a href={props.url}>{props.name}</a>
    </li>
  )
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["primavera", "verano", "Otoño", "Invierno"],  
    }
  }
  
  render() {
    console.log(data)
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {
            this.state.seasons.map((el, i) => <li key ={i}>{el}</li>)
          }
        </ol>
        <h3>Frameworks Frontend Javascript</h3>
        <ul>
          {data.frameworks.map((el) => 
            <ElementosLista key={el.id} url={el.web} name={el.name}/>
          )}
        </ul>
      </div>
    )
  }
}