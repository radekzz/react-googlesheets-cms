import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class NotLoggedIn extends Component {
  render() {
    const handleSignInClick = this.props.handleSignInClick;
    return (
      <div>
        <br />
        <h3>
          {" "}
          To use this app, please use your <u>eBay email address:</u>
        </h3>
        <Button
          variant="contained"
          size="large"
          color="primary"
          id="signin-button"
          onClick={handleSignInClick}>
          Log In to Google Account
        </Button>
      </div>
    );
  }
}

export default NotLoggedIn;
