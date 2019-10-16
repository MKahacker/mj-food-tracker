import * as React from 'react';
import './App.css';
import ServingForm from './serving-form';
import WelcomePage from './welcome-page';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div>
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
        <Route path="/" exact component={WelcomePage} />
        <Route path="/serving" exact component={ServingForm}/>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <WelcomePage />
    //     <ServingForm/>
    //   </header>
    // </div>
  );
}

export default App;
