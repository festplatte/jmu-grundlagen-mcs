import React from "react";
import {
  Paper,
  Typography,
  withStyles,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Hidden,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Badge,
  Button
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  fill: {
    width: "100%"
  }
});

class ProductFilter extends React.Component {
  state = {
    available: false,
    onlyNew: false,
    manufactor: 0,
    memory: 0
  };

  handleToggle = option => () => {
    this.setState({ [option]: !this.state[option] });
  };

  handleGroupCheck = group => e => {
    this.setState({
      [group]: this.state[group] + (e.currentTarget.checked ? 1 : -1)
    });
  };

  resetFilter = () => {
    console.log("not implemented yet");
    // const newState = { ...this.state };
    // for (let key in newState) {
    //   newState[key] = typeof newState[key] === "boolean" ? false : 0;
    // }
    // this.setState(newState);
  };

  renderFilterOptions = () => {
    const { classes } = this.props;
    return (
      <List className={classes.fill}>
        <ListItem>
          <ListItemText primary="Nur sofort lieferbar" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle("available")}
              checked={this.state.available}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Nur Neuheiten" />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle("onlyNew")}
              checked={this.state.onlyNew}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <Badge
            className={classes.fill}
            badgeContent={this.state.manufactor}
            color="secondary"
          >
            <ExpansionPanel className={classes.fill}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                Hersteller
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={this.handleGroupCheck("manufactor")}
                      />
                    }
                    label="Apfel"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={this.handleGroupCheck("manufactor")}
                      />
                    }
                    label="Birne"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={this.handleGroupCheck("manufactor")}
                      />
                    }
                    label="Kiwi"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={this.handleGroupCheck("manufactor")}
                      />
                    }
                    label="Melone"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={this.handleGroupCheck("manufactor")}
                      />
                    }
                    label="Zitrone"
                  />
                </FormGroup>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Badge>
        </ListItem>
        <ListItem>
          <Badge
            className={classes.fill}
            badgeContent={this.state.memory}
            color="secondary"
          >
            <ExpansionPanel className={classes.fill}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                Speicherausstattung
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={this.handleGroupCheck("memory")} />
                    }
                    label="1 GB"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={this.handleGroupCheck("memory")} />
                    }
                    label="2 GB"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={this.handleGroupCheck("memory")} />
                    }
                    label="4 GB"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={this.handleGroupCheck("memory")} />
                    }
                    label="8 GB"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox onChange={this.handleGroupCheck("memory")} />
                    }
                    label="16 GB"
                  />
                </FormGroup>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Badge>
        </ListItem>
        <ListItem>
          <Button onClick={this.resetFilter}>Filter zurücksetzen</Button>
        </ListItem>
      </List>
    );
  };

  render() {
    const { classes } = this.props;
    const filterOptions = this.renderFilterOptions();
    return (
      <>
        <Hidden smDown>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Filter
            </Typography>
            {filterOptions}
          </Paper>
        </Hidden>
        <Hidden mdUp>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography>Filter</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{filterOptions}</ExpansionPanelDetails>
          </ExpansionPanel>
        </Hidden>
      </>
    );
  }
}

export default withStyles(styles)(ProductFilter);
