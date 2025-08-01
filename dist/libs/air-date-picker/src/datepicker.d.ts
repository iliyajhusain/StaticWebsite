export default class Datepicker {
    static defaults: {
        classes: string;
        inline: boolean;
        locale: {
            days: string[];
            daysShort: string[];
            daysMin: string[];
            months: string[];
            monthsShort: string[];
            today: string;
            clear: string;
            dateFormat: string;
            timeFormat: string;
            firstDay: number;
        };
        startDate: Date;
        firstDay: string;
        weekends: number[];
        dateFormat: string;
        altField: string;
        altFieldDateFormat: string;
        toggleSelected: boolean;
        keyboardNav: boolean;
        selectedDates: boolean;
        container: string;
        isMobile: boolean;
        visible: boolean;
        position: string;
        offset: number;
        view: string;
        minView: string;
        showOtherMonths: boolean;
        selectOtherMonths: boolean;
        moveToOtherMonthsOnSelect: boolean;
        showOtherYears: boolean;
        selectOtherYears: boolean;
        moveToOtherYearsOnSelect: boolean;
        minDate: string;
        maxDate: string;
        disableNavWhenOutOfRange: boolean;
        multipleDates: boolean;
        multipleDatesSeparator: string;
        range: boolean;
        dynamicRange: boolean;
        buttons: boolean;
        monthsField: string;
        showEvent: string;
        autoClose: boolean;
        prevHtml: string;
        nextHtml: string;
        navTitles: {
            days: string;
            months: string;
            years: string;
        };
        timepicker: boolean;
        onlyTimepicker: boolean;
        dateTimeSeparator: string;
        timeFormat: string;
        minHours: number;
        maxHours: number;
        minMinutes: number;
        maxMinutes: number;
        hoursStep: number;
        minutesStep: number;
        onSelect: boolean;
        onChangeViewDate: boolean;
        onChangeView: boolean;
        onRenderCell: boolean;
        onShow: boolean;
        onHide: boolean;
        onClickDayName: boolean;
    };
    static version: string;
    static defaultGlobalContainerId: string;
    static buildGlobalContainer(id: any): void;
    static replacer(str: any, reg: any, data: any): any;
    constructor(el: any, opts: any);
    $el: any;
    $datepicker: HTMLElement | undefined;
    opts: any;
    $customContainer: any;
    $altField: any;
    elIsInput: boolean | undefined;
    inited: boolean | undefined;
    visible: boolean | undefined;
    viewDate: boolean | Date | undefined;
    focusDate: boolean | undefined;
    initialReadonly: any;
    customHide: boolean | undefined;
    currentView: any;
    selectedDates: any[] | undefined;
    views: {} | undefined;
    keys: any[] | undefined;
    rangeDateFrom: string | undefined;
    rangeDateTo: string | undefined;
    timepickerIsActive: boolean | undefined;
    treatAsInline: any;
    viewIndexes: string[];
    init(): void;
    keyboardNav: DatepickerKeyboard | undefined;
    _createMobileOverlay(): void;
    _createComponents(): void;
    nav: DatepickerNav | null | undefined;
    _destroyComponents(): void;
    _addMobileAttributes(): void;
    _removeMobileAttributes(): void;
    _createMinMaxDates(): void;
    minDate: boolean | Date | undefined;
    maxDate: boolean | Date | undefined;
    _addTimepicker(): void;
    $timepicker: HTMLElement | undefined;
    timepicker: boolean | DatepickerTime | undefined;
    _addButtons(): void;
    $buttons: HTMLElement | undefined;
    buttons: DatepickerButtons | undefined;
    _bindSubEvents(): void;
    _buildBaseHtml(): void;
    $content: any;
    $pointer: any;
    $nav: any;
    _handleLocale(): void;
    locale: Object | undefined;
    _setPositionClasses(pos: any): void;
    _bindEvents(): void;
    _limitViewDateByMaxMinDates(): void;
    formatDate(date: boolean | Date | undefined, string: any): any;
    /**
     * Changes month, year, decade to next period
     */
    next: () => void;
    /**
     * Changes month, year, decade to prev period
     */
    prev: () => void;
    down(date: any): void;
    up(date: any): void;
    /**
     * Selects date, if array is passed then selects dates one by one
     * @param {DateLike|Array<DateLike>} date
     * @param {object} [params] - extra parameters
     * @param {boolean} [params.updateTime] - should update timepicker's time from passed date
     * @param {boolean} [params.silent] - if true, then onChange event wont be triggered
     * @return {Promise<unknown>} - returns promise, since input value updates asynchronously, after promise resolves, we need a promise tobe able to get current input value
     * @example selectDate(new Date()).then(() => {console.log(dp.$el.value)})
     */
    selectDate(date: DateLike | Array<DateLike>, params?: {
        updateTime?: boolean | undefined;
        silent?: boolean | undefined;
    } | undefined): Promise<unknown>;
    unselectDate(date: any): boolean | undefined;
    replaceDate(selectedDate: any, newDate: any): void;
    /**
     * Clears all selected dates
     * @param {boolean} params.silent  - trigger or not user onSelect event
     */
    clear(params?: {}): Promise<any>;
    lastSelectedDate: boolean | Date | undefined;
    show(): void;
    hide(): void;
    hideAnimation: boolean | undefined;
    _finishHide: () => void;
    setPosition: (position: any, isViewChange?: boolean) => void;
    _setInputValue: () => void;
    _getInputValue: (dateFormat: any) => any;
    _triggerOnSelect(): void;
    /**
     * Checks if date is already selected, returns selected date if finds one
     * Returns selected date, need for timepicker
     * @param {Date} date
     * @param {String} cellType - days, months, years
     * @return {boolean|Date}
     * @private
     */
    private _checkIfDateIsSelected;
    _handleAlreadySelectedDates(alreadySelectedDate: any, newSelectedDate: any): void;
    _handleUpDownActions(date: any, dir: any): void;
    _handleRangeOnFocus(): void;
    _scheduleCallAfterTransition: (cb: any) => void;
    _onTransitionEnd: (() => void) | undefined;
    _cancelScheduledCall: () => void;
    /**
     * Sets new view date of datepicker
     * @param {DateLike} date
     */
    setViewDate: (date: DateLike) => void;
    /**
     * Sets new focusDate
     * @param {Date} date
     * @param {Object} [params]
     * @param {Boolean} params.viewDateTransition
     */
    setFocusDate: (date: Date, params?: {
        viewDateTransition: boolean;
    } | undefined) => void;
    /**
     * Sets new datepicker view
     * @param {ViewType} view
     */
    setCurrentView: (view: ViewType) => void;
    /**
     * Updates lastSelectedDate param and triggers corresponding event
     * @param {Date|Boolean} date - date or empty
     */
    _updateLastSelectedDate: (date: Date | boolean) => void;
    /**
     * Finds cell HTML element
     * @param {DateLike} cellDate
     * @param {CellType} cellType
     * @return {HTMLElement | null}
     */
    getCell(cellDate: DateLike, cellType?: CellType): HTMLElement | null;
    destroy: () => void;
    update: (newOpts?: {}) => void;
    _showMobileOverlay(): void;
    _hasTransition(): boolean;
    isOtherMonth: (date: any) => boolean;
    isOtherYear: (date: any) => boolean;
    isOtherDecade: (date: any) => boolean;
    _onChangeSelectedDate: ({ silent }: {
        silent: any;
    }) => void;
    _onChangeFocusedDate: (date: any, { viewDateTransition }?: {
        viewDateTransition: any;
    }) => void;
    _onChangeTime: ({ hours, minutes }: {
        hours: any;
        minutes: any;
    }) => void;
    _onFocus: (e: any) => void;
    _onBlur: (e: any) => void;
    _onMouseDown: (e: any) => void;
    inFocus: boolean | undefined;
    _onMouseUp: (e: any) => void;
    _onResize: () => void;
    _onClickOverlay: () => void;
    /**
     * Returns all dates that are currently should be shown in calendar
     * @param {ViewType} viewType
     * @returns {*}
     */
    getViewDates: (viewType?: ViewType) => any;
    get shouldUpdateDOM(): any;
    get parsedViewDate(): {
        date: number;
        hours: number;
        fullDate: any;
        month: number;
        fullHours: any;
        year: number;
        minutes: number;
        fullMonth: string;
        day: number;
        fullMinutes: any;
        hours12: number;
        dayPeriod: "pm" | "am";
    };
    get currentViewSingular(): any;
    get curDecade(): number[];
    get viewIndex(): number;
    get isFinalView(): boolean;
    get hasSelectedDates(): boolean;
    get isMinViewReached(): boolean;
    get $container(): any;
    isWeekend: (day: any) => any;
    /**
     * Clamps passed date between min and max date
     * @param {Date} date
     */
    getClampedDate: (date: Date) => Date;
}
import DatepickerKeyboard from "./datepickerKeyboard";
import DatepickerNav from "./datepickerNav";
import DatepickerTime from "./datepickerTime";
import DatepickerButtons from "./datepickerButtons";
