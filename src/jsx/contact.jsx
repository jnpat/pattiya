import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
// import { IconButton } from '@material-ui/core';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ams7l6q",
        "template_iz5f6tz",
        e.target,
        "_18GI5TUb8GSr2jpM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="ct">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div style={{ color: "#43270F", textAlign: "center" }}>
              <h1>- CONTACT ME-</h1>
              <hr size="5"></hr>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="skill-card pt-5">
                    <div className="p-5">
                      <i class="fa fa-phone p-3"></i>
                      <br />
                      <a href="tel:+66817240068">0817240068</a>
                      <br />
                      <i class="fa fa-envelope p-3"></i>
                      <a href="mailto:jean_pattiya@hotmail.com">
                        jean_pattiya@hotmail.com
                      </a>
                      <i class="fa fa-map-pin p-3"></i>
                      <br />
                      <a>244/3 moo.3 Nong kwai, Hang Dong, Chiang Mai 50230</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 p-5">
                  <form onSubmit={sendEmail}>
                    <h5>
                      If you are interested in my abilities, please contact me.
                    </h5>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <br />
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <br />
                    <textarea
                      className="form-control"
                      name="message"
                      cols="20"
                      rows="5"
                      placeholder="Message"
                    />
                    <button className="btn-block" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
