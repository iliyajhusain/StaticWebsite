import BaseChatTemplate from '../baseChatTemplate';
import './radioOptions.scss';
import { h } from 'preact';
export declare function RadioOptionsComp(props: any): h.JSX.Element | null;
export declare function RadioOptionsSlider(props: any): h.JSX.Element;
export declare function RadioOptions(props: any): h.JSX.Element | undefined;
declare class RadioOptionsTemplate extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default RadioOptionsTemplate;
