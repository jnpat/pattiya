import React from "react";
import Tables from "./table";

const SkillCard = (props) => {
  return (
    <div className="skill-card">
      <div className="container-fluid pt-5">
        <h3>{props.title}</h3>
        <img
          className="img-fluid"
          style={{ width: "4rem", height: "5rem" }}
          src={process.env.PUBLIC_URL + props.im}
        ></img>
        <div>
          {props.table === "1" ? (
            <Tables
              one="THAI"
              two="ENGLISH"
              three="JAPANESE (N5)"
              four=""
              five=""
              six=""
            />
          ) : (
            <></>
          )}
        </div>
        <div>
          {props.table === "2" ? (
            <Tables
              one=".NET (C#)"
              two="Python"
              three="Flutter"
              four="MySQL | ProgreSQL"
              five="ReactJS & NextJs"
              six="Javascript & Typescript"
            />
          ) : (
            <></>
          )}
        </div>
        <div>
          {props.table === "3" ? (
            <Tables
              one="UI Design"
              two="Presentation"
              three="Writing Report"
              four="Microsoft Skills"
              five="Amazon Web Services"
              six="Unit tests & Integration tests"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
