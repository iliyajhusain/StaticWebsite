import './taskPickerTemplate.scss';
declare class TaskPickerTemplate {
    renderMessage(msgData: any): void;
    bindEvents(): void;
    initiateTaskPicker(msgData: any): void;
    getTemplateString(): string;
    getTaskMenuItems: () => any;
    getTaskPickerOptions(taskPickerConfig: any): any;
    getTaskPickerOptionsTemplate(): string;
}
export default TaskPickerTemplate;
