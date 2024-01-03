import MyCard from "./cardHome";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div id="home" className="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
            <MyCard
              title="Hello Everyone,"
              name="My name is Pattiya Apiratmontree."
              content="I am a graduated with a Computer Enginering degree at Chiang Mai University with a GPA of 3.21.
                         My current position as a software engineer that I have one and a half years of experience working
                          has provide me with the opportunity to work in a high-presure and team environment, 
                         where it is essential to be able to closely with my colleagues in order to meet deadlines."
              subContent="Now, I am ready to learn new things, hence I would like to seek a job position as a Full-Stack Developer to gain more experience and
              improve my working skills to be a quality developer."
              style="fs-1 fw-bold"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-6">
            <div className="img-home">
              <img
                className="img-fluid"
                style={{
                  width: "17rem",
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
};

export default Home;
