import React from "react";
import ProgressCircle from "./progresscircle";
import MediumSizedDoughnut from "./medium";
import LargeSizedDoughnut from "./large";
import SmallSizedDoughnut from "./small";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.chartSize == "large") {
      return (
        <LargeSizedDoughnut
          shouldRemainEqual={this.props.toggleEquality}
          paintShades={this.props.defaultcolors}
          progressrate={this.props.progressratevalue}
          bgclr="white"
        />
      );
    } else if (this.props.chartSize == "medium") {
      return (
        <MediumSizedDoughnut
          shouldRemainEqual={this.props.toggleEquality}
          paintShades={this.props.defaultcolors}
          progressrate={this.props.progressratevalue}
          bgclr="white"
        />
      );
    } else if (this.props.chartSize == "small") {
      return (
        <SmallSizedDoughnut
          shouldRemainEqual={this.props.toggleEquality}
          paintShades={this.props.defaultcolors}
          progressrate={this.props.progressratevalue}
          bgclr="white"
        />
      );
    } else {
      return (
        <ProgressCircle
          shouldRemainEqual={this.props.toggleEquality}
          paintShades={this.props.defaultcolors}
          progressrate={this.props.progressratevalue}
          bgclr="white"
        />
      );
    }
  }
}

export default Main;
