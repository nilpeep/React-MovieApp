import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../pages/NotFound";
import { Spinner } from "react-bootstrap";

const MovieDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  console.log(id);

  const [movie, setMovie] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  const getMovie = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGUwYTIyYzAwZWJkYTVjYWJlZjExYzA0OTU4MmM5MyIsInN1YiI6IjY1ODhjZTdmZTI5NWI0NjMzNTU3ZjAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VoyIRoXlEhOt5y0wyNLPrM26ztdw7JzYgs1dIQwiLUk",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          throw new Error("wrong");
        }
        return response.json();
      })
      .then((response) => {
        setLoading(false);
        setMovie(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(loading);

  //   useEffect(() => {
  //     const options = {
  //       method: "GET",
  //       url: `https://api.themoviedb.org/3/movie/${id}`,
  //       params: { language: "en-US" },
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGUwYTIyYzAwZWJkYTVjYWJlZjExYzA0OTU4MmM5MyIsInN1YiI6IjY1ODhjZTdmZTI5NWI0NjMzNTU3ZjAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VoyIRoXlEhOt5y0wyNLPrM26ztdw7JzYgs1dIQwiLUk",
  //       },
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         setMovie(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }, []);
  //   console.log(movie);
  if (error) {
    return <NotFound />;
  } else if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={{ color: "white", fontSize: "2rem", display: "flex" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <div style={{ margin: "1rem" }}>
          <h1 style={{ fontWeight: "bolder" }}>{movie.original_title}</h1>
          <p style={{ color: "rgb(200,200,255)" }}>{movie.overview}</p>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            back
          </button>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            other movies
          </button>
        </div>
      </div>
    );
  }
};

export default MovieDetail;
