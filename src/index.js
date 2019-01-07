import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Doughnut from "./lib/tui-wrapper";

ReactDOM.render(<Doughnut />, document.getElementById("root"));
export default Doughnut;
registerServiceWorker();
