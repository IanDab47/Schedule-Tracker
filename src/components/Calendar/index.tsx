// React
import React from 'react';

// Typing
export interface Props {
    weekType: string[];
}

// Components
import DateHeaders from '../DateHeaders';
import CalendarTable from '../CalendarTable';

// Styles
import './style.css';

const Calendar: React.FC<Props> = ({ weekType }) => {
    return (
        <section className="CALENDAR w-5/6 max-w-screen-xl rounded-xl p-8 mx-auto my-16 bg-zinc-900">
            <DateHeaders weekType={weekType} />

            <CalendarTable weekType={weekType} />
        </section>
    );
};

export default Calendar;
