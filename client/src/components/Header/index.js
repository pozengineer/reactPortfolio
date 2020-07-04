import React from "react";
import { Row, Col } from 'react-bootstrap';
import "./style.css";
import Logo from '../assets/images/Logo/pozLogoHtml.jpg';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Header() {
    return (
        <Row className="brandname">
            <Col sm={12} md={12} lg={6} className="navLogo navbar-brand">
                <img src={ Logo } alt="Company Logo" className="logoImage" />
            </Col>
        </Row>
    );
}

export default Header;
