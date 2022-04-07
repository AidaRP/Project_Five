import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { TAKE_FILM } from "../../redux/types";
import { MOVIE_DETAIL } from "../../redux/types";
import { root } from "../../utilities";
import "./Films.scss";

const Films = (props) => {
  const [peliculas, setPeliculas] = useState(null);
  let surf = useNavigate();

  useEffect(() => {
    getMovies();
    console.log("Films se ha montado por primera vez", peliculas);
  }, []);

  useEffect(() => {
    console.log("Cualquier cosa de Films ha cambiado");
  });

  useEffect(() => {
    console.log("Las movies han cambiado", peliculas);
  }, [peliculas]);

  const getMovies = async () => {
    try {
      let res = await axios.get(
        "https://filmsapiprojectfour.herokuapp.com/peliculas"
      );
      console.log(res.data);

      //Guardamos los datos que hemos traido del backend arriba en un hook de esta forma
      //los datos(pelis) estarán disponibles para los return del componente.

      setPeliculas(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const chooseMovie = (movie) => {
    console.log(movie);
    //Se guarda la pelicula escogida por el usuario en Redux
    props.dispatch({ type: MOVIE_DETAIL, payload: movie });

    //Usamos el navigate para mover al usuario a movidetail
    //donde estará disponible la información de la película
    surf("/moviedetail");
  };
  console.log(peliculas);
  if (peliculas !== null) {
    return (
      <div className="colorsDetail">
        {/* Hacemos el mapeo de las pelis */}
        {peliculas.map((movie) => {
          // cada elemento del mapeo recibirá un KEY único para distinguirlos
          // Le damos a las pelis mapeadas el onClick
          // para que nos traiga únicamente el objeto seleccionado en el mapeo
          return (
            <div
              className="filmPoster"
              key={movie.id}
              onClick={() => chooseMovie(movie)}
            >
              <img
                className="imgColors"
                src={root + movie.image}
                alt={movie.title}
              />
              <div className="filmHomeTitle"></div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="colorsFilms">
        <div className="Loader">
          <img src={require("../../img/robot_loader.gif")} alt="Loader" />
        </div>
      </div>
    );
  }
};
export default connect()(Films);
