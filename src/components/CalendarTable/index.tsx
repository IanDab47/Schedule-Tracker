// React
import React from 'react';
import { useState, useEffect } from 'react';

// Typing
export interface Props {}

// Styles
import './style.css';

const CalendarTable: React.FC<Props> = (props) => {
    // States
    const [initTime, setInitTime] = useState(700);
    const [endTime, setEndTime] = useState(100);
    const [times, setTimes] = useState([0]);

    // Hooks
    useEffect(() => {
        let time = initTime;
        let generatedTimes = [];

        while (time !== endTime) {
            generatedTimes.push(time);
            time += 25;
            if (time === 2400) time = 0;
        }
        generatedTimes.push(time);
        setTimes(generatedTimes);
    }, [initTime]);

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
                <div
                    className={`TASK relative grid grid-rows-[repeat(${times.length},minmax(0,1fr))]`}
                >
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                </div>
                <div
                    className={`TASK relative grid grid-rows-[repeat(${times.length},minmax(0,1fr))]`}
                >
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                    <div className="relative text-md text-center py-1"></div>
                </div>
            </div>
        </div>
    );
};

export default CalendarTable;
