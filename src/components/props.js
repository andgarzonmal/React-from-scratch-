import React from "react";

export default function Propiedades(props){
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(', ')}</li>
        <li>nombre: {props.objeto.nombre}  correo: {props.objeto.correo}</li>
        <li>{props.elementoReact}</li>
        <li>{(props.arreglo.map(num =>props.funcion(num)).join(', '))}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  )
}

Propiedades.defaultProps = {
  porDefecto: "Las Props"
}

