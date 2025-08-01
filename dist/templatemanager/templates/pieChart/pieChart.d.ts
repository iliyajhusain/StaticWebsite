import BaseChatTemplate from '../baseChatTemplate';
import './pieChart.scss';
import { h } from 'preact';
export declare function PieChart(props: any): h.JSX.Element;
export declare function PieChartModal(props: any): h.JSX.Element;
export declare function PieChartBase(props: any): h.JSX.Element | undefined;
declare class TemplatePieChart extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplatePieChart;
