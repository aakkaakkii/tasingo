import React from 'react';
import './BingoCell.css';

function BingoCell({ day, selected, marked, onClick }) {
  const cellClass = `bingo-cell ${selected ? 'selected' : ''} ${marked ? 'marked' : ''}`;

  return (
      <div
          className={cellClass}
          onClick={onClick}
      >
        <span className="day-number">{day}</span>
        {selected && (
            <div className="selection-indicator">●</div>
        )}
      </div>
  );
}

export default BingoCell;
