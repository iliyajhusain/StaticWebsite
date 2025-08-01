import { h } from 'preact';
import BaseChatTemplate from '../../../../templatemanager/templates/baseChatTemplate';
import './pwcPostTemplate.scss';
export declare function Post(props: any): h.JSX.Element | undefined;
declare class PWCPostTemplate extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default PWCPostTemplate;
