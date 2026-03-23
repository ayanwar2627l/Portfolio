import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
            <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CardWise – Credit Card Tracker"
              description="Developed an expense tracker that optimizes reward utilization and reduces manual entry time by 40%. Integrated local storage and dynamic DOM updates for real-time expense visualization. Designed an auto-tracking system that intelligently maximizes reward benefits and enhances user savings."
              ghLink="https://github.com/ayanwar2627l/CardWise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HabitTrace - Habit Tracker"
              description="Engineered a habit-tracking web app enabling CRUD operations with JWT-based authentication and MongoDB Atlas for secure cloud data management. Integrated Chart.js visualizations to display weekly performance analytics. Implemented an intuitive user interface to promote daily engagement."
              ghLink="https://github.com/ayanwar2627l/HabitTrace"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="HyperRush – Fashion E-commerce"
              description="Designed and developed a scalable fashion e-commerce application allowing users to explore, compare, and purchase apparel. Implemented advanced search functionality with category-based navigation. Built secure and efficient RESTful APIs for authentication and inventory management using MERN Stack."
              ghLink="https://github.com/ayanwar2627l/HyperRush"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
