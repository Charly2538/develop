import React from 'react';
import logo from './catt.jpg';
import './App.css';
import Saludar from './components/Saludar';

function App() {
    return ( 
        <div className = "App">
        <header className = "App-header">
        <img src = { logo } className = "App-logo"
        alt = "logo"/>

        <Saludar name="Abraham padre de Isaac" edad="60" />
        <Saludar name="Charly el guapo" edad="veintisiempre" />
        <Saludar name="Batman" edad="34" />
        </header> 
        </div>
    );
}

export default App;