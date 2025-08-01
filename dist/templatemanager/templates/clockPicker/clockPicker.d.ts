import BaseChatTemplate from '../baseChatTemplate';
import './clockPicker.scss';
import { h } from 'preact';
export declare function ClockPicker(props: any): h.JSX.Element | undefined;
declare class TemplateClockPicker extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateClockPicker;
