import BaseChatTemplate from '../baseChatTemplate';
import './templateAttachment.scss';
import { h } from 'preact';
export declare function Attachment(props: any): h.JSX.Element | undefined;
declare class TemplateAttachmentV3 extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateAttachmentV3;
