import axios from "axios";
import React, { useContext, useEffect, useState, createContext } from "react";

const MovieContext = createContext();
const MovieFilterContext = createContext();
const DetailContext = createContext();

export function useMovies() {
  return useContext(MovieContext);
}

export function useFilterMovies() {
  return useContext(MovieFilterContext);
}
export function useDetail() {
  return useContext(DetailContext);
}

export function RootProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState([]);

  const handleFilterMovies = (params) => {
    let filtMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(params)
    );
    return params.length > 0
      ? setFilteredMovies([...filtMovies])
      : setFilteredMovies([...movies]);
  };

  const handleClickOpen = (id) => {
    setActive(() => movies.filter((movie) => movie.id === id));
    setOpen(true);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3d485e84c7ae1856fb134fefd31ed2df&language=en-US&sort_by=popularity.desc&include_video=false&page=3"
      )
      .then((response) => {
        setMovies((movies) => [...movies, ...response?.data?.results]);
        setFilteredMovies((movies) => [...movies, ...response?.data?.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MovieContext.Provider value={filteredMovies}>
      <MovieFilterContext.Provider value={handleFilterMovies}>
        <DetailContext.Provider value={[open, handleClickOpen, active]}>
          {children}
        </DetailContext.Provider>
      </MovieFilterContext.Provider>
    </MovieContext.Provider>
  );
}
