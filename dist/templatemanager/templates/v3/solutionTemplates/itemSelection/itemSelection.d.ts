import BaseChatTemplate from '../../../baseChatTemplate';
import './itemSelection.scss';
declare class ItemSelectionList extends BaseChatTemplate {
    hostInstance: any;
    renderMessage(msgData: any): ChildNode;
}
export default ItemSelectionList;
