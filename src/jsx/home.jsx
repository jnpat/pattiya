import React from "react";
import MyCard from "./card";

function Home() {
    return (
        <div id="home" className="home">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6" style={{ backgroundColor: "#CEB8A4", borderRadius: "1rem"}}>
                        <MyCard title="Hello Everyone,"
                            name="My name is Pattiya Apiratmontree."
                            content="I am a new graduated computer engineering student at Chiangmai University with GPA 3.21.
                         So I would like to seeking job position as Front-end Developer to find an experience and 
                         improve my working skills to be a quality developer, 
                         Moreover I am able to work under pressure and I am ready to learn new things." />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                            <img className="img-fluid" style={{ maxWidth:"17rem", maxHeight: "20rem" }} src={process.env.PUBLIC_URL + "/images/pic.jpg"}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;