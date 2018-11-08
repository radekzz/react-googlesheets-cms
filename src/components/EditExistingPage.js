import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import AppBarEbay from "./Layout/AppBarEbay";
import DrawerEbay from "./Layout/DrawerEbay";
import Template from "./Template";

const drawerWidth = 300;
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
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
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

class EditExistingPage extends React.Component {
  findTicketKey = url => {
    const key = url.replace("/edit/", "");
    return key;
  };

  state = {
    open: false,
    anchor: "left",
    ticketKey: this.findTicketKey(this.props.router.match.url),
    gotTemplate: false,
    sparcid: false,
    title: "Terms and Conditions",
    discountvalue: "",
    template: false,
    couponid: "PSHOPNOW20",
    startdate: "2018-07-24",
    starttime: "09:00",
    enddate: "2018-07-27",
    endtime: "23:59",
    email: this.props.email,
    highlight: null,
    sellerslist: [{ name: "", url: "" }],
    sellers: "Seller Name",
    categorieslist: [{ name: "" }],
    categories: "",
    redirect: false
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

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };

  changeValue(name, value) {
    this.setState({ [name]: value, highlight: name });
  }

  /* Seller list */
  sellerAddItem = () => {
    this.setState({
      sellerslist: this.state.sellerslist.concat([{ name: "", url: "" }])
    });
  };

  sellerRemoveItem = idx => () => {
    const newsellers = this.state.sellerslist.filter((s, sidx) => idx !== sidx);
    let sellersArray = [];
    newsellers.forEach(function(element) {
      sellersArray.push(element.name + "," + element.url);
    });
    const sellersString = sellersArray.join(";");
    this.setState({
      sellerslist: newsellers,
      sellers: sellersString,
      highlight: "sellerslist"
    });
  };

  sellerItemNameChange = idx => evt => {
    const newsellers = this.state.sellerslist.map((iteminlist, sidx) => {
      if (idx !== sidx) return iteminlist;
      return { ...iteminlist, [evt.target.name]: evt.target.value };
    });
    let sellersArray = [];
    newsellers.forEach(function(element) {
      sellersArray.push(element.name + "," + element.url);
    });
    const sellersString = sellersArray.join(";");
    this.setState({
      sellerslist: newsellers,
      sellers: sellersString,
      highlight: "sellerslist"
    });
  };

  /* Category list */
  categoryAddItem = () => {
    this.setState({
      categorieslist: this.state.categorieslist.concat([{ name: "" }])
    });
  };

  categoryRemoveItem = idx => () => {
    const newcategories = this.state.categorieslist.filter(
      (s, sidx) => idx !== sidx
    );
    let categoriesArray = [];
    newcategories.forEach(function(element) {
      categoriesArray.push(element.name);
    });
    const categoriesString = categoriesArray.join(";");
    this.setState({
      categorieslist: newcategories,
      categories: categoriesString,
      highlight: "categorieslist"
    });
  };

  categoryItemNameChange = idx => evt => {
    const newcategories = this.state.categorieslist.map((iteminlist, sidx) => {
      if (idx !== sidx) return iteminlist;
      return { ...iteminlist, name: evt.target.value };
    });
    let categoriesArray = [];
    newcategories.forEach(function(element) {
      categoriesArray.push(element.name);
    });
    const categoriesString = categoriesArray.join(";");
    this.setState({
      categorieslist: newcategories,
      categories: categoriesString,
      highlight: "categorieslist"
    });
  };

  redirectToView = () => {
    this.setState({
      redirect: true
    });
  };

  loadTicket = () => {
    const currentTemplate = this.pickTemplate(this.state.ticketKey);

    this.setState(currentTemplate);

    if (currentTemplate.template) {
      this.setState({ gotTemplate: true });
      this.handleDrawerOpen();
    }
    //update sellers in array
    if (currentTemplate.sellers) {
      currentTemplate.sellers.split(";").map((o, i) =>
        this.state.sellerslist.push({
          name: o.split(",")[0],
          url: o.split(",")[1]
        })
      );
      this.state.sellerslist.shift();
    }
    if (currentTemplate.categories) {
      //update categories in array
      currentTemplate.categories.split(";").map((o, i) =>
        this.state.categorieslist.push({
          name: o
        })
      );
      this.state.categorieslist.shift();
    }
  };

  componentDidMount() {
    if (this.props.templates.length) {
      this.loadTicket();
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (
      this.props.templates !== prevProps.templates &&
      this.state.gotTemplate === false
    ) {
      this.loadTicket();
    }
  }

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    if (!this.props.isLoggedIn) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBarEbay
            details={this.state}
            handleDrawerOpen={this.handleDrawerOpen.bind(this)}
          />

          <DrawerEbay
            changeValue={this.changeValue.bind(this)}
            details={this.state}
            sellerAddItem={this.sellerAddItem.bind(this)}
            sellerRemoveItem={this.sellerRemoveItem.bind(this)}
            sellerItemNameChange={this.sellerItemNameChange.bind(this)}
            categoryAddItem={this.categoryAddItem.bind(this)}
            categoryRemoveItem={this.categoryRemoveItem.bind(this)}
            categoryItemNameChange={this.categoryItemNameChange.bind(this)}
            redirectToView={this.redirectToView.bind(this)}
            handleDrawerClose={this.handleDrawerClose.bind(this)}
          />

          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}>
            <Template values={this.state} />
          </main>
        </div>
      </div>
    );
  }
}

EditExistingPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(EditExistingPage);
