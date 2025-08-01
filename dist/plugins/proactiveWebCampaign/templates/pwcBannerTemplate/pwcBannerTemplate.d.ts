import { h } from 'preact';
import BaseChatTemplate from '../../../../templatemanager/templates/baseChatTemplate';
import './pwcBannerTemplate.scss';
export declare function Banner(props: any): h.JSX.Element | undefined;
declare class PWCBannerTemplate extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default PWCBannerTemplate;
