declare class V2Plugin {
    name: string;
    config: {};
    hostInstance: any;
    constructor(config: any);
    onHostCreate(): void;
    onInit(): void;
    installPickerTemplates(): void;
}
export default V2Plugin;
