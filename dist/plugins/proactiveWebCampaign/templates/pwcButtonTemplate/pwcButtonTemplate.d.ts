import { h } from 'preact';
import BaseChatTemplate from '../../../../templatemanager/templates/baseChatTemplate';
import './pwcButtonTemplate.scss';
export declare function Button(props: any): h.JSX.Element | undefined;
declare class PWCButtonTemplate extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default PWCButtonTemplate;
