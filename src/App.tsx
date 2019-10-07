import React from 'react';
import './App.css';
import ServingForm from './serving-form';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ServingForm/>
      </header>
    </div>
  );
}

export default App;
