import React, { useState } from 'react';
import logo from './catt.jpg';
import './App.css';
import Saludar from './components/Saludar';
import Moment from 'moment';
import Input from './components/Input';

/* function App() {
 */    

    const App = () => {

        //Contador bonito
    const [count, setcount] = useState(0);

        //Objeto
    const user = {
        nombre: "El campeon",
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

        <p> ya diste estos click woe {count} </p>
        <button onClick={() => setcount(count + 1)} >
            Click aqui woe
        </button>

        <Input />

        </header> 
        </div>
    );
}

export default App;
