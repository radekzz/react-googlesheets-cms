import React from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import config from "./config";
import { browserInfo } from "./BrowserInfo";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class IssueFormDialog extends React.Component {
  appendIssue = event => {
    event.preventDefault();
    let browser = browserInfo();
    const issues = this.state;
    console.log("Reporting Issues");
    window.gapi.client.sheets.spreadsheets.values
      .append({
        spreadsheetId: config.spreadsheetId,
        range: "Issues",
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        resource: {
          values: [
            [
              new Date().toISOString(),
              this.props.email,
              this.props.username,
              browser,
              issues.description,
              0
            ]
          ]
        }
      })
      .then(this.props.renderConfirmation)
      .catch(err => {
        if (err) console.log(err);
      });
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };

  render() {
    const details = this.props.details;
    return (
      <React.Fragment>
        {details.openConfirmation ? (
          <ConfirmationDialog
            details={details}
            handleClose={this.props.handleClose}
          />
        ) : (
          <Dialog
            open={details.open}
            onClose={this.props.handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Report an Issue</DialogTitle>
            <DialogContent>
              <Typography variant="subheading" gutterBottom>
                Hello {this.props.username}.
              </Typography>

              <Typography variant="body2" gutterBottom>
                Firstly thank you for using our tool. It seems you have found an
                issue, please leave your details below and we will look into it
                as soon as possible. Thank you from the WebDev Team!
              </Typography>
              <form id="dialog-form" onSubmit={this.appendIssue}>
                <List>
                  <ListItem>
                    <TextField
                      type="text"
                      style={{ margin: 8 }}
                      placeholder="Description of issue"
                      helperText="Please let us know about the specific issue you are experiencing."
                      fullWidth
                      required
                      margin="normal"
                      variant="filled"
                      name="description"
                      onChange={this.handleChange.bind(this)}
                    />
                  </ListItem>
                </List>
                <DialogActions>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(IssueFormDialog);
