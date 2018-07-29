import React from "react";
import Doughnut from "./oneunit";
import Errorboundary from "../../components/ErrorBoundary";

const Main = props => {
  let widthoffset = 0;
  if (props.chartSize == "medium") {
    widthoffset = 37;
  } else if (props.chartSize == "small") {
    widthoffset = 75;
  }
  return (
    <Errorboundary>
      <Doughnut
        chartSize={props.chartSize}
        widthoffset={widthoffset}
        bgclr="white"
        shouldRemainEqual={props.toggleEquality}
        paintShades={props.colorobject}
        pievalues={props.valuesobject}
      />
    </Errorboundary>
  );
};

export default Main;
