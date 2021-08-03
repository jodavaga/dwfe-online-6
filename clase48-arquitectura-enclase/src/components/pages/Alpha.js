import React from "react";

import "../../index.css";
import { Delta } from "../organisms/Delta";
import { Epsilon } from "../organisms/Epsilon";

export const Alpha = () => {
  return (
    <div className="componente nivel2">
      ALPHA
      <Delta />
      <Epsilon />
    </div>
  );
};
