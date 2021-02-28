import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Movie from "./modules/Movie";
import { RootProvider } from "./context";
import { withTheme } from "./theme";
import NavBar from "./components/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2), // Material UI spacing
    },
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
    <RootProvider>
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
          <Movie />
        </Grid>
      </Grid>
    </RootProvider>
  );
}

export default withTheme(App);
