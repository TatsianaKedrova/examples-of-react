import {combineReducers, createStore} from "redux";


let reducers = combineReducers({

})


let store = createStore(reducers);

// @ts-ignore
window.store = store;

export type AppRootType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch

export default store;