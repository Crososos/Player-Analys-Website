import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTop from "./components/PageTop";
import SearchArea from "./components/SearchArea";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <PageTop />
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchArea />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
