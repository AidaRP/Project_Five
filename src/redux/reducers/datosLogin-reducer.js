import { LOGIN, LOGOUT, MODIFY_CREDENTIALS } from '../types';

const initialState = {
    token : "",
    user : {}
};
//Qué hago con credentials?
const datosLoginReducer = (state = initialState, action) => {
    switch(action.type){
        //Se guardan los datos del usuario logueado
        case LOGIN :
            return action.payload;
        //Borramos los datos guardados y dejamos sus valores vacíos
        case LOGOUT :
            return initialState;
        //Modificamos los datos que tenemos guardados en este estado con los valores que metamos por input en Perfil.js
        case MODIFY_CREDENTIALS :
            return{...state, user: action.payload};
        
        default : 
            return state
    }
}

export default datosLoginReducer;