export interface ReactDonutProps {
  chartData: Array<Object>;

  chartRadiusRange: Array<String>;

  name?: string;

  title?: string;

  chartThemeConfig?: Object;

  chartWidth?: number;

  chartHeight?: number;

  showChartLabel?: boolean;

  legendAlignment?: string;
}

declare const ReactDonut: React.ComponentType<ReactDonutProps>;
export default ReactDonut;
