import BaseChatTemplate from '../baseChatTemplate';
import './barChart.scss';
import { h } from 'preact';
export declare function BarChart(props: any): h.JSX.Element;
export declare function BarChartModal(props: any): h.JSX.Element;
export declare function BarChartBase(props: any): h.JSX.Element | undefined;
declare class TemplateBarChart extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateBarChart;
