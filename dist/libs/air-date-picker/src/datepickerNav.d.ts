export default class DatepickerNav {
    constructor({ dp, opts }: {
        dp: any;
        opts: any;
    });
    dp: any;
    opts: any;
    init(): void;
    _defineDOM(): void;
    $title: any;
    $prev: any;
    $next: any;
    _bindEvents(): void;
    _bindDatepickerEvents(): void;
    destroy(): void;
    _createElement(): void;
    $el: HTMLElement | undefined;
    _getTitle(): any;
    handleNavStatus(): void;
    _disableNav(actionName: any): void;
    _resetNavStatus(): void;
    onClickNav: (e: any) => void;
    onChangeViewDate: () => void;
    onChangeCurrentView: () => void;
    onClickNavTitle: () => void;
    _buildBaseHtml(): void;
    get isNavIsFunction(): string | undefined;
    update: () => void;
    renderDelay: () => void;
    render: () => void;
}
