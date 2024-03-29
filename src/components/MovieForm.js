import React from "react";
import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const initialState = {
  title: "",
  release_date: "",
  poster_path: "",
  overview: "",
  vote_average: "",
};

function MovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMovie = {
      title: formData.title,
      release_date: formData.release_date,
      poster_path: formData.poster,
      overview: formData.plot,
      vote_average: formData.rating,
    };
    fetch("https://movie-json-server.onrender.com/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((newMovie) => {
        onAddMovie(newMovie);
        history.push("/movies");
      });
  };

  return (
    // made an update to the margins on add movie from
    <Container
      style={{
        padding: "20%, 20%",
        marginBottom: "2rem",
        marginTop: "10%",
      }}
    >
      <Form
        className="form border rounded  "
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Form.Group className="my-3 mx-3">
          <h3>Add A New Movie</h3>
          <h6>Add any recently released movies to our database!</h6>
          <Row>
            <Col>
              <Form.Label htmlFor="title">Movie Title</Form.Label>
              <Form.Control
                type="text"
                id="title"
                name="title"
                placeholder="Movie Title"
                onChange={handleChange}
                value={formData.title}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="release_date">Releast Date</Form.Label>
              <Form.Control
                className=""
                type="date"
                id="release_date"
                name="release_date"
                placeholder="Release date or year"
                onChange={handleChange}
                value={formData.release_date}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label htmlFor="poster">Poster/Image</Form.Label>
              <Form.Control
                type="text"
                id="poster"
                name="poster"
                placeholder="Poster/Movie Image"
                onChange={handleChange}
                value={formData.poster}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="rating">Rating</Form.Label>
              <Form.Control
                type="number"
                id="rating"
                name="rating"
                step="0.1"
                placeholder="Rating"
                onChange={handleChange}
                value={formData.rating}
              />
            </Col>
          </Row>
          ​<Form.Label htmlFor="plot" style={{paddingTop:"20px"}}>Plot Summary</Form.Label>
          <Form.Control
          
            as="textarea"
            rows={3}
            id="plot"
            name="plot"
            placeholder="Plot Summary"
            onChange={handleChange}
            value={formData.plot}
          />
          <Button style={{marginTop:"20px"}} variant="outline-dark" type="submit" class="my-3">
            Add Movie
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default MovieForm;
