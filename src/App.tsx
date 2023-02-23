// React
import { useState } from 'react';

// Components
import Calendar from './components/Calendar';
import DateToggle from './components/DateToggle';

const WeekType = {
    int: [
        '',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ],
    usa: [
        '',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
};

export default function App() {
    const [weekType, setWeekType] = useState(WeekType.int);

    return (
        <div className="mx-8 my-4">
            <h1 className="text-9xl">SCHEDULE</h1>
            <p className="text-lg">
                Look at your week. Set it up like a geek. Fill out your day.
                Complete it your way.
            </p>

            <DateToggle WeekType={WeekType} setWeekType={setWeekType} />

            <Calendar weekType={weekType} />
        </div>
    );
}
