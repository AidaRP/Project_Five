import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rent from "../../components/Rent/Rent";
import { root } from "../../utilities";

import "./MovieDetail.scss";

const MovieDetail = (props) => {
  let navigate = useNavigate();
    // const Alquilar = () => {
    //     let body = {
    //         precio: body.precio,
    //         peliculaId: body.peliculaId,
    //         usuarioId: body.usuarioId,
    //         fecha: body.fecha
    //     }
    }

  useEffect(() => {
    if (props.search?.title === undefined) {
      navigate("/");
    }
  });

  if (!props.credentials?.token) {
    return (
      <div className="designFilm">
        <div className="filmDetailHalf">
          <div className="dataFilm title">{props.search?.title}</div>
          <div className="dataFilm">{props.search?.overview}</div>
          <div className="dataFilm">
            {props.credentials.token && (
              <Rent
                id={props.search.id}
                token={props.credentials.token}
                userId={props.credentials.user.id}
              />
            )}
          </div>
        </div>
        <div className="filmDetailHalf image">
          <img src={root + props.search.poster_path} alt={props.search.title} />
        </div>
      </div>
    );
  } else if (props.credentials?.token) {
    return <div className="designFilm">
      <div className="filmDetailHalf">
        <div className="dataFilm title">{props.search?.title}</div>
        <div className="dataFilm">{props.search?.overview}</div>
        <div className="dataFilm">
          {
            // props.credentials.token && <Rent id={props.search.id} token={props.credentials.token} userId={props.credentials.user.id}/>
          }
        </div>
      </div>
      <div className="filmDetailHalf image">
        <img src={root + props.search.poster_path} alt={props.search.title} />
      </div>
    <div className="Alquilar"> ¡ME LA LLEVO! </div>;

    </div>;
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  search: state.movieDetailReducer.movie,
}))(MovieDetail);
