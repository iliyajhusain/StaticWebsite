import BaseChatTemplate from '../baseChatTemplate';
import './advancedMultiList.scss';
import { h } from 'preact';
export declare function AdvancedMultiListExtension(props: any): h.JSX.Element;
export declare function AdvancedMultiListExtensionSlider(props: any): h.JSX.Element;
export declare function AdvancedMultiList(props: any): h.JSX.Element | undefined;
declare class AdvancedMultiListTemplate extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default AdvancedMultiListTemplate;
