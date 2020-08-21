import React from 'react';
import logo from './catt.jpg';
import './App.css';
import Moment from 'moment';

function App() {
    return ( <
        div className = "App">
        <header className = "App-header">
        <img src = { logo } className = "App-logo"
        alt = "logo"/>
        <p> Edit <code> src / App.js </code> and save to reload. #NyanCatTeam.</p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React </a> 
        <p> Esto es un parrafo </p>
        </header> 
        </div>
    );
}

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

export default App;