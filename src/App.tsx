// React
import { useState, useEffect } from 'react';

// Components
import Calendar from './components/Calendar';
import DateToggle from './components/DateToggle';

// Styles
import './App.css';

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
    const [weekType, setWeekType] = useState<string[]>(WeekType.int);

    return (
        <div className="mx-8 my-4">
            <h1 className="text-9xl">SCHEDULE</h1>
            <p className="text-lg">
                Look at your week. Set it up like a geek. Fill out your day.
                Complete it your way.
            </p>

            <DateToggle WeekType={WeekType} setWeekType={setWeekType} />

            <div className="INPUTS xl:w-5/6 max-w-screen-xl mx-auto">
                <form
                    className="w-[max-content]"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <p>Enter your task, start time, and end time: </p>
                    <div className="TEXT-INPUT flex justify-between">
                        <label>Task Name: </label>
                        <input type="text" required />
                    </div>
                    <div className="TEXT-INPUT flex justify-between">
                        <label>Start Time: </label>
                        <input
                            type="text"
                            pattern="[0-9][0-9]:[0-9][0-9]"
                            required
                        />
                    </div>
                    <div className="TEXT-INPUT flex justify-between">
                        <label>End Time: </label>
                        <input
                            type="text"
                            pattern="[0-9][0-9]:[0-9][0-9]"
                            required
                        />
                    </div>
                    <button
                        className="bg-zinc-100 hover:bg-zinc-200 text-black font-medium rounded-md py-2 px-6 mt-2 hover:shadow-[inset_0_0_.35rem_#888]"
                        type="submit"
                    >
                        Add Task
                    </button>
                </form>
            </div>

            <Calendar weekType={weekType} />
        </div>
    );
}
