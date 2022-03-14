// import React from 'react'

// import './MovieDetail.scss'

// const MovieDetail = () => {
  
//     return (
//     <div className='colorsMovieDetail'>
//         Somos los datos de las peliculas. JeJe.
//     </div>
//   )
// }

// export default MovieDetail;





import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Rent from '../../components/Rent/Rent';
import {root} from '../../utilities';

import './MovieDetail.scss';

const MovieDetail = (props) => {

    let surf = useNavigate();
    


    useEffect(()=> {
        //Compruebo si hay datos de la película escogida en redux, en caso de NO
        //haber datos, redirijo a HOME.

        if(props.search?.title === undefined){
            surf("/");
        }
    });

        return(
            <div className='designFilm'>
                <div className="filmDetailHalf">
                    <div className="dataFilm">{props.search?.title}</div>
                    <div className="dataFilm">{props.search?.sinopsis}</div>
                    <div className="dataFilm">
                        {
                            //EN CASO DE QUE TOKEN SEA TRUE, SI SE INCLUYE EL ELEMENTO RENT
                            props.credentials.token && <Rent id={props.search.id} token={props.credentials.token} usuarioId={props.credentials.user.id}/>
                        }
                    </div>
                </div>
                <div className="filmDetailHalf">
                    <img className="cartel" src={root + props.search.image} alt={props.search.title}/></div>    
            </div>
        )
   
}

export default connect((state) => ({
    credentials: state.credentials,
    search : state.search.film
}))(MovieDetail);