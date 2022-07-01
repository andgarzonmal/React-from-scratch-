import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Propiedades from './components/props';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import { Padre } from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
       <section>
        <Componente msg="Hola soy un componente desde una props"/>
        <hr />
        <Propiedades 
          cadena = "Esto es una cadena de texto" 
          numero={10} 
          booleano = {true} 
          arreglo = {[1,2,3]}
          objeto = {{nombre: "Andres", correo: "andgarzonmal@unal.edu.co"}}
          funcion ={(num) => num*num}
          elementoReact = {<i>Esto es un elemento de react</i>}
          componenteReact = {<Componente msg="Hola soy un componente cargado como una prop"/>}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos/>
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos/>
          <hr />
          <Padre />
          <hr />
          <CicloVida />
       </section>
      </header>
    </div>
  );
}

export default App;
