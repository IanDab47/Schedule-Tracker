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
        <>
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
        </>
    );
};

export default DateHeaders;
