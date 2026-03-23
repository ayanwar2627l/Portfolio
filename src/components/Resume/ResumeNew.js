import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">

        <Row className="resume">
          <div style={{ color: "white", textAlign: "left", width: "100%", maxWidth: "800px", margin: "0 auto", padding: "20px", background: "rgba(0,0,0,0.5)", borderRadius: "10px" }}>
            <h2 style={{ textAlign: "center", color: "#c770f0" }}>Priyanshu Jaiswal</h2>
            <p style={{ textAlign: "center" }}>
              Email: aryanpriyanshu6204@gmail.com | Mobile: +91-6204894023<br />
              GitHub: ayanwar2627l | LinkedIn: priyanshu-jaiswal01
            </p>
            <hr style={{ backgroundColor: "white" }} />

            <h3 style={{ color: "#c770f0", marginTop: "20px" }}>Education Highlights</h3>
            <ul>
              <li><strong>Lovely Professional University, Phagwara, Punjab</strong><br />Bachelor of Technology - Computer Science and Engineering (Aug 2023 - Present)</li>
            </ul>

            <h3 style={{ color: "#c770f0", marginTop: "20px" }}>Current Experience</h3>
            <ul>
              <li><strong>GitHub Club, LPU: Open-Source Contributor</strong> (Nov 2024 – Present)
                <ul>
                  <li>Contributed to 5+ open-source repositories and collaborated with 50+ developers.</li>
                </ul>
              </li>
            </ul>

            <h3 style={{ color: "#c770f0", marginTop: "20px" }}>Key Achievements</h3>
            <ul>
              <li>Solved 500+ DSA problems on LeetCode and earned 4+ Badges for consistent performance.</li>
            </ul>

            <div style={{ textAlign: "center", marginTop: "40px", fontSize: "1.2rem", padding: "10px" }}>
              <i style={{ marginBottom: "20px", display: "inline-block" }}>To view my complete experience, projects, certifications, and skills:</i><br />
              <Button
                variant="primary"
                href="https://drive.google.com/uc?export=download&id=12iloX7HuoYXyninibzjW8cLkkZmFpJUF"
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV Here
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
