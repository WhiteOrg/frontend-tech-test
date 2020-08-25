import React from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions'
import { FaSync } from 'react-icons/fa'
import './PrizeList.css'

const PrizeList = ({ prizes, fetchGames }) => {

    const renderList = () => {
        return prizes.map((prize, index) => {
            return <li key={prize.title}>
                <span className="rank">{index + 1}</span>
                <span className="name">{prize.title}</span>
                <span className="total">{prize.total}</span>
            </li>
        })
    }

    const onRefresh = event => {
        event.preventDefault();
        fetchGames();
    }

    return (
        <section className="prize-list">
            <h2>Prize List <button className="refresh" onClick={onRefresh}><FaSync /></button></h2>
            <div className="score-board">
                <ol>
                    {(prizes) ? renderList() : null}
                </ol>
            </div>
        </section>
    );

}

const mapStateToProps = state => {
    return {
        prizes: state.game.tournament.prizeList
    }
}

export default connect(mapStateToProps, { fetchGames })(PrizeList);