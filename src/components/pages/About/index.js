import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePic from '../../assets/images/profilePic01.jpg';
import Resume from '../../assets/resume/resumeMkIII.pdf';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function About() {
    return (
        <div id='mainContent'>
            <Container>
                <Row>
                    <Col md={12} >
                        <h1><b>About Me</b></h1>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} id="profilePic">
                        <img src={ ProfilePic } alt="Vegeta" className="img-fluid" />
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} className='resumeLink'>
                        <a href= { Resume } className='appLink' rel='noopener noreferrer' target='_blank'>Resume MKIII Link</a>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <br />
                        <p> A highly motivated and hardworking individual, who is seeking a challenging role as an
                        entry-level
                        full stack web developer with your Company. My education in full stack web development at the
                        University of Sydney, and self-taught knowledge and experience combined with my interest,
                        passion
                        and enjoyment in coding, programming, Cloud Computing and Virtualisation, will enable me to
                        learn,
                        contribute and excel in the Web Development Industry. My ability to learn new coding languages
                        and programs enables me to understand coding concepts quickly which can then be transferred and
                        utilised in developing user friendly web-based applications using html, css, javaScript,
                        bootstrap, jQuery, API's and many more coding languages and concepts.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
