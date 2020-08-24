import { FETCH_GAMES, FETCH_GAMES_PENDING } from '../actions/types';

const initialState = {
    pending: false,
    tournament: {},
    error: null
}


export default (state = initialState, action) => {

    // console.log(state)


    switch (action.type) {
        case FETCH_GAMES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_GAMES:
            return {
                ...state,
                tournament: action.payload,
                pending: false
            };
        default:
            return state;

    }
};