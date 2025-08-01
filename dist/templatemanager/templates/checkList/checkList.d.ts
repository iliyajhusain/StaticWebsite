import BaseChatTemplate from '../baseChatTemplate';
import './checkList.scss';
import { h } from 'preact';
export declare function CheckListViewMore(props: any): h.JSX.Element;
export declare function CheckList(props: any): h.JSX.Element | null;
declare class TemplateCheckList extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateCheckList;
