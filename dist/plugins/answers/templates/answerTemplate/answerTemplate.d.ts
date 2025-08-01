import BaseChatTemplate from '../../../../templatemanager/templates/baseChatTemplate';
import './answerTemplate.scss';
import { h } from 'preact';
export declare function Answers(props: any): h.JSX.Element;
export declare function answerTemplateCheck(props: any): h.JSX.Element | undefined;
declare class TemplateAnswers extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default TemplateAnswers;
