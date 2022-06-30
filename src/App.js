import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Propiedades from './components/props';

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
       </section>
      </header>
    </div>
  );
}

export default App;
