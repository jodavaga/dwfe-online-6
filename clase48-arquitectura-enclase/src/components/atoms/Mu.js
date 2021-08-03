import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export const Mu = () => {
  const { mu } = useContext(DataContext);

  return <div className="componente nivel5">MU - {mu}</div>;
};
