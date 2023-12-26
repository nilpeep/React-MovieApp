import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Trendings() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/movie/day",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGUwYTIyYzAwZWJkYTVjYWJlZjExYzA0OTU4MmM5MyIsInN1YiI6IjY1ODhjZTdmZTI5NWI0NjMzNTU3ZjAzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VoyIRoXlEhOt5y0wyNLPrM26ztdw7JzYgs1dIQwiLUk",
      },
    };

    // Fetching data
    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(movies);
  return (
    <Container className="mt-3 bg-transparent  rounded">
      <Row lg="5">
        {movies.map((movie) => (
          <Col key={movie.id} style={{ padding: "0.5rem" }}>
            <Card
              style={{ width: "12rem" }}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />

              {/* <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Trendings;
