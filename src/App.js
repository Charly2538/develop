import React from 'react';
import logo from './catt.jpg';
import './App.css';
import Saludar from './components/Saludar';
import Moment from 'moment';

function App() {
    
    const user = {
        nombre: "Carlos Lagaf",
        edad: 27,
        color: "azul"
    };
    
    return ( 
        <div className = "App">
        <header className = "App-header">
        <img src = { logo } className = "App-logo"
        alt = "logo"/>

        <Saludar userInfo={user} />
        
        <> { Moment().format('MMMM Do YYYY, h:mm:ss a') } </>
        </header> 
        </div>
    );
}

export default App;