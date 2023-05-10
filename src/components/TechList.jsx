import React from "react";
import { techList } from "../constants/TechList";

const TechList = () => {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-6 gap-4 justify-items-center mt-3">
      {techList.map((item, i) => (
        <div className="" key={i}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default TechList;
