export default class DatepickerButtons {
    constructor({ dp, opts }: {
        dp: any;
        opts: any;
    });
    dp: any;
    opts: any;
    init(): void;
    createElement(): void;
    $el: HTMLElement | undefined;
    destroy(): void;
    clearHtml(): DatepickerButtons;
    generateButtons(): void;
    attachEventToButton(button: any, onClick: any): void;
    /**
     * Creates datepicker button HTML element
     * @param {String|Function} content - button content
     * @param {String} [className]
     * @param {String} [tagName=button]
     * @param {Object} [attrs]
     * @return HTMLElement
     */
    createButton({ content, className, tagName, attrs }: string | Function): HTMLElement;
    render(): void;
}
