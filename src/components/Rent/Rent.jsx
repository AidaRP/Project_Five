import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Rent.scss';

const Rent = (props) => {

    let surf = useNavigate();

    const alquilar = async () => {
        let body = {
            //corresponde al body de pedido de postman
            precio: 5,
            peliculaId: props.peliculaId,
            usuarioId: props.usuarioId,
            fecha: "14/03/2022"
        }

        let config = {
            headers: { Authorization: `Bearer ${props.token}`}
        };

        try {
            let res = await axios.post("https://filmsapiprojectfour.herokuapp.com/orders",body,config)
        
            if(res){
                console.log(res);
                surf("/");
            }
        } catch (error) {
            console.log(error)
        }   
    }

    return (
        <div className='colorsRent' onClick={()=>alquilar()}>Alquilar</div>
    )
}

export default Rent;