import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

import "../../index.css";

export const Beta = () => {
  const { beta } = useContext(DataContext);

  return <div className="componente nivel2">BETA - {beta}</div>;
};
