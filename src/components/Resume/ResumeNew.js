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
          <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <img 
              src="/CV/Priyanshucv.png" 
              alt="Priyanshu CV" 
              style={{ width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }} 
            />

            <div style={{ textAlign: "center", marginTop: "40px", fontSize: "1.2rem", padding: "10px" }}>
              <i style={{ marginBottom: "20px", display: "inline-block" }}>To view my complete experience, projects, certifications, and skills:</i><br />
              <Button
                variant="primary"
                href="/CV/Priyanshucv 2026.pdf"
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
