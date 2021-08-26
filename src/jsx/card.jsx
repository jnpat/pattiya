import React from "react";
import { Card } from "react-bootstrap";

function MyCard(props) {
    return (
        <div className="container-fluid">
        <Card style={{ backgroundColor: "#DCD2C8", color:"#43270F", textAlign: "left", padding:"4rem", borderRadius: "1rem" }}>
            <Card.Body>
                <h2>{props.title} {props.name}</h2>
                <br></br>
                <h6>{props.content}</h6>
            </Card.Body>
        </Card>
        </div>
    );
}
export default MyCard;