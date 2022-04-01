import {combineReducers} from 'redux';

import credentials from './datosLogin-reducer';
// import credentials from './datosLogin-reducer';
import movieDetailReducer from './movieDetail-reducer';
import data_film from './data_film';

const rootReducer = combineReducers({
    movieDetailReducer, 
    credentials, 
    data_film
});

export default rootReducer;