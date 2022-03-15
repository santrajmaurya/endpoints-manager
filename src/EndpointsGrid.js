import React from "react";
import { Col, Card, Tag, Skeleton, Spin } from "antd";

import { useEndpointsContext } from "./context";

const EndpointsGrid = ({ endpointsList, loading }) => {
  const { setSelectedCard } = useEndpointsContext();

  const onCardChange = (item) => {
    setSelectedCard(item);
  }

  return (
    <>
      {endpointsList.length === 0 && (
        <Col lg={20} style={{  textAlign: 'center' }}>
          <Spin />
        </Col>
      )}
      {endpointsList.map((item) => {
        return (
          <Col lg={6} md={8} sm={12} style={{ padding: "8px" }} key={item.id}>
            <div className="site-card-border-less-wrapper">
            <Card hoverable onClick={e => { e.stopPropagation(); onCardChange(item)}}>
              <p>Device Name: {item.deviceName}</p>
              <p>
                Status: <Tag color={item.status === 'Offline' ? "red" : "green"}>{item.status}</Tag>
              </p>
              <p>Application Count: {item.applicationCount}</p>
              <p>Operating System: {item.operatingSystem}</p>
              <p>IP Address: {item.ipAddress}</p>
              <Skeleton loading={loading} avatar active></Skeleton>
            </Card>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default EndpointsGrid;
