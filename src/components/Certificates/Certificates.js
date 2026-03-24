import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CertificateCards from "./CertificateCards";

const certificatesData = [
  { imgPath: "/Certificates/Acceptance Certificate Research paper.png", title: "Research Paper Acceptance", description: "Acceptance Certificate for Research paper publication" },
  { imgPath: "/Certificates/certificate of hackathon Code-A-Hunt.jpeg", title: "Hackathon Code-A-Hunt", description: "Certificate of participation in hackathon Code-A-Hunt" },
  { imgPath: "/Certificates/Screenshot 2026-03-24 100239.png", title: "Oracle Foundations Associate", description: "Oracle Data Platform 2025 Certified Foundations Associate" },
  { imgPath: "/Certificates/Screenshot 2026-03-24 100314.png", title: "Git and Github Training", description: "Certificate of Completion from CipherSchools" },
  { imgPath: "/Certificates/Screenshot 2026-03-24 100334.png", title: "Responsive Web Design", description: "Developer Certification from freeCodeCamp" },
  { imgPath: "/Certificates/Screenshot 2026-03-24 100456.png", title: "Master Generative AI", description: "Udemy Certificate for Generative AI & Tools" },
  { imgPath: "/Certificates/Screenshot 2026-03-24 100519.png", title: "Build Generative AI Apps", description: "Udemy Certificate for Generative AI Apps with No-Code" },
  { imgPath: "/Certificates/Screenshot 2026-03-24 100544.png", title: "NPTEL - Social Networks", description: "NPTEL Online Certification for Social Networks" }
];

function Certificates() {
  const [showAll, setShowAll] = useState(false);

  // Show only first 3 certificates unless 'showAll(true)' is triggered
  const displayedCertificates = showAll ? certificatesData : certificatesData.slice(0, 3);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {displayedCertificates.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <CertificateCards
                imgPath={cert.imgPath}
                title={cert.title}
                description={cert.description}
                downloadUrl={cert.imgPath}
              />
            </Col>
          ))}
        </Row>
        
        {certificatesData.length > 3 && (
          <Row style={{ justifyContent: "center", paddingBottom: "50px", position: "relative", zIndex: 99 }}>
            <Button 
              variant="primary" 
              onClick={() => setShowAll(!showAll)}
              style={{ width: "200px", fontSize: "1.2rem", padding: "10px", position: "relative", zIndex: 99 }}
            >
              {showAll ? "Show Less" : "Show All"}
            </Button>
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Certificates;
