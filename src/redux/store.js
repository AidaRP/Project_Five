import { applyMiddleware, createStore } from "redux";
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers';
import data_film from "./reducers/data_film";

const createStoreWithMiddleware = applyMiddleware(
    save({ states: ['credentials','search', 'data_film'] })


)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    load({ states: ['credentials','search', 'data_film'] }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace:true,
    })
);

export default store;