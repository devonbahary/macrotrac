import React from 'react';
import './Time.css';

function Time(props) {
    const date = new Date();

    const daysOfTheWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    return (
        <div className="Time">
            <div className="Time-dateContainer centered">
                <div className="Time-day txt-theme">{daysOfTheWeek[date.getDay()]}</div>
                <div className="Time-date">{date.toLocaleDateString()}</div>
            </div>
        </div>
    );
}

export default Time;
