import BaseChatTemplate from '../baseChatTemplate';
import './listWidget.scss';
import { h } from 'preact';
export declare function ListWidget(props: any): h.JSX.Element | undefined;
declare class TemplateListWidget extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateListWidget;
