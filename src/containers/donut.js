import React from "react";
import FiveLayerCircle from "./five-layer-donut";
import FourLayerCircle from "./four-layer-donut";
import ThreeLayerCircle from "./three-layer-donut";
import TwoLayerCircle from "./two-layer-donut";
import ProgressBar from "./progress-layer-donut";

const Donut = props => {
  const { doughnutparts } = props;

  switch (doughnutparts) {
    case 5:
      return (
        <FiveLayerCircle
          toggleEquality={props.hasEqualParts}
          chartSize={props.doughnutsize}
          colorobject={props.doughnutcolors}
          valuesobject={props.doughnutvalues}
        />
      );
    case 4:
      return (
        <FourLayerCircle
          toggleEquality={props.hasEqualParts}
          chartSize={props.doughnutsize}
          colorobject={props.doughnutcolors}
          valuesobject={props.doughnutvalues}
        />
      );
    case 3:
      return (
        <ThreeLayerCircle
          toggleEquality={props.hasEqualParts}
          chartSize={props.doughnutsize}
          colorobject={props.doughnutcolors}
          valuesobject={props.doughnutvalues}
        />
      );
    case 2:
      return (
        <TwoLayerCircle
          toggleEquality={props.hasEqualParts}
          chartSize={props.doughnutsize}
          colorobject={props.doughnutcolors}
          valuesobject={props.doughnutvalues}
        />
      );
    case 1:
      return (
        <ProgressBar
          toggleEquality={props.hasEqualParts}
          chartSize={props.doughnutsize}
          defaultcolors={{ c1: props.doughnutcolors, c2: "default_bg" }}
          progressratevalue={props.completionrate}
        />
      );
    default:
      return (
        <ThreeLayerCircle
          toggleEquality={props.hasEqualParts}
          chartSize={props.doughnutsize}
          colorobject={{ c1: "#D1A917", c2: "#2C9DC2", c3: "#D12A6A" }}
          valuesobject={{ p1: 35, p2: 40, p3: 25 }}
        />
      );
  }
};

export default Donut;
