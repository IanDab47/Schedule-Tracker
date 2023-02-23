// React
import React from 'react';
import { useState } from 'react';

// Typing
export interface Props {
    WeekType: any;
    setWeekType: any;
}

// Styles
import './style.css';

const DateToggle: React.FC<Props> = ({ WeekType, setWeekType }) => {
    // Handlers
    const handleSubmit = (e: Event) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={(e) => handleSubmit}>
            <div className="w-max" onClick={() => setWeekType(WeekType.int)}>
                <input type={'radio'} id="international" name="weektype" />
                <label htmlFor="international"> International</label>
            </div>
            <div className="w-max" onClick={() => setWeekType(WeekType.usa)}>
                <input type={'radio'} id="america" name="weektype" />
                <label htmlFor="america"> America</label>
            </div>
        </form>
    );
};

export default DateToggle;
