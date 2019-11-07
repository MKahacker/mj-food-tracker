import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/welcome-page.scss'

export default class WelcomePage extends Component {
  render() {
    const cssClass = 'welcome-page'
    return (
      <div className={cssClass}>
        <h1> Welcome to Chop</h1>
        <div>
          <Link to="/meal"> Enter Meal </Link>
          <Link to="/serving"> Enter Ingredients </Link>
        </div>
      </div>
    )
  }
}
