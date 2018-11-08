import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// Table imports
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";

import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page">
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page">
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page">
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page">
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

const formStyles = theme => ({
  input: {
    margin: theme.spacing.unit * 3,
    width: "80%"
  }
});
class LoggedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowsPerPage: 10,
      search: ""
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  searchSparcid = event => {
    const value = event.target.value.toUpperCase();
    this.setState({ search: value });
  };

  render() {
    const { classes } = this.props;
    const templatesInitial = this.props.templates;
    const templates = templatesInitial.slice(0, -1);
    const { rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, templates.length - page * rowsPerPage);

    let filteredTemplates = templates.filter(template => {
      if (template.email.toUpperCase().indexOf(this.state.search) !== -1) {
        return template.email.toUpperCase().indexOf(this.state.search) !== -1;
      } else if (template.sparcid.indexOf(this.state.search) !== -1) {
        return template.sparcid.indexOf(this.state.search) !== -1;
      } else if (
        template.couponid.toUpperCase().indexOf(this.state.search) !== -1
      ) {
        return (
          template.couponid.toUpperCase().indexOf(this.state.search) !== -1
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        <Link to="/new">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}>
            Create a New Page
          </Button>
        </Link>
        <br />
        <Input
          placeholder="Search here for SPARC ID, Coupon Code or Email..."
          onChange={this.searchSparcid.bind(this)}
          className={classes.input}
          inputProps={{
            "aria-label": "Description"
          }}
        />
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SPARC Planning ID</TableCell>
                <TableCell>Coupon Code</TableCell>
                <TableCell>Template</TableCell>
                <TableCell>Requestor</TableCell>
                <TableCell>View Page</TableCell>
                <TableCell>Edit Page</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTemplates
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((template, i) => (
                  <TableRow key={i}>
                    <TableCell key={template.sparcid}>
                      <a
                        target="_blank"
                        href={`https://ebaywmt.mujhelpdesk.cz/ui/planning/request/${
                          template.sparcid
                        }/view`}>
                        {template.sparcid}
                      </a>
                    </TableCell>
                    <TableCell key={template.couponid}>
                      {template.couponid}
                    </TableCell>
                    <TableCell
                      className="templateTable"
                      key={template.template}>
                      {template.template}
                    </TableCell>
                    <TableCell key={template.email}>
                      {template.email.split("@")[0]}
                    </TableCell>
                    <TableCell key={template.country}>
                      <Link
                        to={{
                          pathname: `view/${template.sparcid}`,
                          state: {
                            template: template
                          }
                        }}>
                        View
                      </Link>
                    </TableCell>
                    <TableCell key={template.country}>
                      <Link
                        to={{
                          pathname: `edit/${template.sparcid}`,
                          state: {
                            template: template
                          }
                        }}>
                        Edit
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={1}
                  count={templates.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(formStyles, {
  withTheme: true
})(LoggedIn);
