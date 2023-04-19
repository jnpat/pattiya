import React from "react";
import ReactPlayer from "react-player";
import { IconButton } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const Background = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div id="background" className="bg">
      <div className="container">
        <div className="row">
          <div className="col-al-12 col-lg-12 col-md-12">
            <div style={{ color: "#43270F", textAlign: "center" }}>
              <h1>- WORK BACKGROUND -</h1>
              <hr size="5"></hr>
              <div className="row">
                {isMobile ? (
                  <>
                    <div
                      className="col-xl-12 col-lg-12 col-md-12"
                      style={{ textAlign: "center", padding: "3rem" }}
                    >
                      <br />
                      <h3>Software Engineer</h3>
                      <h5>
                        One year (Full-time) work experience at TRADITION
                        BROKERS (THAILAND) CO., LTD.
                      </h5>
                      <br />
                      <h3>Full-stack Developer</h3>
                      <h5>
                        Half year (Part-time) work experience at PHITECH IPB
                        CO., LTD.
                      </h5>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="col-xl-6 col-lg-6 col-md-6"
                      style={{ textAlign: "center", padding: "3rem" }}
                    >
                      <br />
                      <h3>Software Engineer</h3>
                      <h3>Full-stack Developer</h3>
                    </div>
                    <div
                      className="col-xl-6 col-lg-6 col-md-6"
                      style={{ textAlign: "center", padding: "3rem" }}
                    >
                      <br />
                      <h5>
                        One year (Full-time) work experience at <br />
                        TRADITION BROKERS (THAILAND) CO., LTD.
                      </h5>
                      <h5>
                        Half year (Part-time) work experience at <br />
                        PHITECH IPB CO., LTD.
                      </h5>
                    </div>
                  </>
                )}
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url="https://youtu.be/JLY6EU4Y5X0"
                  />
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6"
                  style={{ textAlign: "center", padding: "3rem" }}
                >
                  <h3>
                    Development of Technical Signal Analysis System for Stock
                    Trading using Machine Learning Algorithms
                  </h3>
                  <br />
                  <h5>Classification Buy/Sell Stock Signal</h5>
                </div>
              </div>
              <div
                className="row"
                style={{ marginTop: isMobile ? "0rem" : "5rem" }}
              >
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <h3>Analyze Weight of Food Components from Raw Images</h3>
                  <br />
                  <h5>using VGG-19 to analyze weight</h5>
                  <IconButton href="https://colab.research.google.com/drive/178ByWad511qHt5zZ0UN_SBvbee2Zsh-F?authuser=1&hl=th#scrollTo=lbpXF7aezXHm">
                    Click
                  </IconButton>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <h3>Classification Rock Paper Scissors Game using Webcam</h3>
                  <br />
                  <h5>using CNN to classification</h5>
                  <IconButton href="https://github.com/jnpat/cv">
                    Click
                  </IconButton>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <h3>
                    Classify Word-sense Disambiguation with 3 classes of word
                    "ตา"
                  </h3>
                  <br />
                  <h5>using Bidirectional to classifier</h5>
                  <IconButton href="https://colab.research.google.com/drive/1e6C7HCW7GJuI3O2Fsk1xOOzJHBRiO9PD?authuser=1&hl=th">
                    Click
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
