import { FETCH_GAMES } from '../actions/types';

export default (state = { hi: 'test' }, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return { ...state, ...action.payload };

        default:
            return state;

    }
};