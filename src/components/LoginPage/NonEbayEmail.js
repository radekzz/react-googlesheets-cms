import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class NonEbayEmail extends Component {
  render() {
    const handleSignOutClick = this.props.handleSignOutClick;
    return (
      <div>
        <br />
        <h3>
          {" "}
          You have logged in using a non-eBay email address.
          <br />
          Please Logout and log back in with your eBay email:
        </h3>
        <Button
          variant="contained"
          size="large"
          color="primary"
          id="signin-button"
          onClick={handleSignOutClick}>
          Log Out
        </Button>
      </div>
    );
  }
}

export default NonEbayEmail;
