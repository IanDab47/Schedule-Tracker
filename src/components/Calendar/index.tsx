// React
import React from 'react';

// Typing
export interface Props {
    weekType: string[];
}

// Components
import DateHeaders from '../DateHeaders';

// Styles
import './style.css';

const Calendar: React.FC<Props> = ({ weekType }) => {
    return (
        <section className="CALENDAR flex justify-between text-center w-5/6 max-w-screen-xl rounded-xl p-8 mx-auto my-16 bg-zinc-900">
            <DateHeaders weekType={weekType} />
        </section>
    );
};

export default Calendar;
