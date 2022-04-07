import { MOVIE_DETAIL } from "../types";

const initialState = {
  movie: {},
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    //Guardamos en el estado los datos del usuario logueado
    case MOVIE_DETAIL:
      return { ...state, movie: action.payload };

    default:
      return state;
  }
};

export default movieDetailReducer;
