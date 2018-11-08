import React, { Component } from "react";
import NavTerms from "./Layout/NavTerms";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <NavTerms />
        <div className="ski-container--960 ski-terms__body">
          <h2>We're Sorry. This page was not Found!</h2>
          <br />
          <Link to="/">Back to the homepage...</Link>
        </div>
      </div>
    );
  }
}
