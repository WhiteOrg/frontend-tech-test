import { FETCH_GAMES, FETCH_GAMES_PENDING } from './types';

export const fetchGamesPending = () => {
    return { type: FETCH_GAMES_PENDING }
}

export const fetchGames = () => async dispatch => {

    dispatch(fetchGamesPending())

    try {
        const response = await fetch('https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda')
        const res = await response.json()

        if (res.error) throw res.error

        dispatch({
            type: FETCH_GAMES,
            payload: res
        })

    } catch (error) {
        //OUT OF SCOPE
        //error handle with another dispatch for errors e.g. dispatch(fetchGamesError(error))
    }


}
