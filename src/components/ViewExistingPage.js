import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Template from "./Template";
import DevPanel from "./DevPanel/DevPanel";
import PrevPanel from "./PrevPanel/PrevPanel";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: 0,
    paddingBottom: theme.padding,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  }
});
class ViewExistingPage extends Component {
  findTicketKey = url => {
    const key = url.replace("/view/", "");
    return key;
  };

  state = {
    open: false,
    anchor: "left",
    ticketKey: this.findTicketKey(this.props.router.match.url),
    ticketTemplate: null,
    devEmails:
      "addrake@ebay.com mkastil@ebay.com yfaltas@ebay.com rmezulanik@ebay.com phoffman@ebay.com kmdellanna@ebay.com mjones6@ebay.com"
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  pickTemplate = ticketKey => {
    let matchTickets = this.props.templates.filter(
      template => template.sparcid === ticketKey
    );
    let match = matchTickets[matchTickets.length - 1];
    if (matchTickets.length === 0) {
      match = { template: "not found" };
    }
    return match;
  };

  componentDidMount() {
    this.props.updateSignInStatus(this.props.isLoggedIn);
    if (this.props.templates.length) {
      this.setState({
        ticketTemplate: this.pickTemplate(this.state.ticketKey)
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.templates !== prevProps.templates) {
      this.setState({
        ticketTemplate: this.pickTemplate(this.state.ticketKey)
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    if (this.props.error) {
      return <div>{this.props.error}</div>;
    }

    if (this.props.isLoggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}>
            <Template values={this.state.ticketTemplate} />
            < PrevPanel ticketNumber={this.state.ticketKey} />
          </main>
          {this.state.devEmails.includes(this.props.email) && <DevPanel />}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ViewExistingPage);
