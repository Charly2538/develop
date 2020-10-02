import React, { useState } from 'react';
import logo from './catt.jpg';
import './App.css';
import Saludar from './components/Saludar';
import Moment from 'moment';

/* function App() {
 */    

    const App = () => {

        //Input

        const [datos, setDatos] = useState({
            nombre: '',
            apellido: ''
        })
    
        const handleInputChange = (event) => {
            // console.log(event.target.name)
            // console.log(event.target.value)
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        }
    
        const enviarDatos = (event) => {
            event.preventDefault()
            console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
        }


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

        <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>

        </header> 
        </div>
    );
}

export default App;
