import React from 'react';
import { connect } from 'react-redux';
import './GameList.css'

const GameList = ({ games }) => {

    const renderList = () => {
        return games.map((game, index) => {
            return <li><img key={game.title} src={game.src} alt={game.title} /></li>;
        })
    }


    return (
        <section className="game-list">
            <h2>Include Games</h2>
            <ul>
                {(games) ? renderList() : null}
            </ul>
        </section>
    );

}

const mapStateToProps = state => {
    return {
        games: state.game.tournament.games
    }
}

export default connect(mapStateToProps)(GameList);