import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class NotLoggedIn extends Component {
  render() {
    const handleSignInClick = this.props.handleSignInClick;
    return (
      <div>
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
