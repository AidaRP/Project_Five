import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rent from "../../components/Rent/Rent";
import { root } from "../../utilities";

import "./MovieDetail.scss";

const MovieDetail = (props) => {
  let navigate = useNavigate();

  const Alquilar = async () => {
    console.log(props);
    let body = {
      precio: "5",
      peliculaId: props.search.id,
      usuarioId: props.credentials.usuario.id,
      alquilada: true,
      fecha: "2020-05-05",
      fechaDev: "2020-05-10",
    };
    console.log(body);
    try {
      let res = await axios.post(
        "https://filmsapiprojectfour.herokuapp.com/orders",
        body
      );
      if (res.status === 200) {
        alert("Pelicula alquilada con éxito");
        setTimeout(() => {
          navigate("/films");
        });
      }

      console.log(res.body, res.status);
    } catch (error) {
      console.log("tus muertos", error.response, error);
    }
  };

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
          <div className="dataFilm synopsis">{props.search?.synopsis}</div>
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
          <img src={root + props.search.image} alt={props.search.title} />
        </div>
      </div>
    );
  } else if (props.credentials?.token) {
    return (
      <div className="designFilm">
        <div className="filmDetailHalf">
          <div className="dataFilm title">{props.search?.title}</div>
          <div className="dataFilm"><p>{props.search?.synopsis}</p></div>
          <div className="dataFilm"></div>
        </div>
        <div className="filmDetailHalf image">
          <img src={root + props.search.image} alt={props.search.title} />
        </div>
        <div className="Alquilar" onClick={() => Alquilar()}>
          {" "}
          ¡ME LA LLEVO!{" "}
        </div>
        {<div className="alqMess"></div>}
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
  search: state.movieDetailReducer.movie,
}))(MovieDetail);
