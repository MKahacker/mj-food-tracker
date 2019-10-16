import * as React from 'react';
import './App.css';
import ServingForm from './serving-form';
import WelcomePage from './welcome-page';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomePage />
        <ServingForm/>
      </header>
    </div>
  );
}

export default App;
