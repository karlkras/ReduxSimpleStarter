import { FETCH_PARTNERS } from "../actions/index";

export default function(state = [], action ){
    switch (action.type) {
        case FETCH_PARTNERS:
            return [action.partners, ...state][0] ;
        default:
            return state;
    }
}