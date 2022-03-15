import React from "react";
import { Table } from 'antd';
import moment from "moment";

import { useEndpointsContext } from "./context";

import "./App.css";

const columns = [
  {
    title: 'S.No',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: 'Devices',
    dataIndex: 'deviceName',
    key: 'deviceName',
  },
  {
    title: 'Time',
    key: 'time',
    dataIndex: 'time',
    render:(text)=> moment(text).format("DD/MM/YYYY, h:mm a")
  },
];

const Details = () => {
  const { tableData } = useEndpointsContext();
  return (
    <div className="content">
        <Table key={tableData.id} columns={columns} dataSource={tableData} />
    </div>
  );
};

export default Details;
