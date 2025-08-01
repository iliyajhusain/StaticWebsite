import BaseChatTemplate from '../baseChatTemplate';
import './system.scss';
import { h } from 'preact';
export declare function System(props: any): h.JSX.Element | undefined;
declare class TemplateSystem extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateSystem;
