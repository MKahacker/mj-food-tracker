import React, { Component } from 'react';
import ServingForm from './serving-form';
import { Link } from "react-router-dom";

export default class WelcomePage extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to Chop</h1>
        <Link to="/ingredients"> Enter ingredients </Link>
        <Link to="/serving"> Enter Meals </Link>
      </div>
    )
  }
}
