import React, { Component } from "react";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import config from "../googleapi/config";
import FormColumnFields from "./FormColumnFields";

export default class FormColumnEdit extends Component {
  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.props.changeValue(name, value);
  };

  updateSomething = rowNumber => {
    const props = this.props.details;
    window.gapi.client.sheets.spreadsheets.values
      .update({
        spreadsheetId: config.spreadsheetId,
        range: "Form Responses 1!A" + rowNumber + ":T" + rowNumber,
        valueInputOption: "USER_ENTERED",
        majorDimension: "ROWS",
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
            this.props.email,
            "2",
            props.users,
            props.metaTitle,
            props.metaDescription
          ]
        ]
      })
      .then(response => {
        console.log(response);
      })
      .then(() => {
        this.props.redirectToView();
      })
      .catch(err => {
        if (err) console.log(err);
      });
  };

  getRowNumber = event => {
    event.preventDefault();
    const props = this.props.details;
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        majorDimension: "COLUMNS",
        range: "Form Responses 1!B:B"
      })
      .then(
        response => {
          const data = response.result.values[0];
          const rowNumber = data.indexOf(props.sparcid) + 1;
          this.updateSomething(rowNumber);
        },
        response => {
          console.log(response.result.error);
        }
      );
  };

  render() {
    const details = this.props.details;

    return (
      <React.Fragment>
        {details.redirect ? (
          <Redirect to={`/${this.props.country}/view/${details.sparcid}`} />
        ) : (
          <form id="test-form" onSubmit={this.getRowNumber}>
            <Typography
              variant="subheading"
              color="inherit"
              noWrap
              style={{ marginLeft: 18 + "px", marginTop: 22 + "px" }}>
              Please Edit Template Details
            </Typography>
            <FormColumnFields
              changeValue={this.props.changeValue}
              details={this.props.details}
              lockSparcId={true}
              updateSeller={this.props.updateSeller}
              updateSellers={this.props.updateSellers}
              updateCategories={this.props.updateCategories}
              updateListinView={this.props.updateListinView}
              handleMultilineChange={this.props.handleMultilineChange}
            />
            <Button
              variant="contained"
              disabled={details.sellers.includes("ERROR") ? true : false}
              color="primary"
              type="submit"
              className="primarySubmit"
              style={{ marginLeft: 22 + "px" }}>
              Update
            </Button>
          </form>
        )}
      </React.Fragment>
    );
  }
}
