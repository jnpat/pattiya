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
              one="MySQL | ProgreSQL"
              two="Python"
              three="Flutter"
              four="ReactJS & NextJs"
              five="Javascript & Typescript"
              six=""
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
              four="Microsoft skills"
              five="Amazon Web Services"
              six=""
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
