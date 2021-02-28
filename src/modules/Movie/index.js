import React from "react";
import { Route, Redirect } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import MoviesList from "./MoviesList";


export default function Movie() {
  return (
    <>
      <Route exact path="/" component={() => <Redirect to="/moviecart" />} />
      <Route path="/moviecart" component={MoviesList} />
      <Route path="/moviecart/:title/details" component={MovieDetail} />
    </>
  );
}
