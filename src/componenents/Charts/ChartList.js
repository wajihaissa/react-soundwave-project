import React from "react";
import Chartitem from "./Chartitem";

const ChartList = ({ charts }) => {
  return (
    <div>
      {charts.map((el) => (
        
        <Chartitem movie={el} />

      ))}
    </div>
  );
};

export default ChartList;
