import React from "react";
import smd from "./smdlogo.png";
//booststrap imports below
import { Row, Card } from "react-bootstrap";
import { RiMovie2Fill } from "react-icons/ri";


function About() {
  return (
    //put a slide show on about and added margins to the containers as to not interfere with navbar top positioning
    <section className="about">
      <Row className="my-5 mx-5 ">
        {
          <Card
            className="bg-light jumbotron"
            style={{
              padding: "2rem 1rem",
              marginBottom: "2rem",
              marginTop: "2rem",
              borderRadius: "30px",
            }}
          >
            <Card.Body>
              <h1>
                <img
                  style={{
                    width: "50px",
                    height: "auto",
                    backgounrdColor: "white",
                  }}
                  alt="slate img"
                  src={smd}
                />
                Created by Geng | Sam | Zach{" "}
                <img
                  style={{
                    width: "50px",
                    height: "auto",
                    backgounrdColor: "white",
                  }}
                  alt="slate img"
                  src={smd}
                />
              </h1>
              <h4>
                The Slate Movie Data base is a personal movie data base that
                will allow users to search for movies, look at movie details,
                and add new movies hosted on a JSON server. Users can also
                add/remove movies to a "favorites" list based on their tastes.{" "}
              </h4>
              <br />

              <h5>This application features:</h5>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <RiMovie2Fill style={{ fontSize: "22px", color: "black" }} />
                  {""} Data fetching via JSON server
                </li>
                <li>
                  <RiMovie2Fill style={{ fontSize: "20px", color: "black" }} />
                  {""} Client Side routing with React0Routing
                </li>
                <li>
                  <RiMovie2Fill style={{ fontSize: "20px", color: "black" }} />
                  {""} Search functionality using useState/useEffects
                </li>
                <li>
                  <RiMovie2Fill style={{ fontSize: "20px", color: "black" }} />
                  {""} Styling and formatting with Bootstrap and CSS
                </li>
              </ul>
            </Card.Body>
          </Card>
        }
      </Row>
    </section>
  );
}

export default About;
