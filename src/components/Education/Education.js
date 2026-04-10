import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Lovely Professional University",
    duration: "2023 – 2027",
    grade: "CGPA: 8.4",
    icon: "🎓",
    color: "#64ffda",
  },
  {
    degree: "Intermediate (12th)",
    field: "Science – PCM",
    institution: "USM Ser Sec Public School ,Nangloi,Delhi",
    duration: "2021 – 2023",
    grade: "78.2%",
    icon: "📚",
    color: "#c770f0",
  },
  {
    degree: "High School (10th)",
    field: "General Studies",
    institution: "St.Dominic Savio's High School",
    duration: "2019 – 2021",
    grade: "90.2%",
    icon: "🏫",
    color: "#64b5f6",
  },
];

function Education() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("edu-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="education-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "60px" }}>
          My academic journey that shaped who I am today.
        </p>

        <div className="edu-timeline">
          {/* Animated vertical line */}
          <div className="edu-timeline-line" />

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`edu-card-wrapper ${index % 2 === 0 ? "edu-left" : "edu-right"}`}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              {/* Timeline dot */}
              <div
                className="edu-dot"
                style={{ borderColor: edu.color, boxShadow: `0 0 16px ${edu.color}88` }}
              >
                <span className="edu-dot-icon">{edu.icon}</span>
              </div>

              <div className="edu-card" style={{ borderColor: `${edu.color}44` }}>
                {/* Glow accent bar */}
                <div
                  className="edu-card-accent"
                  style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
                />

                <div className="edu-card-header">
                  <div className="edu-icon-large">{edu.icon}</div>
                  <div>
                    <h3 className="edu-degree" style={{ color: edu.color }}>
                      {edu.degree}
                    </h3>
                    <h4 className="edu-field">{edu.field}</h4>
                  </div>
                </div>

                <div className="edu-institution">
                  <span className="edu-institution-icon">🏛️</span>
                  {edu.institution}
                </div>

                <div className="edu-meta">
                  <span className="edu-badge edu-duration">
                    <span>📅</span> {edu.duration}
                  </span>
                  <span className="edu-badge edu-grade" style={{ borderColor: edu.color, color: edu.color }}>
                    <span>⭐</span> {edu.grade}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Education;
