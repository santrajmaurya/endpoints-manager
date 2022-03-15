import React, { useState } from "react";

const EndpointContext = React.createContext();

export const EndpointProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const [ selectedCard, setSelectedCard] = useState({});

  return (
    <EndpointContext.Provider value={{ tableData, selectedCard, setTableData, setSelectedCard }}>
      {children}
    </EndpointContext.Provider>
  );
};

export const useEndpointsContext = () => React.useContext(EndpointContext);
