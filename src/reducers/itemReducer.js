import { INIT } from "../actions/types";

export default function(state=[], action){
    switch(action.type){
        case INIT:
        console.log(action)
        return action.payload;

        default: 
        return state;
    }
}