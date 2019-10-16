import * as React from 'react';
import './App.scss';
import ServingForm from './serving-form';
import WelcomePage from './welcome-page';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Welcome</Link>
              </li>
              <li>
                <Link to="/serving">Enter Serving</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/serving">
            <ServingForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
