import { Container } from "@material-ui/core";
import React from "react";
import Tables from "./table";

function Skill() {
    return (
        <div id="skill" className="skill">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div style={{ color: "#43270F", textAlign: "center" }}>
                            <h1>- PERSONAL INFORMATIONS -</h1>
                            <h1>- SKILLS -</h1>
                            <div className="table-skill">
                                <Tables />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;