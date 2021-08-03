import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export const Lambda = () => {
  const { lambda } = useContext(DataContext);

  return <div className="componente nivel5">LAMBDA - {lambda}</div>;
};
