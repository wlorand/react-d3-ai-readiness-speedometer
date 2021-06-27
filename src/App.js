// react
import React from 'react';

// speedomter
import ReactSpeedometer from 'react-d3-speedometer';

// styles
import './styles/globals.css';

function App() {
  return (
    <>
      <header className="app-header">
        <h1>A.I. Readiness Speedometer</h1>
      </header>
      <div className="gauge-container">
        <ReactSpeedometer
          width={400}
          value={622}
          currentValueText="A.I. Readiness"
          segments={5}
          customSegmentLabels={[
            {
              text: 'Poor',
              position: 'INSIDE',
              color: '#555',
            },
            {
              text: 'Fair',
              position: 'INSIDE',
              color: '#555',
            },
            {
              text: 'OK',
              position: 'INSIDE',
              color: '#555',
              fontSize: '19px',
            },
            {
              text: 'Good',
              position: 'INSIDE',
              color: '#555',
            },
            {
              text: 'Great',
              position: 'INSIDE',
              color: '#555',
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
