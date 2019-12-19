import React from 'react';
import Chart from './Chart';
import API from './API';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          SVGJS-DEMO
        </p>
      </header>
      <aside className="App-aside">
        <h1>侧边栏</h1>
      </aside>
      <div className="App-content">
        <div className='App-chart'>
          <Chart />
        </div>
        <div className='App-api'>
          <API />
        </div>
      </div>
    </div>
  );
}

export default App;
