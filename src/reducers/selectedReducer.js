import { SELECT, DESELECT } from "../actions/types";

export default function(state=[], action){
    switch(action.type){
        case SELECT:
        return [
            ...state,
            action.payload
        ];
        
        case DESELECT:
        return state.filter(item => {
            return item!==action.payload;
        });
        
        default:
        return state;
    }
}