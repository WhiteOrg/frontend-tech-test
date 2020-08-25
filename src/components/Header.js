import React, { useEffect, useState } from 'react';
import { FaTimesCircle, FaUser, FaCalendarAlt, FaTimes } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { connect } from 'react-redux';
import { addDays } from '../helpers'

import Countdown from './Countdown'
import './Header.css';


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
        ${startDate.toLocaleString('default', { weekday: 'short' })}, 
        ${startDate.getDate()}
        ${startDate.toLocaleString('default', { month: 'short' })} 
        ${startDate.getFullYear()}, 
        ${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getHours()}:${startDate.getSeconds()} GMT`;
    };

    return (
        <header style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="top">
                <h1>{title}</h1>
                <button className="close">
                    <IoIosClose />
                </button>
            </div>

            <Countdown startDate={startDate} endDate={endDate} />

            <ul className="list">
                <li><b>Prize Pool</b> {prizePool}</li>
                <li><b>Player</b> <FaUser size={25} />{players}</li>
            </ul>

            <p className="start-date"><FaCalendarAlt />{renderStartDate()}</p>

            <a href="https://github.com/WhiteOrg/frontend-tech-test" className="cta">Join</a>
        </header >
    )

};

const mapStateToProps = state => {
    return {
        content: state.game.tournament
    }
}

export default connect(mapStateToProps)(Header);

//2020-08-06T10:06:29.578Z

