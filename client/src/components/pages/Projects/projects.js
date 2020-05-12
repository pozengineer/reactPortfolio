import React, { useState }from "react";
import { ProjectCard } from './projectCard';
import { Col, Row, Container } from 'react-bootstrap';
// import ProfilePic from '../../assets/images/profilePic01.jpg';
// import Resume from '../../assets/resume/resumeMkIII.pdf';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Projects() {
    const projectsArray = [
        {
          "id": 1,
          "name": "Movie App",
          "image": "../../assets/images/digiPic01.jpg",
          "alt": "screenshot of Movie Review Website",
          "description": 
          "This is a movie review website where users can look up any movie and see reviews. This could help them decide to watch a movie or not. Secondly, users can register as a member and this allows them to also add their own reviews. They can also go into their profile page and delete any of their reviews that they are not happy with.",
          "url": "https://lit-peak-86961.herokuapp.com/",
          "github": "https://github.com/Tonnette/Project2"
        },
        {
        "id": 2,
        "name": "React Employee Directory",
        "image": "../../assets/images/digiPic02.jpg",
        "alt": "screenshot of Employee Directory App",
        "description": 
        "This application is an employee directory that was created using React. It allows the user to filter their employees to easily find the details of specific people. It also allows the user to sort through the names in alphabetical and reverse.", 
        "url": "https://tonnette-employee-react-app.herokuapp.com/",
        "github": "https://github.com/Tonnette/React-Employee-Directory"
      },
      {
        "id": 3,
        "name": "React Employee Directory",
        "image": "../../assets/images/digiPic03.jpg",
        "alt": "screenshot of Employee Directory App",
        "description": 
        "This application is an employee directory that was created using React. It allows the user to filter their employees to easily find the details of specific people. It also allows the user to sort through the names in alphabetical and reverse.", 
        "url": "https://tonnette-employee-react-app.herokuapp.com/",
        "github": "https://github.com/Tonnette/React-Employee-Directory"
      }
    ]

    return (
        <Container>
            <Row>
                <Col md={12} >
                    <h1><b>Projects</b></h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                {projectsArray && projectsArray.map(element => {
                    return (
                        <ProjectCard key={element.id} project={element} />
                    )
                })}
            </Row>
        </Container>
    );
}

export default Projects;
