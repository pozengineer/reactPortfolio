import React, { useState }from "react";
import { ProjectCard } from './projectCard';
import digiPic01 from '../../assets/images/digiPic01.jpg';
import digiPic02 from '../../assets/images/digiPic02.jpg';
import digiPic03 from '../../assets/images/digiPic03.jpg';
import { Col, Row, Container } from 'react-bootstrap';
// import ProfilePic from '../../assets/images/profilePic01.jpg';
// import Resume from '../../assets/resume/resumeMkIII.pdf';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Projects() {
    return (
        <Container>
            <Row>
                <Col md={12} >
                    <h1><b>Projects</b></h1>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
