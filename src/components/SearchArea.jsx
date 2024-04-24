import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SearchArea = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div
      style={{
        borderBottom: "4px solid green",
        paddingBottom: "10px",
      }}
    >
      <Row
        style={{
          paddingTop: "10px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Col>
          <Button onClick={() => setSearchInput("Duranlar")} variant="primary">Gelişimi Duranlar</Button>
        </Col>
        <Col>
          <Button onClick={() => setSearchInput("Satılacak")} variant="danger">Satılacaklar</Button>
        </Col>
        <Col>
          <Button onClick={() => setSearchInput("Büyük")} variant="warning">30'dan Büyükler</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchArea;
