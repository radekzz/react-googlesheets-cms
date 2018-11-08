import React, { Component } from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import FormColumnEdit from "../FormColumn/FormColumnEdit";
import FormColumnCreate from "../FormColumn/FormColumnCreate";

const drawerWidth = 300;
const styles = theme => ({
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    height: "100%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

class DrawerEbay extends Component {
  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.props.details;

    return (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <Typography variant="title" color="inherit" noWrap>
            <Link to="/" className="homePageTitle">
              UK Incentive Templates
            </Link>
          </Typography>
          <IconButton onClick={this.props.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
                <ChevronLeftIcon />
              )}
          </IconButton>
        </div>
        <Divider />
        {this.props.details.gotTemplate ? (
          <FormColumnEdit
            changeValue={this.props.changeValue}
            details={this.props.details}
            sellerAddItem={this.props.sellerAddItem}
            sellerRemoveItem={this.props.sellerRemoveItem}
            sellerItemNameChange={this.props.sellerItemNameChange}
            categoryAddItem={this.props.categoryAddItem}
            categoryRemoveItem={this.props.categoryRemoveItem}
            categoryItemNameChange={this.props.categoryItemNameChange}
            redirectToView={this.props.redirectToView}
          />
        ) : (
            <FormColumnCreate
              changeValue={this.props.changeValue}
              details={this.props.details}
              sellerAddItem={this.props.sellerAddItem}
              sellerRemoveItem={this.props.sellerRemoveItem}
              sellerItemNameChange={this.props.sellerItemNameChange}
              categoryAddItem={this.props.categoryAddItem}
              categoryRemoveItem={this.props.categoryRemoveItem}
              categoryItemNameChange={this.props.categoryItemNameChange}
              redirectToView={this.props.redirectToView}
              allSparcIDs={this.props.allSparcIDs}
            />
          )}
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerEbay);
