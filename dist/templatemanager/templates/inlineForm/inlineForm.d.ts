import { h } from 'preact';
import BaseChatTemplate from '../baseChatTemplate';
import './inlineForm.scss';
export declare function InlineForm(props: any): h.JSX.Element | undefined;
declare class InlineFormTemplate extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default InlineFormTemplate;
