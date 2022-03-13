import React from "react";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header id="contained-modal-title-vcenter" closeButton><Modal.Title>Please insert your name</Modal.Title></Modal.Header>
            <Modal.Body>
                <div className="input-group"><input style={{width: "100%"}} type="text" placeholder="Enter Your Name" onChange={(e) => props.setName(e.target.value)} /></div>
            </Modal.Body>
            <Modal.Footer>
                <button style={{backgroundColor: "#F5F1EA"}} className="btn" type="submit" onClick={props.setName ? props.onHide : props.show}>Enter</button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;