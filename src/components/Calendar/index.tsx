// React
import React from 'react';
import { useState, useEffect } from 'react';

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
    const [week, setWeek] = useState<string[]>(weekType);

    useEffect(() => setWeek(weekType), [weekType]);

    return (
        <section className="CALENDAR xl:w-5/6 max-w-screen-xl rounded-xl p-8 mx-auto my-16 bg-zinc-900">
            <DateHeaders weekType={week} />

            <CalendarTable weekType={week} />
        </section>
    );
};

export default Calendar;
