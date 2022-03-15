import React, { useState, useEffect } from "react";
import { Row, Col, Button, Typography, message } from "antd";
import EndpointsGrid from "./EndpointsGrid";
import { useEndpointsContext } from "./context";
import moment from "moment";

import "./App.css";

const { Title } = Typography;

const EndpointsList = () => {
  const [endpointsList, setEndpointsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { tableData, setTableData, selectedCard } = useEndpointsContext();

  useEffect(() => {
    setLoading(true);
    fetch("https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60")
      .then((response) => response.json())
      .then((data) => setEndpointsList(data));
    setLoading(false);
  }, [tableData]);

  const handleAction = (e) => {
    const { name } = e.target;
    selectedCard.action = name;
    selectedCard.time = moment();
    message.success('Action performed successfully.')
    setTableData(tableData => [...tableData, selectedCard]);
  }

  return (
    <>
      <Row className="content">
        <Col sm={24} style={{ textAlign: "center" }}>
          <Title level={3}>Endpoints Manager</Title>
        </Col>
        <Col sm={12}>
          <Title level={5}>Available Endpoints</Title>
        </Col>
        <Col sm={12} xs={12} style={{ float: "right" }}>
          <div className="button">
            <Button name="Scan" onClick={(e) => handleAction(e)} size="large" type="primary">
              Scan
            </Button>{" "}
            <Button name="Terminate" size="large" onClick={(e) => handleAction(e)}>Terminate</Button>
          </div>
        </Col>
      </Row>
      <Row span={24}>
        <EndpointsGrid endpointsList={endpointsList} loading={loading} />
      </Row>
    </>
  );
};

export default EndpointsList;
