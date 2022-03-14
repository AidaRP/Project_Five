import {combineReducers} from 'redux';

import credentials from './datosLogin-reducer';
// import credentials from './datosLogin-reducer';
import movieDetailReducer from './movieDetail-reducer';

const rootReducer = combineReducers({
    movieDetailReducer, credentials
});

export default rootReducer;