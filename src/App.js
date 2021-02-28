import React from "react";
import { Redirect, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Movie from "./modules/index";
import { MovieProvider } from "./contexts/MovieContext";
import { withTheme } from "./theme";
import NavBar from "./modules/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper, // Makes it the same color as the paper color
    backgroundImage: `url(${"https://www.transparenttextures.com/patterns/cubes.png"})`,
  },

}));

function App(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs")); // Anything size xs we return matches
  const { darkMode, setDarkMode } = props;

  return (
    <MovieProvider>
      <Grid
        className={classes.root}
        container
        justify="center"
        alignItems={matches ? "flex-start" : "center"}
        direction="column"
      >
        <Grid item container>
          <NavBar />
        </Grid>
        <Grid item container justify="flex-end">
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            }
            label="Dark Mode"
          />
        </Grid>
        <Grid item>
          <Route
            exact
            path="/"
            component={() => <Redirect to="/moviecart" />}
          />
          <Route component={Movie} path="/moviecart" />
        </Grid>
      </Grid>
    </MovieProvider>
  );
}

export default withTheme(App);
