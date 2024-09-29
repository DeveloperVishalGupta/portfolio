import { faCircleCheck, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Toaster({ type }) {
    const [show, setShow] = useState(false);
    const renderIcon = () => {
        switch (type) {
            case 'success':
                return <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#08d565" }} />;
            case 'error':
                return <FontAwesomeIcon icon={faXmark} style={{ color: "#ff5252" }} />;
            case 'warning':
                return <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#ffe380" }} />;
            default:
                return null; // Optional: Return a default or null
        }
    };

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        {renderIcon}
                        <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#ffe380" }} />
                        {/* <FontAwesomeIcon icon="fa-regular fa-circle-check" style={{ color: "#08d565", }} />
                        <FontAwesomeIcon icon="fa-solid fa-xmark" style={{ color: "#ff5252", }} />
                        <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" style={{ color: "#ffe380", }} /> */}
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={() => setShow(true)}>Show Toast</Button>
            </Col>
        </Row>
    );
}

export default Toaster;