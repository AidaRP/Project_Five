
// import React from 'react'

// import './Home.scss'

// const Home = () => {

//     return (
//     <div className='colorsHome'>
//         <h1>¡AidiWooD SuperCluB! <br /> <br /> Hello Welcome.<br /> <br /> Begin you experience.</h1>
//     </div>
//   )
// }

// export default Home;

import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import { root } from '../../utilities';
import './Home.scss';



const Home = (props) => {

  const [films, setFilms] = useState([]);
  let surf = useNavigate();

  useEffect(() =>{
    getMovies();
  },[])

  useEffect(()=>{
    console.log("Las movies han cambiado", films);
  },[films]);

  const getMovies = async () => {

    try {

      let res = await axios.get('https://filmsapiprojectfour.herokuapp.com/') // !TODO backend arreglar eso

      //Guardamos los datos que hemos traido del backend arriba en un hook de esta forma 
      //los datos(pelis) estarán disponibles para los return del componente.

      setTimeout(()=>{
        setFilms(res.data.results);
      },2000);

    } catch (error) {
      console.log(error);
    }

  };

  const chooseMovie = (movie) => {

    console.log(movie);
    //Se guarda la pelicula escogida por el usuario en Redux
    props.dispatch({type:MOVIE_DETAIL, payload: movie});

    //Usamos el navigate para mover al usuario a movidetail 
    //donde estará disponible la información de la película
    surf("/moviedetail");
  }

  if (films[0]?.id !== undefined) {
    return(
      <div className='colorsDetail'>
        {/* Hacemos el mapeo de las pelis */}
        {films.map(movie => {
            //cada elemento del mapeo recibirá un KEY único para distinguirlos
            return (
              //Le damos a las pelis mapeadas el onClick 
              //para que nos traiga únicamente el objeto seleccionado en el mapeo
              <div key={movie.id} onClick={()=>chooseMovie(movie)}>
                <img src={root + movie.poster_path} alt={movie.title}/>
              </div>
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className='colorsHome'>
        <div className='Loader'>
          <img src={require('../../img/Loader.gif')} alt="Loader"/>
        </div>
      </div>
    )
  }
}

export default connect()(Home);




