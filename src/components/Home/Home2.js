import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-profile.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, C, C++, Java, Javascript, and React{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, MERN Stack Solutions,{" "}
                </b>
              </i>
              and solving complex algorithms.
              <br />
              <br />
              I love solving <b className="purple">DSA problems</b> and playing with algorithms. I solve problems in the most creative ways and have a strong <b className="purple">LeetCode</b> profile.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ maxHeight: "400px", width: "100%", objectFit: "cover", borderRadius: "20px", border: "4px solid #c770f0", boxShadow: "0px 0px 25px 5px rgba(199, 112, 240, 0.6)" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
