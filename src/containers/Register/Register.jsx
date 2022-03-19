
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import './Register.scss'


const Register = () => {

  let surf = Navigate();

  //Hooks
  const [msgError, setMsgError] = useState("");

  const [inputs_data_form, setinputs_data_form] = useState({
    name: "",
    email: "",
    telefono: "",
    password: ""
  });

  
  const [user, setUser] = useState({
    name: "",
    email: "",
    telefono: "",
    password: ""
  });
  
  const [ready_data_user, setready_data_user] = useState({
    name: false,
    email: false,
    telefono: false,
    password: false
  });

  const [button_send_data, setbutton_send_data] = useState(<div className="sendButton-no-ready">Registrame</div>);


  //useEffect
  useEffect(() => {

  }, []);


  useEffect(() => {
    if (ready_data_user.name === true && ready_data_user.email === true && ready_data_user.telefono === true && ready_data_user.password === true ){
      setbutton_send_data(<div className="sendButton" onClick={() => enviaDatosRegistro()}>Registrate</div>);
    } else {
      setbutton_send_data(<div className="sendButton-no-ready">Registrame</div>)
    }

  },[inputs_data_form]);












}










//     return (
//     <div className='colorsRegister'>
//         Hi Darlings im Register
//     </div>
//   )
// }

export default Register;

