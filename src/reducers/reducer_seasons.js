import { FETCH_SEASONS } from "../actions/index";

export default function(state = [], action ){
    switch (action.type) {
        case FETCH_SEASONS:
            return [ action.seasons, ...state ][0];
        default:
            return state;
    }
}