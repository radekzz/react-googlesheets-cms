import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class ListField extends React.Component {
  render() {
    return (
      <ListItem className={this.props.details.template}>
        {this.props.details.template === "singleseller" && (
          <div>
            <TextField
              id="sellers-multiline-flexible"
              label="Seller Name"
              value={this.props.details.multiline}
              onChange={this.props.handleMultilineChange()}
              className="multifield-item-input MuiInput-input-146"
              margin="normal"
            />
            <br />
            <Button
              type="button"
              onClick={this.props.updateListinView}
              className="buttonplus small">
              Update Seller
            </Button>
          </div>
        )}

        {this.props.details.template === "multiseller" && (
          <div>
            <TextField
              id="sellers-multiline-flexible"
              label="Sellers List"
              multiline
              rowsMax="15"
              value={this.props.details.multiline}
              onChange={this.props.handleMultilineChange()}
              className="multifield-item-input MuiInput-input-146"
              margin="normal"
            />
            <br />
            <Button
              type="button"
              onClick={this.props.updateListinView}
              className="buttonplus small">
              Update Sellers
            </Button>
            {this.props.details.sellers === "loading" && (
              <center>
                <br />
                <CircularProgress size={18} style={{ color: "#3f51b5" }} />
                {"   "} API Magic is on ...
              </center>
            )}
          </div>
        )}
        {this.props.details.template === "verticals" && (
          <div>
            <TextField
              id="categories-multiline-flexible"
              label="Categories List"
              multiline
              rowsMax="15"
              value={this.props.details.multiline}
              onChange={this.props.handleMultilineChange()}
              className="multifield-item-input MuiInput-input-146"
              margin="normal"
            />
            <br />
            <Button
              type="button"
              onClick={this.props.updateListinView}
              className="buttonplus small">
              Update Categories
            </Button>
          </div>
        )}
      </ListItem>
    );
  }
}
