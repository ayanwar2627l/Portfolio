import React from "react";
import Card from "react-bootstrap/Card";
import { BsLightningChargeFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.15rem", fontWeight: "300", letterSpacing: "0.3px", lineHeight: "1.8" }}>
            Greetings! I am <strong className="purple">Priyanshu Jaiswal</strong>, based in <strong className="purple">Punjab, India</strong>.
            <br />
            I am currently pursuing my <strong className="purple">B.Tech in Computer Science and Engineering</strong> at <strong className="purple">Lovely Professional University</strong>.
            <br />
            <br />
            When I am not deep in codebase architectures or solving complex algorithms, I dedicate my time to passions that fuel my creativity and keep me active:
          </p>

          <ul style={{ fontSize: "1.05rem", fontWeight: "300", marginTop: "20px", listStyle: "none", paddingLeft: 0 }}>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <BsLightningChargeFill style={{ color: "#c770f0", marginRight: "10px" }} /> Playing Musical Instruments 🎸
            </li>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <BsLightningChargeFill style={{ color: "#c770f0", marginRight: "10px" }} /> Playing Volleyball 🏐
            </li>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <BsLightningChargeFill style={{ color: "#c770f0", marginRight: "10px" }} /> Writing Technical Blogs ✍️
            </li>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <BsLightningChargeFill style={{ color: "#c770f0", marginRight: "10px" }} /> Traveling and Exploring 🌍
            </li>
          </ul>

          <p style={{ color: "#a1c4fd", fontStyle: "italic", fontSize: "1.2rem", marginTop: "30px", borderLeft: "4px solid #c770f0", paddingLeft: "15px" }}>
            "Strive to build things that make a lasting difference!"{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "#c770f0", fontSize: "1.05rem", marginTop: "10px" }}>
            Priyanshu
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
