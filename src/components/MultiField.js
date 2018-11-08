import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

export default class MultiField extends React.Component {
  render() {
    return (
      <ListItem className="multifield">
        {this.props.list.map((iteminlist, idx) => (
          <div key={`seller-${idx + 1}`} className="multifield-item">
            <input
              type="text"
              required
              className="multifield-item-input MuiInput-input-146"
              placeholder={this.props.placeholderText + ` #${idx + 1} name`}
              value={iteminlist.name}
              name="name"
              onChange={this.props.handleItemNameChange(idx)}
            />
            {this.props.template !== "verticals" && (
              <input
                type="url"
                pattern="https?://.+"
                required
                className="multifield-item-input MuiInput-input-146"
                placeholder={this.props.placeholderText + ` #${idx + 1} url`}
                value={iteminlist.url}
                name="url"
                onChange={this.props.handleItemNameChange(idx)}
              />
            )}
            <Button
              type="button"
              onClick={this.props.handleRemoveItem(idx)}
              className="buttonminus small">
              -
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={this.props.handleAddItem}
          className="buttonplus small">
          +
        </Button>
      </ListItem>
    );
  }
}
