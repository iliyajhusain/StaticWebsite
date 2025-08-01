declare class BaseTTS {
    hostInstance: any;
    isSpeakerOn: boolean;
    appendPickerHTMLtoChatWindowFooter(pickerHTML: any): void;
    installTextToSpeechTemplate(): void;
    getTextToSpeechTemplateString(): string;
    bindEvents(): void;
    bindEventsV3(): void;
}
export default BaseTTS;
