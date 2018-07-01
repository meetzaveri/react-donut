import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Doughnut from "./containers/donut";
import { ProgressBar } from "./containers/progress-layer-donut";

ReactDOM.render(
  <Doughnut
    hasEqualParts={false}
    doughnutsize="large"
    doughnutparts={4}
    doughnutcolors={{
      c1: "#D1A917",
      c2: "#2C9DC2",
      c3: "#D12A6A",
      c4: "#535353",
      c5: "#AC6946"
    }}
    doughnutvalues={{ p1: 5, p2: 20, p3: 25, p4: 30, p5: 20 }}
    completionrate={240}
  />,
  document.getElementById("root")
);
export default Doughnut;
registerServiceWorker();
