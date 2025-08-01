/**
 * KorePicker plugin classs
 *
 * @decorator Class
 */
declare class RetailAssistTemplatePlugin {
    name: string;
    /**
     * KorePicker configuration
     */
    config: {};
    pickerHTML: any;
    hostInstance: any;
    helpers: any;
    constructor(config: any);
    onHostCreate(): void;
    searchQreryParams(text?: any): void;
    onViewInit(): void;
    handleQueryParams(url: URL): void;
    handleURLChange(): void;
    onInit(): void;
    installinsureAssistTemplates(): void;
    appendClassInBody(): void;
    retailCustomization(): void;
    appendCustomThings(): void;
}
export default RetailAssistTemplatePlugin;
