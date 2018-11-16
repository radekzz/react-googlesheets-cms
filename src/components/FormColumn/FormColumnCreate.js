import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import config from "../googleapi/config";
import FormColumnFields from "./FormColumnFields";

export default class FormColumnCreate extends Component {
  state = {
    badSparcID: false
  };

  appendSomething = event => {
    event.preventDefault();
    const props = this.props.details;
    window.gapi.client.sheets.spreadsheets.values
      .append({
        spreadsheetId: config.spreadsheetId,
        range: "Form Responses 1",
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        resource: {
          values: [
            [
              new Date().toISOString(),
              props.sparcid,
              props.categories,
              props.endtime,
              props.enddate,
              props.couponid,
              props.discountvalue,
              props.minspend,
              props.maxdiscount,
              props.starttime,
              props.startdate,
              props.template,
              props.sellers,
              props.redemptions,
              props.title,
              props.email,
              0,
              '',
              props.metaTitle,
              props.metaDescription,
            ]
          ]
        }
      })
      .then(response => {
        console.log(response);
      })
      .then(() => {
        this.props.redirectToView();
        this.props.clearLocalStorage();
      })
      .catch(err => {
        if (err) console.log(err);
      });
  };

  validateSparcID = value => {
    const sparcIdRegExp = new RegExp("^(?:EU|NA|GROWTH)(?:PLA|OPS)-[0-9]{5}$");
    if (
      this.props.allSparcIDs.includes(value + " ") ||
      !sparcIdRegExp.test(value)
    ) {
      this.setState({
        badSparcID: true
      });
    } else {
      this.setState({
        badSparcID: false
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form id="test-form" onSubmit={this.appendSomething}>
          <Typography
            variant="subheading"
            color="inherit"
            noWrap
            style={{ marginLeft: 18 + "px", marginTop: 22 + "px" }}>
            Please enter Template details...
          </Typography>
          <FormColumnFields
            template={this.props.template}
            changeValue={this.props.changeValue}
            details={this.props.details}
            updateSeller={this.props.updateSeller}
            updateSellers={this.props.updateSellers}
            updateCategories={this.props.updateCategories}
            updateListinView={this.props.updateListinView}
            handleMultilineChange={this.props.handleMultilineChange}
            badSparcID={this.state.badSparcID}
            validateSparcID={this.validateSparcID}
          />
          <Button
            disabled={
              this.state.badSparcID ||
                this.props.details.template === "new" ||
                this.props.details.sellers.includes("ERROR")
                ? true
                : false
            }
            variant="contained"
            color="primary"
            type="submit"
            className="primarySubmit"
            style={{ marginLeft: 18 + "px" }}>
            Save
          </Button>
        </form>
      </React.Fragment>
    );
  }
}
