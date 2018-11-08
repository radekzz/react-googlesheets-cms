import React, { Component } from "react";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import config from "../../googleapi/config";
import FormColumnFields from "./FormColumnFields";

export default class FormColumnCreate extends Component {
  state = {
    duplicateId: false
  };

  appendSomething = event => {
    event.preventDefault();
    const props = this.props.details;
    console.log("Money!");
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
              0
            ]
          ]
        }
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

  checkDuplicateIDs = value => {
    if (this.props.allSparcIDs.includes(value + " ")) {
      this.setState({
        duplicateId: true
      });
    } else {
      this.setState({
        duplicateId: false
      });
    }
  };

  render() {
    const details = this.props.details;

    return (
      <React.Fragment>
        {details.redirect ? (
          <Redirect to={`/view/${details.sparcid}`} />
        ) : (
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
              sellerAddItem={this.props.sellerAddItem}
              sellerRemoveItem={this.props.sellerRemoveItem}
              sellerItemNameChange={this.props.sellerItemNameChange}
              categoryAddItem={this.props.categoryAddItem}
              categoryRemoveItem={this.props.categoryRemoveItem}
              categoryItemNameChange={this.props.categoryItemNameChange}
              duplicateId={this.state.duplicateId}
              checkDuplicateIDs={this.checkDuplicateIDs}
            />
            <Button
              disabled={
                this.state.duplicateId || this.props.details.template === "new"
                  ? true
                  : false
              }
              variant="contained"
              color="primary"
              type="submit"
              className="primarySubmit"
              style={{ marginLeft: 18 + "px" }}>
              Submit
            </Button>
          </form>
        )}
      </React.Fragment>
    );
  }
}
