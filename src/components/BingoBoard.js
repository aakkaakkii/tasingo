import React from 'react';
import BingoCell from './BingoCell';
import './BingoBoard.css';

function BingoBoard({ days, onMarkDay }) {
    return (
        <div className="bingo-board">
            <div className="board-grid">
                {days.map((day, index) => (
                    <BingoCell
                        key={index}
                        day={day.day}
                        selected={day.selected}
                        marked={day.marked}
                        onClick={() => onMarkDay(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default BingoBoard;
