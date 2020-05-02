import React from "react";
import { Card } from 'react-bootstrap';
// import ProfilePic from '../../assets/images/profilePic01.jpg';
// import Resume from '../../assets/resume/resumeMkIII.pdf';
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Projects() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id='mainContent'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <>
                        <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Projects;
