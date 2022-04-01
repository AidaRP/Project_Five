import { TAKE_FILM, TAKE_DATA } from '../types';

const initialState = {
    movie: {},
};

const data_film = (state = initialState, action) => {
    switch(action.type){
        //Ejemplo de datos
        // case TAKE_FILM :
        //     return action.payload;
        case TAKE_DATA :
            return action.payload;

        default : 
        return state
    }
}
export default data_film