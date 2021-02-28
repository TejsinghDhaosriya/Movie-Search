import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import { Movie } from "@material-ui/icons/";
import { useDetail } from "../../context";
import CloseIcon from "@material-ui/icons/Close";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function MovieDetail() {
  const [open, handleClickOpen, active] = useDetail();
  let current = active.length > 0 ? active[0] : active;
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogActions>
          <Link to="/">
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Link>
        </DialogActions>
        <DialogTitle id="alert-dialog-slide-title">
          <Movie /> {current.title}
        </DialogTitle>

        <DialogContent>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Movie Poster"
                height="500"
                image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${current.poster_path}`}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          <DialogContentText id="alert-dialog-slide-description">
          <Divider/>
            <Typography>OverView</Typography>
            <Typography>{current.overview}</Typography>
            <Divider/>
            <Typography>Rating : {current.vote_average}</Typography>
            <Typography>Release Date : {current.release_date}</Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
