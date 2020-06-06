import * as React from 'react';
import './App.scss';
import ServingForm from './pages/serving-form';
import WelcomePage from './pages/welcome-page';
import MealForm from './pages/meal-form'
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
          <Route path="/meal">
            <MealForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
