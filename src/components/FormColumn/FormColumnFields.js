import React, { Component } from "react";
import ListField from "./ListField";
import Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    minWidth: "170px"
  },
  listItem: {
    paddingTop: "6px",
    paddingBottom: "6px"
  }
});
class FormColumnFields extends Component {
  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.props.changeValue(name, value);

    if (name === "sparcid") {
      this.props.validateSparcID(value);
    }

    if (name === "template" && value === "multiseller") {
      this.props.updateSellers(this.props.details.sellers);
    }

    if (name === "template" && value === "singleseller") {
      this.props.updateSeller(this.props.details.sellers);
    }

    if (name === "template" && value === "verticals") {
      this.props.updateCategories(this.props.details.categories);
    }
  };

  render() {
    const details = this.props.details;
    const showValues = this.props.details.gotTemplate;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <List>
          <ListItem className={classes.listItem}>
            <FormControl>
              <InputLabel className={classes.textField}>Template *</InputLabel>
              <Select
                required
                className={classes.textField}
                value={details.template}
                onChange={this.handleChange.bind(this)}
                name="template">
                <MenuItem value="" disabled>
                  Select a Template
                </MenuItem>
                <MenuItem value="singleseller">Single Seller</MenuItem>
                <MenuItem value="multiseller">Multi Seller</MenuItem>
                <MenuItem value="verticals">Verticals</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <Tooltip title="e.g. EUPLA-45789">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel shrink="true">SPARC ID</InputLabel>
                <Input
                  required
                  type="text"
                  disabled={this.props.lockSparcId ? true : false}
                  error={this.props.badSparcID ? true : false}
                  placeholder="e.g. EUPLA-45789"
                  value={showValues ? details.sparcid : undefined}
                  name="sparcid"
                  onChange={
                    this.props.lockSparcId
                      ? false
                      : this.handleChange.bind(this)
                  }
                />
              </FormControl>
            </ListItem>
          </Tooltip>
          {this.props.badSparcID && (
            <ListItem>
              <span id="sparcid-error">
                This SPARC ID is either already in use or is incorrectly
                formatted.
              </span>
            </ListItem>
          )}
          <Tooltip title="e.g. New campaign">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel shrink="true">Meta Title</InputLabel>
                <Input
                  required
                  type="text"
                  placeholder="e.g. New campaign"
                  value={showValues ? details.metaTitle : undefined}
                  name="metaTitle"
                  onChange={this.handleChange.bind(this)}
                />
              </FormControl>
            </ListItem>
          </Tooltip>
          <Tooltip title="e.g. Coupon Terms and Conditions">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel shrink="true">Meta Description</InputLabel>
                <Input
                  required
                  type="text"
                  placeholder="e.g. Coupon Terms and Conditions"
                  value={showValues ? details.metaDescription : undefined}
                  name="metaDescription"
                  onChange={this.handleChange.bind(this)}
                />
              </FormControl>
            </ListItem>
          </Tooltip>
          <Tooltip title="e.g. Terms & Conditions">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel shrink="true">Page Title</InputLabel>
                <Input
                  type="text"
                  defaultValue="Terms and Conditions"
                  value={showValues ? details.title : undefined}
                  name="title"
                  onChange={this.handleChange.bind(this)}
                />
              </FormControl>
            </ListItem>
          </Tooltip>
          {/* Date and Time Input Fields */}
          <ListItem>
            <Tooltip title="e.g. 09:00">
              <TextField
                id="time"
                label="Start Time"
                type="time"
                name="starttime"
                className={classes.textField}
                required
                value={details.starttime}
                onChange={this.handleChange.bind(this)}
              />
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip title="MM/DD/YYYY">
              <TextField
                id="date"
                label="Start Date"
                type="date"
                name="startdate"
                required
                value={details.startdate}
                onChange={this.handleChange.bind(this)}
              />
            </Tooltip>
          </ListItem>

          <ListItem>
            <Tooltip title="e.g. 23:59">
              <TextField
                id="time"
                label="End Time"
                type="time"
                name="endtime"
                className={classes.textField}
                required
                value={details.endtime}
                onChange={this.handleChange.bind(this)}
              />
            </Tooltip>
          </ListItem>
          <ListItem>
            <Tooltip title="MM/DD/YYYY">
              <TextField
                id="date"
                label="End Date"
                type="date"
                name="enddate"
                required
                value={details.enddate}
                onChange={this.handleChange.bind(this)}
              />
            </Tooltip>
          </ListItem>

          {/* Coupon discount details */}
          <Tooltip title="e.g. PSHOPNOW20">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel shrink="true">Coupon Code</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder="e.g. PSHOPNOW20"
                  value={showValues ? details.couponid : undefined}
                  name="couponid"
                  onChange={this.handleChange.bind(this)}
                />
              </FormControl>
            </ListItem>
          </Tooltip>
          <Tooltip title="% discount value offered on this coupon">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel shrink="true">Discount Value - %</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder="e.g. 10%"
                  value={showValues ? details.discountvalue : undefined}
                  name="discountvalue"
                  onChange={this.handleChange.bind(this)}
                />
              </FormControl>
            </ListItem>
          </Tooltip>
          <Tooltip title="Minimum spend for this coupon">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel shrink="true">Minimum Spend</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder={`e.g. ${details.minspend}`}
                  value={showValues ? details.minspend : undefined}
                  name="minspend"
                  onChange={this.handleChange.bind(this)}
                />
              </FormControl>
            </ListItem>
          </Tooltip>
          <Tooltip title="Maximum discount for this coupon">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel shrink="true">Maximum Discount</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder={`e.g. ${details.maxdiscount}`}
                  value={showValues ? details.maxdiscount : undefined}
                  name="maxdiscount"
                  onChange={this.handleChange.bind(this)}
                />
              </FormControl>
            </ListItem>
          </Tooltip>

          {details.template === "verticals" && (
            <React.Fragment>
              <ListField
                details={details}
                updateListinView={this.props.updateListinView}
                handleMultilineChange={this.props.handleMultilineChange}
              />
            </React.Fragment>
          )}

          {details.template === "singleseller" && (
            <React.Fragment>
              <ListField
                details={details}
                updateListinView={this.props.updateListinView}
                handleMultilineChange={this.props.handleMultilineChange}
              />
            </React.Fragment>
          )}
          {details.template === "multiseller" && (
            <React.Fragment>
              <ListField
                details={details}
                updateListinView={this.props.updateListinView}
                handleMultilineChange={this.props.handleMultilineChange}
              />
            </React.Fragment>
          )}
          <Tooltip title="Number of Redemptions">
            <ListItem>
              <FormControl>
                <InputLabel shrink="true">Redemptions</InputLabel>
                <Select
                  value={details.redemptions}
                  className={classes.textField}
                  onChange={this.handleChange.bind(this)}
                  name="redemptions">
                  <MenuItem value="one">One</MenuItem>
                  <MenuItem value="two">Two</MenuItem>
                  <MenuItem value="three">Three</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </Tooltip>

          <Input
            type="hidden"
            required
            placeholder="example@ebay.com"
            name="email"
            onChange={this.handleChange.bind(this)}
            value={details.email}
          />
        </List>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FormColumnFields);
