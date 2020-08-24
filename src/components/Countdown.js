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
                <span key={interval}>
                    {remainingTime[interval]} {interval}{" "}
                </span>
            );
        });
        return countdown;
    };

    if (startDate > currentDate) {
        return renderCountDown();
    } else if (currentDate > startDate && currentDate < endDate) {
        return 'Tournament In progress...'
    } else {
        return 'expired'
    }

};

export default Countdown;