import MyCard from "./card-home";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div id="home" className="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
            <MyCard
              title="Hello Everyone,"
              name="My name is Pattiya Apiratmontree."
              content="I am a new graduated computer engineering student at Chiangmai University with GPA 3.21
                         So I would like to seeking job position as Front-end Developer to find an experience and 
                         improve my working skills to be a quality developer, 
                         Moreover I am able to work under pressure and I am ready to learn new things."
              style="fs-1 fw-bold"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
            <div className="img-home">
              <img
                className="img-fluid"
                style={{
                  width: "20rem",
                  height: "25rem",
                  marginBlock: isMobile ? "3rem" : "0rem",
                }}
                src={process.env.PUBLIC_URL + "/images/pic.jpg"}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
