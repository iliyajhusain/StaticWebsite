import BaseChatTemplate from '../../../baseChatTemplate';
import './solutionCarausal.scss';
import { h } from 'preact';
export declare function Carousel(props: any): h.JSX.Element | undefined;
declare class SolutionCarouselTemplate extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default SolutionCarouselTemplate;
