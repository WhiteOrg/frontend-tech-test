import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { calculateRemaining } from '../helpers'

const Countdown = ({ startDate, endDate }) => {

    const [remainingTime, setRemainingTime] = useState({});
    const currentDate = new Date();

    useEffect(() => {
        setRemainingTime(calculateRemaining(getCounterDate()));

        const timer = setInterval(() => {
            const remaining = calculateRemaining(getCounterDate());
            setRemainingTime(remaining);
            if (_.isEmpty(remaining)) { clearInterval(timer) };
        }, 1000 * 60);

        // Clear timeout if the component is unmounted
        return () => clearInterval(timer);
    }, [startDate, endDate])

    //pick which date to compare against
    const getCounterDate = () => {
        if (startDate > currentDate) { return startDate }
        else if (currentDate > startDate && currentDate < endDate) { return endDate }
    }

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
        return <p className="countdown">Ends {renderCountDown()}</p>
    } else {
        return <p className="countdown">Tournament has finished.</p>
    }

};

export default Countdown;