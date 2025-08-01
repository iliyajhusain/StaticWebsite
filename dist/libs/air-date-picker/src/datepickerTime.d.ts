/**
 * Timepicker
 *
 * How does it work:
 * Timepicker has its own hour and minute values. At the start they will be equal to current time, or to min/max date values.
 * When user selects date, timepicker add its values to the date (when consts.eventChangeSelectedDate is triggered).
 * When lastSelectedDate is changed (e.g. when user clicks on already selected date in multiple dates mode or in range mode)
 * then hour and minute values are taken from this date and stored in a timepicker instance.
 *
 */
export default class DatepickerTime {
    constructor({ opts, dp }?: {
        opts: any;
        dp: any;
    });
    opts: any;
    dp: any;
    ampm: boolean | undefined;
    init(): void;
    bindDatepickerEvents(): void;
    bindDOMEvents(): void;
    createElement(): void;
    $el: HTMLElement | undefined;
    destroy(): void;
    buildHtml(): void;
    defineDOM(): void;
    $ranges: NodeListOf<Element> | undefined;
    $hours: any;
    $minutes: any;
    $hoursText: any;
    $minutesText: any;
    $ampm: any;
    setTime(date: any): void;
    addTimeToDate(date: any): void;
    setMinMaxTime(date: any): void;
    setCurrentTime(date: any): void;
    set hours(arg: any);
    get hours(): any;
    minutes: any;
    setMinMaxTimeFromOptions(): void;
    minHours: any;
    minMinutes: any;
    maxHours: any;
    maxMinutes: any;
    setMinTimeFromMinDate(date: any): void;
    setMaxTimeFromMaxDate(date: any): void;
    updateSliders(): void;
    updateText(): void;
    toggleTimepickerIsActive: (value: any) => void;
    onChangeSelectedDate: ({ date, updateTime }: {
        date: any;
        updateTime?: boolean | undefined;
    }) => void;
    onChangeLastSelectedDate: (date: any) => void;
    onChangeInputRange: (e: any) => void;
    onMouseEnterLeave: (e: any) => void;
    onFocus: () => void;
    onBlur: () => void;
    _hours: any;
    displayHours: any;
    dayPeriod: string | undefined;
    render(): void;
}
