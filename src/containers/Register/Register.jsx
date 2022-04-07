import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { checkError } from "../../utilities";
import "./Register.scss";

const Register = () => {
  let navigate = useNavigate();
  //Hooks
  const [dataUser, setDataUser] = useState({
    name: "",
    surname: "",
    age: "",
    phone: "",
    adress: "",
    email: "",
    password: "",
    password2: "",
    nick: "",
  });

  const [msgError, setMsgError] = useState("");

  //Handler (manejador)
  const inputData = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  //Funciones locales del componente

  const registerme = async () => {
    setMsgError("");
    let error = "";
    let arrayFields = Object.entries(dataUser);
    if (dataUser.password !== dataUser.password2) {
      return setMsgError("Los dos password deben de coincidir");
    } else {
      setMsgError("");
    }
    for (let element of arrayFields) {
      error = checkError(element[0], element[1]);
      if (error !== "ok") {
        setMsgError(error);
        return;
      }
    }
    let body = {
      name: dataUser.name,
      surname: dataUser.surname,
      age: dataUser.age,
      phone: parseInt(dataUser.phone),
      adress: dataUser.adress,
      email: dataUser.email,
      password: dataUser.password,
      nick: dataUser.nick,
    };
    try {
      await axios.post(
        "https://filmsapiprojectfour.herokuapp.com/usuarios",
        body
      );
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  //Para ver en tiempo real lo escrito en inputs
  //{<pre>{JSON.stringify(dataUser, null,2)}</pre>}
  return (
    <div className="colorsRegister">
      <div className="cardRegister">
        <div className="upCardRegister">Formulario de Registro</div>

        <div className="middleCardRegister">
          <input
            type="text"
            name="name"
            id="name"
            title="name"
            placeholder="Nombre:"
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
          <input
            type="text"
            name="surname"
            id="surname"
            title="surname"
            placeholder="Apellido:"
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
          <input
            type="text"
            name="age"
            id="age"
            title="age"
            placeholder="Edad:"
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            title="phone"
            placeholder="Telefono"
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
          <input
            type="text"
            name="adress"
            id="adress"
            title="adress"
            placeholder="Dirección:"
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            title="email"
            placeholder="Correo Electrónico:"
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            title="password"
            placeholder="Contraseña"
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
          <input
            type="password"
            name="password2"
            id="password2"
            title="password2"
            placeholder="Repite contraseña"
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
          <input
            type="text"
            name="nick"
            id="nick"
            title="nick"
            placeholder="nick: "
            autoComplete="off"
            onChange={(e) => {
              inputData(e);
            }}
          />
        </div>
        <div className="bottomCardRegister">
          {msgError}
          <div className="buttonRegister" onClick={() => registerme()}>
            Register me!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

//     return (
//     <div className='colorsRegister'>
//         Hi Darlings im Register
//     </div>
//   )
// }
