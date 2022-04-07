
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//REDUX
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

import './Login.scss'

const Login = (props) => {
  
    let surf = useNavigate();

    //1-Hooks (Lo mismo que el estado en los componentes de clase)
    const [datosUsuario, setDatosUsuario] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");
    
    
    //Handlers (Manejadores)
    const rellenarDatos = (e) => {
    //El handler setea los datos en el hook...[e.target.name] 
    //recibe el nombre de la propiedad a cambiar, e.target.value tiene el valor..
    //ambos obtienen los datos del evento que es el hecho de escribir en un input concreto
    setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value})
    };
    
    //Funciones locales
    const login = async () => {
      try {
        
        //Ponemos las credenciales
        let body = {
          email: datosUsuario.email,
          password: datosUsuario.password
        }
        //Ponemos la dirección de nuestro backend
        let resultado = await axios.post("https://filmsapiprojectfour.herokuapp.com/usuarios/login", body)
        
        console.log("soy credentials" ,resultado.data)
        //Cambiamos el valor del hook credenciales, para que se recargue el componente
        if (resultado.data === "User or pass invalid") {
          setMsgError2("User or pass invalid")
        } else {
          
          //Utilizamos Redux para guardar los datos

          props.dispatch({type:LOGIN, payload: resultado.data});

          setTimeout(()=>{
            surf("/");
          },1500);
        }
      
        
      } catch (error) {
      
        console.log(error)
      
      }


        
      
    };

    //2-Render (Renderizamos el contenido en la vista)

    return(
      
      <div className='colorsLogin'>
      
        {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
      <div className="colorsForm">
        <input type="email" name="email" id="email" title="email" placeholder="Escribe tu Email" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}} />
        <div className="passwordColors"><input type="password" name="password" id="password" title="password" placeholder="Escribe tu Password" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}  /></div>
      {msgError}
      {msgError2}
      </div>
      <div className="loginButton espacio" onClick={()=>login()}>COME ON!</div>
    </div>
    );


};



export default connect()(Login);


