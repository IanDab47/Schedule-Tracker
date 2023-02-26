// React
import React from 'react';
import { useState, useEffect } from 'react';

// Typing
export interface Props {
    weekType: string[];
}

// Styles
import './style.css';

const CalendarTable: React.FC<Props> = ({ weekType }) => {
    // States
    const [week, setWeek] = useState<string[]>(weekType);
    const [initTime, setInitTime] = useState<number>(700);
    const [endTime, setEndTime] = useState<number>(100);
    const [times, setTimes] = useState<number[]>([0]);

    // Hooks
    useEffect(() => {
        // Edit week array
        let tempWeek = [...weekType];
        tempWeek.shift();
        setWeek(tempWeek);

        // Set schedule based on init time
        let time = initTime;
        let generatedTimes = [];

        while (time !== endTime) {
            generatedTimes.push(time);
            time += 25;
            if (time === 2400) time = 0;
        }
        generatedTimes.push(time);
        setTimes(generatedTimes);
    }, [weekType, initTime, endTime]);

    return (
        <div className="TABLE grid grid-cols-[1fr_14fr]">
            <div className="TIMES mt-2">
                {times.map((tableTime) => {
                    return (
                        <div
                            key={tableTime}
                            className="text-md font-thin text-center py-1"
                        >
                            {Math.floor(tableTime / 100)
                                .toString()
                                .padStart(2, '0')}
                            :
                            {((tableTime % 100) * 0.6)
                                .toString()
                                .padStart(2, '0')}
                        </div>
                    );
                })}
            </div>
            <div className="TASK-COLUMN relative grid grid-cols-7 mt-2">
                {week.map((day) => {
                    return (
                        <div
                            key={day}
                            className={`TASK relative grid grid-rows-[repeat(${times.length},minmax(0,1fr))] isolate`}
                        >
                            {[...Array(times.length).keys()].map((el) => {
                                return (
                                    <div
                                        key={`${day}:${el}`}
                                        className="CELL relative text-md text-center py-1"
                                    >
                                        {day}: {el}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarTable;
