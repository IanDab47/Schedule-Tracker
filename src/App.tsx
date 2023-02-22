// React
import { useState } from 'react';

// Components
import Calendar from './components/Calendar';

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

    // Handlers
    const handleSubmit = (e: Event) => {
        e.preventDefault();
    };

    return (
        <div className="mx-8 my-4">
            <h1 className="text-9xl">SCHEDULE</h1>
            <p className="text-lg">
                Look at your week. Set it up like a geek. Fill out your day.
                Complete it your way.
            </p>

            <form onSubmit={(e) => handleSubmit}>
                <div>
                    <input type={'radio'} id="international" checked />
                    <label htmlFor="international"> International</label>
                </div>
                <div>
                    <input type={'radio'} id="america" />
                    <label htmlFor="america"> America</label>
                </div>
            </form>

            <Calendar weekType={weekType} />
        </div>
    );
}
