// React
import React from 'react';

// Typing
export interface Props {
    weekType: string[];
}

// Styles
import './style.css';

const DateHeaders: React.FC<Props> = ({ weekType }) => {
    return (
        <div className="grid grid-cols-[1fr_repeat(7,2fr)] text-center">
            {weekType.map((date: string, i: number) => {
                return (
                    <div
                        key={`date_${date}`}
                        className={`DAY ${i === 0 ? 'w-1/2' : ''}`}
                    >
                        <p>{date}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default DateHeaders;
