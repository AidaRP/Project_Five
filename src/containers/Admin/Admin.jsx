import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';

import './Admin.scss'

const Admin = (props) => {

    let navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [pedidos, setOrders] = useState([]);

    const traerUsers = async () => {


        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.get("https://filmsapiprojectfour.herokuapp.com/usuarios", config)

            console.log(res.data);

            setUsuarios(res.data);

        } catch (error) {
            console.log(error);
        }

    }

    const traerPedidos = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {

            let res = await axios.get(`https://filmsapiprojectfour.herokuapp.com/orders`, config)

            console.log(res.data);

            setOrders(res.data);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        if (props.credentials.usuario.rol !== true) {
            navigate("/");
        }
        traerUsers()
        traerPedidos()
    }, [])

 


    if (usuarios[0]?.id !== undefined) {
        return (
            <div className="colorsAdmin">
                <div className='listaUsuarios'>
                    <div className="titleAdminU"><p>LISTA DE TODOS LOS USUARIOS</p></div>
                    {
                        usuarios.map(usuarios => {
                            return (
                                <div key={usuarios.id} className="usuarios1" >

                                    <p>id: {usuarios.id}</p> 
                                    <p>Nombre: {usuarios.name}</p>
                                    <p> Apellido: {usuarios.apellido}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='listaPedidos'>
                <div className="titleAdminO"><p>LISTA DE TODOS LOS PEDIDOS</p></div>
                    {
                        pedidos.map(pedidos => {
                            return (
                                <div key={pedidos.id} className="pedidos1" >

                                    <p>id: {pedidos.id} </p>  
                                    <p>Nombre: {pedidos.peliculaId}</p> 
                                    <p>Pelicula: {pedidos.title}</p>
                                    <p>Fecha de Alquiler: {pedidos.fecha}</p>
                                    <p>Fecha de devolución: {pedidos.fechaDev}</p>
                                    <p> Precio: {pedidos.precio + "€"}</p>       
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        )
    } else {
        return (
            <div className='designPelicula'>
                <div className="marginLoader">
                    {/* <img src={require('../../img/spi.gif')} alt="cargador" /> */}
                </div>
            </div>
        )
    }
}



export default connect((state) => ({
    credentials: state.credentials
}))(Admin)