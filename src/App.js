import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="App-header">
    <h1 style={{ color: 'white' }}>SOSO Satellite Optimizer</h1>
    <div className="button-container">
      <button className="button">Add Satellite</button>
      <button className="button">Add Ground Station</button>
      <button className="button">Add Task</button>
      <button className="button">Perform Scheduling</button>
    </div>
  </header>
  );
}

export default App;
