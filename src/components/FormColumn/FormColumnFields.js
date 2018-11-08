import React, { Component } from "react";
import MultiField from "../MultiField";
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
      this.props.checkDuplicateIDs(value);
    }
  };

  render() {
    const details = this.props.details;
    const showValues = this.props.oldValues;
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
                <InputLabel>SPARC ID</InputLabel>
                <Input
                  required
                  type="text"
                  disabled={this.props.lockSparcId ? true : false}
                  error={this.props.duplicateId ? true : false}
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
          {this.props.duplicateId && (
            <ListItem>
              <span id="sparcid-error">This SPARC ID is already in use.</span>
            </ListItem>
          )}
          <Tooltip title="e.g. Terms & Conditions">
            <ListItem className={classes.listItem}>
              <FormControl>
                <InputLabel>Page Title</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder="e.g. Terms & Conditions"
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
            <Tooltip title="DD/MM/YYYY">
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
            <Tooltip title="DD/MM/YYYY">
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
              <FormControl variant="outlined">
                <InputLabel>Coupon Code</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder="Coupon Code"
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
                <InputLabel>Discount Value - %</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder="Discount Value - %"
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
                <InputLabel>Minimum Spend</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder={`Min Spend: ${details.minspend}`}
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
                <InputLabel>Maximum Discount</InputLabel>
                <Input
                  type="text"
                  required
                  placeholder={`Max Discount:  ${details.maxdiscount}`}
                  value={showValues ? details.maxdiscount : undefined}
                  name="maxdiscount"
                  onChange={this.handleChange.bind(this)}
                />
              </FormControl>
            </ListItem>
          </Tooltip>
          {/* Seller Details */}
          {details.template === "singleseller" && (
            <Tooltip title="Name of Seller Goes Here">
              <ListItem>
                <FormControl>
                  <InputLabel>Seller Name</InputLabel>
                  <Input
                    type="text"
                    required
                    placeholder={`Seller Name:  ${details.sellers}`}
                    value={showValues ? details.sellers : undefined}
                    name="sellers"
                    onChange={this.handleChange.bind(this)}
                  />
                </FormControl>
              </ListItem>
            </Tooltip>
          )}
          {details.template === "verticals" && (
            <React.Fragment>
              <MultiField
                template={details.template}
                changeValue={this.props.changeValue}
                handleAddItem={this.props.categoryAddItem}
                handleRemoveItem={this.props.categoryRemoveItem}
                handleItemNameChange={this.props.categoryItemNameChange}
                list={details.categorieslist}
                placeholderText="Category"
              />
              <Input
                type="hidden"
                required
                placeholder="categories"
                name="categories"
                value={details.categories}
              />
            </React.Fragment>
          )}

          {details.template === "multiseller" && (
            <React.Fragment>
              <MultiField
                template={details.template}
                changeValue={this.props.changeValue}
                handleAddItem={this.props.sellerAddItem}
                handleRemoveItem={this.props.sellerRemoveItem}
                handleItemNameChange={this.props.sellerItemNameChange}
                list={details.sellerslist}
                placeholderText="Seller"
              />
              <Input
                type="hidden"
                required
                placeholder="sellers"
                name="sellers"
                value={details.sellers}
              />
            </React.Fragment>
          )}
          <Tooltip title="Number of Redemptions">
            <ListItem>
              <FormControl>
                <InputLabel>Redemptions</InputLabel>
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
