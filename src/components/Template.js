import React, { Component } from "react";
import MultiSeller from "./templates/MultiSeller";
import SingleSeller from "./templates/SingleSeller";
import Verticals from "./templates/Verticals";

export default class Template extends Component {
  state = {};

  componentDidMount() {
    if (this.props.values) {
      this.setState(this.props.values);
    }
  }

  componentWillReceiveProps({ values }) {
    this.setState(values);
  }

  dateTextformat(myDate) {
    const datePart = new Date(myDate);
    const date = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long"
    }).format(datePart);
    const dateDayPart = datePart.getUTCDate();
    const dateDay = dateDayPart + this.ordinalIndicator(dateDayPart);
    var dateFormat = {};
    dateFormat.date = date;
    dateFormat.dateDay = dateDay;

    return dateFormat;
  }

  ordinalIndicator(dayString) {
    if (dayString > 3 && dayString < 21) return "th"; // thanks kennebec
    switch (dayString % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  militaryToAmPm(timeString) {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 ? "am" : "pm";
    timeString = h + timeString.substr(2, 3) + ampm;
    return timeString;
  }

  render() {
    if (!this.state.template) {
      return (
        <div className="ski-container--960 ski-terms__body">
          <h2>Loading ...</h2>
        </div>
      );
    } else {
      switch (this.state.template) {
        case "multiseller":
          return (
            <MultiSeller
              template={this.state}
              militaryToAmPm={this.militaryToAmPm}
              ordinalIndicator={this.ordinalIndicator}
              dateTextformat={this.dateTextformat}
            />
          );
        case "singleseller":
          return (
            <SingleSeller
              template={this.state}
              militaryToAmPm={this.militaryToAmPm}
              ordinalIndicator={this.ordinalIndicator}
              dateTextformat={this.dateTextformat}
            />
          );
        case "verticals":
          return (
            <Verticals
              template={this.state}
              militaryToAmPm={this.militaryToAmPm}
              ordinalIndicator={this.ordinalIndicator}
              dateTextformat={this.dateTextformat}
            />
          );
        case "new":
          return (
            <div className="ski-container--960 ski-terms__body">
              <h2>Please select a template</h2>
            </div>
          );
        default:
          //case "not found"
          return (
            <div className="ski-container--960 ski-terms__body">
              <h2>No Template for this ticket ID</h2>
            </div>
          );
      }
    }
  }
}
