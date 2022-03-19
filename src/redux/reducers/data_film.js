import { TAKE_FILM, TAKE_DATA } from '../types';

const initialState = {
    saludo : ''
};

const data_film = (state = initialState, action) => {
    switch(action.type){
        //Ejemplo de datos
        case TAKE_FILM :
            return action.payload;

        default : 
        return state
    }
}
export default data_film