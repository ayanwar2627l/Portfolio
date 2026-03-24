import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <img 
        src="https://leetcard.jacoblin.cool/priyanshu1112?theme=dark&font=Baloo%202&ext=heatmap" 
        alt="LeetCode Heatmap" 
        style={{ width: "100%", maxWidth: "800px", borderRadius: "10px" }}
      />
    </Row>
  );
}

export default Github;
