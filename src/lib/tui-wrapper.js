import React from "react";
import tui from "tui-chart";
import Errorboundary from "../components/ErrorBoundary";

class Chart extends React.Component {
  state = {};
  componentDidMount() {
    let container = document.getElementById("chart-area");
    console.log("container", container);
    let data = {
      categories: ["Browser"],
      series: [
        {
          name: "Chrome",
          data: 46.02
        },
        {
          name: "IE",
          data: 20.47
        },
        {
          name: "Firefox",
          data: 17.71
        },
        {
          name: "Safari",
          data: 5.45
        },
        {
          name: "Opera",
          data: 3.1
        },
        {
          name: "Etc",
          data: 7.25
        }
      ]
    };
    let options = {
      chart: {
        width: 400,
        height: 400,
        title: "Usage share of web browsers",
        format: function(value, chartType, areaType, valuetype, legendName) {
          if (areaType === "makingSeriesLabel") {
            // formatting at series area
            value = value + "%";
          }

          return value;
        }
      },
      series: {
        radiusRange: ["40%", "100%"],
        showLabel: true
      },
      tooltip: {
        suffix: "%"
      },
      legend: {
        align: "bottom"
      }
    };

    // For apply theme
    // tui.pieChart.registerTheme("myTheme", theme);
    // options.theme = "myTheme";

    tui.pieChart(container, data, options);
  }
  render() {
    return (
      <Errorboundary>
        <div>
          <div id="chart-area" />
          <div>{this.props.children}</div>
        </div>
      </Errorboundary>
    );
  }
}

export default Chart;
