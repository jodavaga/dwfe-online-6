import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export const Kappa = () => {
  const { kappa } = useContext(DataContext);

  return <div className="componente nivel5">KAPPA - {kappa}</div>;
};
