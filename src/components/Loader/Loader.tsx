import React from "react";
import { Rings } from "react-loader-spinner";

const Loader: React.FC = () => (
  <div className="loader">
    <Rings color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
