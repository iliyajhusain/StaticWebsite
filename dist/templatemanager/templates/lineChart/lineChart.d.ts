import BaseChatTemplate from '../baseChatTemplate';
import './lineChart.scss';
import { h } from 'preact';
export declare function LineChart(props: any): h.JSX.Element;
export declare function LineChartModal(props: any): h.JSX.Element;
export declare function LineChartBase(props: any): h.JSX.Element | undefined;
declare class TemplateLineChart extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateLineChart;
