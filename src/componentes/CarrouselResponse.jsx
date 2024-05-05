import React from "react";
import Carrousel from "./Carrousel";

const CarrouselResponse = ({ items }) => {
  return (
    <div className="carrouselResponse">
      <Carrousel items={items} />
    </div>
  );
};

export default CarrouselResponse;
