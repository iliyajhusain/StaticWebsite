import BaseChatTemplate from '../baseChatTemplate';
import './dateRange.scss';
import { h } from 'preact';
export declare function DateRangeExt(props: any): h.JSX.Element;
export declare function DateRange(props: any): h.JSX.Element | undefined;
declare class TemplateDatePicker extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateDatePicker;
