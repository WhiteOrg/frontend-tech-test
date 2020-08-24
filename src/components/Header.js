import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addDays } from '../helpers'

import Countdown from './Countdown'


const Header = props => {

    const { title, prizePool, players, backgroundImage } = props.content;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    useEffect(() => {
        setStartDate(addDays(startDate, 7))
        setEndDate(addDays(endDate, 14));
    }, [])


    const renderStartDate = () => {
        return `Starts on 
        ${startDate.toLocaleString('default', { weekday: 'short' })} , 
        ${startDate.getDate()}
        ${startDate.toLocaleString('default', { month: 'short' })} 
        ${startDate.getFullYear()}, 
        ${startDate.getHours()}:${startDate.getMinutes()} GMT`;
    };

    return (
        <header style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>{title}</h1>

            <Countdown startDate={startDate} endDate={endDate} />


            <ul>
                <li><b>Prize Pool</b> {prizePool}</li>
                <li><b>Player</b> {players}</li>
            </ul>

            <p>{renderStartDate()}</p>

            <a href="https://github.com/WhiteOrg/frontend-tech-test">Join</a>
        </header>
    )

};

const mapStateToProps = state => {
    return {
        content: state.game.tournament
    }
}

export default connect(mapStateToProps)(Header);

//2020-08-06T10:06:29.578Z

