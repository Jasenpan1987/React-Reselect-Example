import { SELECT, DESELECT } from "./types";

export const selectAct = (id) => {
    return {
        type: SELECT,
        payload: id
    }
}

export const deSelectAct = (id) => {
    return {
        type: DESELECT,
        payload: id
    }
}