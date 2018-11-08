import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import IssueFormDialog from "../IssueFormDialog/IssueFormDialog";

const styles = theme => ({
  root: {
    width: "100%"
  },
  skinnyWidth: {
    width: "1024px",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  logoImg: {
    height: "2rem",
    padding: "0.5rem"
  },
  grow: {
    flexGrow: 1
  }
});

class NavTerms extends React.Component {
  state = {
    open: false,
    openConfirmation: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ openConfirmation: false, open: false });
  };

  renderConfirmation = () => {
    this.setState({ openConfirmation: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <div className={classes.skinnyWidth}>
            <Toolbar>
              <Typography variant="title" color="inherit">
                <img
                  className={classes.logoImg}
                  alt="logo"
                  src="https://ir.ebaystatic.com/pictures/aw/pics/logos/white-on-transparent.png"
                />
              </Typography>
              <br />
              <Typography variant="title" color="inherit">
                <Link to="/" className="startPageTitle">
                  UK Incentive Templates
                </Link>
              </Typography>
              <div className={classes.grow} />
              <Button
                color="inherit"
                variant="outlined"
                onClick={this.handleClickOpen}>
                Report Issue
              </Button>
              <IssueFormDialog
                details={this.state}
                email={this.props.email}
                username={this.props.username}
                handleClose={this.handleClose.bind(this)}
                renderConfirmation={this.renderConfirmation.bind(this)}
              />
            </Toolbar>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavTerms);
