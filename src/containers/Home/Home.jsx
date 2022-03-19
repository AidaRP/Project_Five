
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
import { TAKE_FILM } from '../../redux/types';
import { MOVIE_DETAIL } from '../../redux/types';
import { root } from '../../utilities';
import './Home.scss';



const Home = (props) => {

  const [peliculas, setPeliculas] = useState([]);
  let surf = useNavigate();

  useEffect(() =>{
    getMovies();
    console.log('Home se ha montado por primera vez')
  },[])

  useEffect(()=>{
    console.log("Cualquier cosa de home ha cambiado");
  });

  useEffect(()=>{
    console.log("Las movies han cambiado", peliculas);
  },[peliculas]);



  const getMovies = async () => {

    try {

      let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page={7}')
      

      //Guardamos los datos que hemos traido del backend arriba en un hook de esta forma 
      //los datos(pelis) estarán disponibles para los return del componente.

      setTimeout(()=>{
        setPeliculas(res.data.results);
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

  if (peliculas[0]?.id !== undefined) {
    return(
      <div className='colorsDetail'>
        {/* Hacemos el mapeo de las pelis */}
        {peliculas.map(movie => {
            //cada elemento del mapeo recibirá un KEY único para distinguirlos
            return (
              //Le damos a las pelis mapeadas el onClick 
              //para que nos traiga únicamente el objeto seleccionado en el mapeo
              <div className="filmPoster" key={movie.id} onClick={()=>chooseMovie(movie)}>
                <img className="imgColors"src={root + movie.poster_path} alt={movie.title}/>
                <div className="filmHomeTitle">
                  {/* <span src={rootTitle + movie.title}>Titulo</span> */}
                </div>
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
          <img src={require('../../img/robot_loader.gif')} alt="Loader"/>
        </div>
      </div>
    )
  }
}

export default connect()(Home);




