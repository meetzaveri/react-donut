import React from "react";
import tui from "tui-chart";
import Errorboundary from "../components/ErrorBoundary";
import PropTypes from "prop-types";

class Chart extends React.Component {
  state = {};
  componentDidMount() {
    let container = document.getElementById("chart-area");
    console.log("container", container);
    let data = {
      categories: ["Browser"],
      series: this.props.chartData
    };
    let options = {
      chart: {
        width: this.props.chartWidth,
        height: this.props.chartHeight,
        title: this.props.title,
        format: function(value, chartType, areaType, valuetype, legendName) {
          if (areaType === "makingSeriesLabel") {
            // formatting at series area
            value = value + "%";
          }

          return value;
        }
      },
      series: {
        radiusRange: this.props.chartRadiusRange,
        showLabel: this.props.showChartLabel
      },
      tooltip: {
        suffix: "%"
      },
      legend: {
        align: this.props.legendAlignment
      }
    };
    var theme = this.props.chartThemeConfig;
    // tui.chart.registerTheme('newTheme', theme);
    // For apply theme
    tui.registerTheme("myTheme", theme);
    options.theme = "myTheme";

    tui.pieChart(container, data, options);
  }
  render() {
    return (
      <Errorboundary>
        <div id="chart-area" />
      </Errorboundary>
    );
  }
}

Chart.defaultProps = {
  name: "Stranger",
  chartData: [
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
  ],
  chartWidth: 700,
  chartHeight: 700,
  title: "Usage share of web browsers",
  chartRadiusRange: ["60%", "100%"],
  showChartLabel: true,
  legendAlignment: "bottom",
  chartThemeConfig: {}
};

export default Chart;
