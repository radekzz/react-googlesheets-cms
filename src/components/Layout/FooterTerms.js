import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  },
  skinnyWidth: {
    width: "1024px",
    padding: "16px",
    alignSelf: "center",
    fontSize: "1rem",
    fontWeight: "300",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  paddedFooter: {
    padding: "32px"
  },

  grow: {
    flexGrow: 1
  }
});

class FooterTerms extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <div className={classes.skinnyWidth}>
            <div className={classes.paddedFooter}>
              For more info on the application, please visit our{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="startPageTitle"
                href="https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=528582924">
                <u> wiki page</u>
              </a>{" "}
              or go through a short{" "}
              <a
                href="https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=528582924"
                className="startPageTitle"
                rel="noopener noreferrer"
                target="_blank">
                <u>video tutorial</u>
              </a>{" "}
              (links content to be updated)
              <br />
              <br />
              <br />
              If you have other questions or issues, please contact us at {"<"}
              DL-eBay-WebDev@ebay.com
              {">"}
              <br />
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(FooterTerms);
