import React from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions'

const PrizeList = ({ prizes, fetchGames }) => {

    const renderList = () => {
        return prizes.map((prize, index) => {
            return <p key={prize.title}>{index + 1} {prize.title} {prize.total}</p>
        })
    }

    const onRefresh = event => {
        event.preventDefault();
        fetchGames();
    }

    return (
        <div>
            <h2>Prize List</h2>
            <button onClick={onRefresh}>refresh</button>
            <ol>
                {(prizes) ? renderList() : null}
            </ol>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        prizes: state.game.tournament.prizeList
    }
}

export default connect(mapStateToProps, { fetchGames })(PrizeList);