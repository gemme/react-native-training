import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const initialState = {
    books:[{
        title:"Aqui el titulo",
        author:"Aqui el autor"
    }]
}

export const reducer =  (state = initialState ,action)=> {
    switch(action.type){
        case "LOAD_BOOKS":
            return {...state, books:action.payload}            
        default:
            return state;
        }
}

export const initStore = (reducer) =>{
    return createStore(reducer, applyMiddleware(thunk)) 
}