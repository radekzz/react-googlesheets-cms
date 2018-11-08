import React, { Component } from "react";
import NavTerms from "./Layout/NavTerms";
import FooterTerms from "./Layout/FooterTerms";
import { withStyles } from "@material-ui/core/styles";
import NotLoggedIn from "./LoginPage/NotLoggedIn";
import LoggedIn from "./LoginPage/LoggedIn";
import NonEbayEmail from "./LoginPage/NonEbayEmail";

const styles = () => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  }
});

class StartPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavTerms email={this.props.email} username={this.props.username} />
        <div className="ski-container--960 ski-terms__body">
          <h2>Welcome {this.props.username} to the Template Editor</h2>
          {this.props.isLoggedIn ? (
            // if logged in
            this.props.email.includes("ebay.com") ? (
              <LoggedIn templates={this.props.templates} />
            ) : (
              <NonEbayEmail
                handleSignOutClick={this.props.handleSignOutClick}
              />
            )
          ) : (
            // if not logged in
            <NotLoggedIn handleSignInClick={this.props.handleSignInClick} />
          )}
        </div>
        <FooterTerms />
      </div>
    );
  }
}

export default withStyles(styles)(StartPage);
