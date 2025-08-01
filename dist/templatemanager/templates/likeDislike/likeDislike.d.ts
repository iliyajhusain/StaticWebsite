import BaseChatTemplate from '../baseChatTemplate';
import './likeDislike.scss';
import { h } from 'preact';
export declare function LikeDislike(props: any): h.JSX.Element | undefined;
declare class TemplateLikeDislike extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateLikeDislike;
