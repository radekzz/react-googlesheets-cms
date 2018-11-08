import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CreateTemplate from "./CreateTemplate";
import NotFound from "./NotFound";
import StartPage from "./StartPage";
import EditExistingPage from "./EditExistingPage";
import ViewExistingPage from "./ViewExistingPage";
import config from "../googleapi/config";
import { loadSomething } from "../googleapi/datacontact";

export default class Router extends Component {
  state = {
    loading: true,
    isLoggedIn: false,
    username: "",
    email: "example@ebay.com",
    templates: [],
    error: null
  };

  componentDidMount = () => {
    this.initGapi();
  };

  initGapi = () => {
    console.log("Initializing GAPI...");
    console.log("Creating the google script tag...");

    const script = document.createElement("script");
    script.onload = () => {
      console.log("Loaded script, now loading our api...");
      // Gapi isn't available immediately so we have to wait until it is to use gapi.
      this.loadClientWhenGapiReady(script);
    };
    script.src = "https://apis.google.com/js/client.js";

    document.body.appendChild(script);
  };

  loadClientWhenGapiReady = script => {
    console.log("Trying To Load Client!");
    console.log(script);
    if (script.getAttribute("gapi_processed")) {
      console.log("Client is ready! Now you can access gapi. :)");
      window.gapi.load("client:auth2", this.initClient);
    } else {
      console.log("Client wasn't ready, trying again in 100ms");
      setTimeout(() => {
        this.loadClientWhenGapiReady(script);
      }, 100);
    }
  };

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        clientId: config.CLIENT_ID,
        scope: config.SCOPE,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        window.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(this.updateSignInStatus);
        this.updateSignInStatus(
          window.gapi.auth2.getAuthInstance().isSignedIn.get()
        );
        this.setState({ loading: false });
      });
  };

  handleSignInClick = event => {
    console.log(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    // var isSignedIn = this.updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());

    window.gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(function() {
        console.log(window.gapi.auth2.currentUser.get().getId());
      });
  };

  handleSignOutClick = event => {
    window.gapi.auth2
      .getAuthInstance()
      .disconnect()
      .then(function() {
        console.log("You have been signed out");
      });

    this.setState({
      email: "",
      isLoggedIn: false
    });
  };
  updateSignInStatus = isSignedIn => {
    if (isSignedIn) {
      this.registerUser();
      loadSomething(this.onLoad);
    }
  };

  registerUser = () => {
    this.setState({
      isLoggedIn: true,
      email: window.gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getBasicProfile()
        .getEmail(),
      username: window.gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getBasicProfile()
        .getName()
    });
    console.log(
      "Logged in as " + this.state.username + " with email " + this.state.email
    );
  };

  onLoad = (data, error) => {
    if (data) {
      const templates = data.templates.reverse();
      this.setState({ templates });
    } else {
      this.setState({ error });
    }
  };

  getAllSparcIDs(templates) {
    let sparcArray = [];
    templates.forEach(function(element) {
      sparcArray.push(element.sparcid);
    });
    const sparcString = sparcArray.join(" ");
    return sparcString;
  }

  render() {
    if (this.state.loading) {
      return null; // while async loads
    }

    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <StartPage
                isLoggedIn={this.state.isLoggedIn}
                username={this.state.username}
                email={this.state.email}
                templates={this.state.templates}
                handleSignInClick={this.handleSignInClick}
                handleSignOutClick={this.handleSignOutClick}
              />
            )}
          />
          <Route
            path="/new"
            render={() => (
              <CreateTemplate
                isLoggedIn={this.state.isLoggedIn}
                email={this.state.email}
                allSparcIDs={this.getAllSparcIDs(this.state.templates)}
              />
            )}
          />
          <Route
            path="/edit/:sparcid"
            render={context => (
              <EditExistingPage
                isLoggedIn={this.state.isLoggedIn}
                username={this.state.username}
                email={this.state.email}
                templates={this.state.templates}
                handleSignInClick={this.handleSignInClick}
                router={context}
              />
            )}
          />
          <Route
            path="/view/:sparcid"
            render={context => (
              <ViewExistingPage
                isLoggedIn={this.state.isLoggedIn}
                username={this.state.username}
                email={this.state.email}
                templates={this.state.templates}
                updateSignInStatus={this.updateSignInStatus}
                router={context}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}
