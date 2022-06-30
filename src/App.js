import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Andres"
  let auth = true;
  let estaciones = ["primavera","verano","otoño","invierno"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Name is {name}</h1>
        <p>{auth ? "El usuario esta logueado" : "El usuario No esta logueado"}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {estaciones.map((el, i) => 
           <li key={i}>{el}</li> )}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
