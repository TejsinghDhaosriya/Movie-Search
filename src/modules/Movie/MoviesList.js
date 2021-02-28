import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Tooltip,
  Typography,
} from "@material-ui/core/";

import { useMovies } from "../../context";
import { useDetail } from "../../context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 160,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Movie() {
  const classes = useStyles();
  const movies = useMovies();
  const [open, handleClickOpen, active] = useDetail();

  return (
    <Grid
      container
      className={classes.control}
      spacing={2}
      center
      alignItems="center"
      justify="center"
    >
      <Grid item xs={8}>
        <Grid container justify="center" spacing={2}>
          {movies.map((movie) => (
            <Tooltip
              title={
                <>
                  <Typography>{movie.title}</Typography>
                  <Typography>Rating: {movie.vote_average}</Typography>
                </>
              }
            >
              <Grid key={movie.id} item>
                <Link to={`/moviecart/${movie.title}/details`}>
                  <Card
                    className={classes.paper}
                    onClick={() => handleClickOpen(movie.id)}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Movie Poster"
                        height="200"
                        image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        title={movie.title}
                      />
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            </Tooltip>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
