import React from "react";
import SkillCard from "./cardSkill";
import ControlledCarousel from "./imcarousel";
import { useMediaQuery } from "react-responsive";

const Skill = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div id="skill" className="skill">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div style={{ color: "#43270F", textAlign: "center" }}>
              <h1>- PERSONAL INFORMATIONS -</h1>
              <hr size="5"></hr>
              <div
                className="row"
                style={{ margin: isMobile ? "0rem" : "5rem" }}
              >
                <h2>- EDUCATIONS -</h2>
                {isMobile ? (
                  <>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <br />
                      <h5>2017 - 2021</h5>
                      <h5>Computer Engineering, Chiangmai University</h5>
                      <br />
                      <h5>2012 - 2017</h5>
                      <h5>Sciene-Math Program, Regina Coeli College</h5>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <br />
                      <h5>2017 - 2021</h5>
                      <h5>2012 - 2017</h5>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <br />
                      <h5>Computer Engineering, Chiangmai University</h5>
                      <h5>Sciene-Math Program, Regina Coeli College</h5>
                    </div>
                  </>
                )}
              </div>
              <div
                className="row"
                style={{ marginTop: isMobile ? "3rem" : "0rem" }}
              >
                <h2>- SKILLS -</h2>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <SkillCard
                    title="LANGUAGES"
                    table="1"
                    im="/images/languages.png"
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <SkillCard
                    title="PROGRAMMINGS"
                    table="2"
                    im="/images/programming.png"
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <SkillCard title="OTHERS" table="3" im="/images/idea.png" />
                </div>
              </div>
              <div
                className="row"
                style={{ margin: isMobile ? "0rem" : "5rem" }}
              >
                <h2>- CURRICULAR ACTIVITIES -</h2>
                <h5 style={{ marginTop: "2rem" }}>Teacher Assistant</h5>
                <div
                  className="col-xl-12 col-lg-12 col-md-12"
                  style={{ marginTop: "2rem" }}
                >
                  <h5>Member of Academic Club of Engineering</h5>
                  <ControlledCarousel
                    im1="/images/acces.jpeg"
                    im2="/images/acces2.jpeg"
                    im3="/images/acces3.jpeg"
                  />
                </div>
                <div
                  className="col-xl-12 col-lg-12 col-md-12"
                  style={{ marginTop: "3rem" }}
                >
                  <h5>Member of Entaneer Rugby Club</h5>
                  <ControlledCarousel
                    im1="/images/rugby.jpeg"
                    im2="/images/rugby2.jpeg"
                    im3="/images/rugby3.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
