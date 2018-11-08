import React, { Component } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

import classNames from "classnames";

const drawerWidth = 300;
const styles = theme => ({
  appBar: {
    position: "fixed",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  }
});

class AppBarEbay extends Component {
  render() {
    const { classes } = this.props;
    const { open } = this.props.details;

    return (
      <Toolbar disableGutters={true}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.props.handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppBarEbay);
