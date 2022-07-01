import React, {Component} from "react";

// Idealmente en archivos independientes

function Login() 
{
  return (
    <div>
      <h3>Login</h3>
    </div>
  )
}

//idealmente en archivos independientes 

function LogOut() 
{
  return (
    <div>
      <h3>LogOut</h3>
    </div>
  )
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session:true,
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <LogOut />} 
      </div>
    )
  }
}