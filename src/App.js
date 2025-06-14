import React, { useState, useEffect } from 'react';
import BingoBoard from './components/BingoBoard';
import './App.css';
// Import the configuration

function App() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch('/bingoConfig.json')
        .then(response => response.json())
        .then(data => {
          console.log('Loaded config:', data);
          setDays(data.days);
        })
        .catch(error => console.error('Error loading config:', error));
  }, []);


  const handleMarkDay = (dayIndex) => {
    if (days[dayIndex].selected) {
      const newDays = [...days];
      newDays[dayIndex].marked = !newDays[dayIndex].marked;
      setDays(newDays);

    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>ტასინგო</h1>
        </header>

        <BingoBoard
            days={days}
            onMarkDay={handleMarkDay}
        />
      </div>
  );
}

export default App;
