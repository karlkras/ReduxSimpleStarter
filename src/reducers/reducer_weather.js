import { FETCH_WEATHTER} from "../actions/index";

export default function(state = [], action ){
    switch (action.type) {
        case FETCH_WEATHTER:
            return [ action.payload.data, ...state ];
    }

    return state;
}