import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgSoftwareDownload } from "react-icons/cg";
import { AiOutlineEye } from "react-icons/ai";

function CertificateCards(props) {
  return (
    <Card className="project-card-view">
      {props.isPdf ? (
        <div 
          style={{ 
            height: "200px", 
            backgroundColor: "#2a2a40", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px"
          }}
        >
          <h3 style={{ color: "#c770f0" }}>PDF Document</h3>
        </div>
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: "200px", objectFit: "cover" }} />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="card-actions" style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", width: "100%" }}>
          <Button variant="primary" href={props.downloadUrl} target="_blank" style={{ width: "100%" }}>
            <AiOutlineEye /> &nbsp;
            View Certificate
          </Button>
          <Button variant="primary" href={props.downloadUrl} download style={{ width: "100%" }}>
            <CgSoftwareDownload /> &nbsp;
            Download Certificate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCards;
