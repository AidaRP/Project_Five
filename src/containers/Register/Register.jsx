
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

//Manejadores o Handlers
const userHandler = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
}


const validate_inputs = (e) => {

  switch (e.target.name) {
      case 'name':
          console.log('case name length ', e.target.value.length);
          console.log('e' , e.target.value);
          //regex para solo letras y más de 4 letras
          if ((e.target.value.length >=4) && (/^[a-z]+$/gi.test(e.target.value))) { // && (/^[a-z]/gi.test(user.name))  
             
              setinputs_data_form({
                  ...inputs_data_form,
                  name: "✓ Nombre"
              });

              setready_data_user({
                  ...ready_data_user,
                  name:true
              });
          } else {
              setinputs_data_form({
                  ...inputs_data_form,
                  name: "✗ Utiliza solo letras y minimo 4 caracteres"
              });

              setready_data_user({
                  ...ready_data_user,
                  name:false
              });
          };
          break;
      case 'email':
      
          if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email)) {
              setinputs_data_form({
                  ...inputs_data_form,
                  email: "✓ Email"
              });
              setready_data_user({
                  ...ready_data_user,
                  email:true
              });
          }
          else {
              setinputs_data_form({
                  ...inputs_data_form,
                  email: "✗ Email incorrecto"
              });
              setready_data_user({
                  ...ready_data_user,
                  email:false
              });
          };

      break;

      case 'telf':
          console.log('case name length ', e.target.value.length);
          if ((e.target.value.length >=9)&&(/[a-zA-Z]\w+$/gi.test(user.name))) { // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
             
              setinputs_data_form({
                  ...inputs_data_form,
                  telf: "✓ Teléfono"
              });

              setready_data_user({
                  ...ready_data_user,
                  telf:true
              });
          } else {
              setinputs_data_form({
                  ...inputs_data_form,
                  telf: "✗ El teléfono tiene que tener mínimo 9 digitos"
              });

              setready_data_user({
                  ...ready_data_user,
                  telf:false
              });
          };
          break;

          case 'password':
              console.log('case name length ', e.target.value.length);
              if (e.target.value.length >=5) { // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
                 
                  setinputs_data_form({
                      ...inputs_data_form,
                      password: "✓ Contraseña"
                  });

                  setready_data_user({
                      ...ready_data_user,
                      password:true
                  });
              } else {
                  setinputs_data_form({
                      ...inputs_data_form,
                      password: "✗ La contraseña tiene que tener mínimo 5 caracteres"
                  });

                  setready_data_user({
                      ...ready_data_user,
                      password:false
                  });
              };
              break;

      default:
          break;
  }

}



//Funciones


const enviaDatosRegistro = async () => {
  console.log("inputs name: ",ready_data_user.name);
  console.log("inputs name: ",ready_data_user.email);
  console.log("inputs name: ",ready_data_user.password);
  console.log("inputs name: ",ready_data_user.telf);
  if(ready_data_user.name==true && ready_data_user.email==true && ready_data_user.telf==true && ready_data_user.password==true ){

  //Generación del body
  let body = {
      name: user.name,
      email: user.email,
      password: user.password,
      telf: user.telf,
  }

  //Conexion a axios y envio de datos
  console.log("ENVIANDO AL BACKEND ESTO....", body);
  try {
      let res = await axios.post("https://app-movies-mongoose.herokuapp.com/api/signup", body);
      console.log("imprimir res: ", res)
      //Guardado de datos en localStorage
      localStorage.setItem("datosLogin", JSON.stringify(res.data.user));
      setMsgError("Usuario registrado con éxito");

      surf("/login");
  } catch (error) {
      console.log(error)
  }

}else{
console.log("no es todo true");
}

};


//Renderizado
return (
  <div className="designRegister">
      <div id="container-form">
          {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
          <h1>Registrate</h1>
          <div className="container-form-2fields">
              <div className="input-form-register-fields">
                  <input className="input-form-register" type='text' name='name' title='name' onChange={e => { validate_inputs(e); userHandler(e) }} lenght='30' placeholder='Nombre' />
                  <div className="div-print-info-correct">{inputs_data_form.name}</div>
                  <input className="input-form-register" type='email' name='email' title='email' onChange={e => { validate_inputs(e);userHandler(e) }} lenght='30' placeholder='Email' />
                  <div className="div-print-info-correct">{inputs_data_form.email}</div>
                  <input className="input-form-register" type='text' name='telf' title='telf' onChange={e => { validate_inputs(e);userHandler(e) }} lenght='30' placeholder='Teléfono' />
                  <div className="div-print-info-correct">{inputs_data_form.telf}</div>
                  <input className="input-form-register" type='text' name='password' title='password' onChange={e => { validate_inputs(e);userHandler(e) }} lenght='30' placeholder='Password' />
                  <div className="div-print-info-correct">{inputs_data_form.password}</div>
              </div>

          </div>
          {button_send_data}


      </div>

  </div>
)
};

export default Register;





















//     return (
//     <div className='colorsRegister'>
//         Hi Darlings im Register
//     </div>
//   )
// }



