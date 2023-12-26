import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12} className="text-center">
          <h1 className="display-1">404</h1>
          <p className="lead">Aradığınız sayfa bulunamadı!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
