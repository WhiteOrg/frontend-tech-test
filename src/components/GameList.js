import React from 'react';
import { connect } from 'react-redux';

const GameList = ({ games }) => {

    const renderList = () => {
        return games.map((game, index) => {
            return <img key={game.title} src={game.src} alt={game.title} />;
        })
    }


    return (
        <section>
            <h2>Include Games</h2>
            <ol>
                {(games) ? renderList() : null}
            </ol>
        </section>
    );

}

const mapStateToProps = state => {
    return {
        games: state.game.tournament.games
    }
}

export default connect(mapStateToProps)(GameList);