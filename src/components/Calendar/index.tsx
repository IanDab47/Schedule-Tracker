// React
import React from 'react';

// Typing
export interface Props {
    weekType: string[];
}

// Styles
import './style.css';

const Calendar: React.FC<Props> = ({ weekType }) => {
    const dateHeaders = weekType.map((date: string, i: number) => {
        return (
            <div
                key={`date_${date}`}
                className={`DAY ${i === 0 ? 'w-1/2' : ''}`}
            >
                <p>{date}</p>
            </div>
        );
    });

    return (
        <section className="CALENDAR flex justify-between text-center w-5/6 max-w-screen-xl rounded-xl p-8 mx-auto my-16 bg-zinc-900">
            {dateHeaders}
        </section>
    );
};

export default Calendar;
