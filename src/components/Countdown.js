import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { calculateRemaining } from '../helpers'

const Countdown = ({ startDate, endDate }) => {

    const [remainingTime, setRemainingTime] = useState({});
    const currentDate = new Date();

    useEffect(() => {
        setRemainingTime(calculateRemaining(startDate));

        const timer = setInterval(() => {
            const remaining = calculateRemaining(startDate);
            setRemainingTime(calculateRemaining(startDate));
            if (_.isEmpty(remaining)) { clearInterval(timer) };
        }, 500);

        // Clear timeout if the component is unmounted
        return () => clearInterval(timer);
    }, [startDate, endDate])

    const renderCountDown = () => {
        const countdown = [];
        Object.keys(remainingTime).forEach((interval) => {
            if (!remainingTime[interval]) return;
            countdown.push(
                <React.Fragment><span key={interval} className="unit">{remainingTime[interval]}</span>{interval} </React.Fragment >
            );
        });
        return countdown;
    };

    if (startDate > currentDate) {
        return <p className="countdown">Starts at {renderCountDown()}</p>
    } else if (currentDate > startDate && currentDate < endDate) {
        return <p className="countdown">Tournament is now in progress...</p>
    } else {
        return <p className="countdown">Tournament has expired</p>
    }

};

export default Countdown;