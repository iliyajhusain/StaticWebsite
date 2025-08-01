import BaseChatTemplate from '../baseChatTemplate';
import './feedback.scss';
import { h } from 'preact';
export declare function additionalFeedback(props: any): h.JSX.Element;
export declare function Feedback(props: any): h.JSX.Element;
export declare function FeedbackTemplate(props: any): h.JSX.Element | undefined;
declare class TemplateFeedback extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateFeedback;
