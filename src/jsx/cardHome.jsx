import React from "react";
import ReactTypingEffect from "react-typing-effect";

const MyCard = (props) => {
  return (
    <div
      className="container-fluid"
      style={{ color: "#43270F", textAlign: "left", padding: "5rem" }}
    >
      <ReactTypingEffect
        text={[props.title, props.name]}
        speed={60}
        className={props.style}
      />
      <br />
      <br />
      <h6>&emsp;{props.content}</h6>
      <h6>&emsp;{props.subContent}</h6>
    </div>
  );
};
export default MyCard;
