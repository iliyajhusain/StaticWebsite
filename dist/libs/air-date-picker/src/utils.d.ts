export function getEl(el: any, context?: Document): any;
/**
 * Creates HTML DOM element
 * @param {String} [tagName] - element's tag name
 * @param {String} [className]
 * @param {String} [innerHtml]
 * @param {String} [id]
 * @param {Object} [attrs]
 * @returns {HTMLElement}
 */
export function createElement({ tagName, className, innerHtml, id, attrs }?: string | undefined): HTMLElement;
/**
 * Sets multiple attributes of element
 * @param {HTMLElement} el
 * @param {Object} attrs - attributes object
 * @returns {HTMLElement}
 */
export function setAttribute(el: HTMLElement, attrs: Object): HTMLElement;
/**
 * Inserts newElement after targetElement
 * @param {HTMLElement} newElement - element to be inserted
 * @param {HTMLElement} targetElement - after which must be inserted
 * @return {HTMLElement} newElement
 */
export function insertAfter(newElement: HTMLElement, targetElement: HTMLElement): HTMLElement;
/**
 * Makes object deep copy
 * @param {Object} obj
 * @return {Object}
 */
export function deepCopy(obj: Object): Object;
/**
 * Calculates amount of days in passed date
 * @param {Date} date
 * @return {number}
 */
export function getDaysCount(date: Date): number;
/**
 * Get detailed date object
 * @param {Date} date
 * @return {{
 *  date: number,
 *  hours: number,
 *  fullDate: (string|*),
 *  month: number,
 *  fullHours: (string|*),
 *  year: number,
 *  minutes: number,
 *  fullMonth: string,
 *  day: number,
 *  fullMinutes: (string|*),
 *  hours12: number,
 *  dayPeriod: 'am' | 'pm'
 * }}
 */
export function getParsedDate(date: Date): {
    date: number;
    hours: number;
    fullDate: (string | any);
    month: number;
    fullHours: (string | any);
    year: number;
    minutes: number;
    fullMonth: string;
    day: number;
    fullMinutes: (string | any);
    hours12: number;
    dayPeriod: 'am' | 'pm';
};
export function getDayPeriodFromHours24(hours: any): {
    dayPeriod: string;
    hours: number;
};
/**
 * Converts 1 -> 01
 * @param {Number} num
 * @return {String|Number}
 */
export function getLeadingZeroNum(num: number): string | number;
/**
 * Calculates current decade
 * @param {Date} date
 * @return {number[]} - array of two years, decade start - decade end
 */
export function getDecade(date: Date): number[];
/**
 * Subtract days from date
 * @param {Date} date
 * @param {Number} days
 * @return {Date}
 */
export function subDays(date: Date, days: number): Date;
/**
 * Class names' handler, inspired by https://github.com/JedWatson/classnames but very simplified
 * @param {String|Object} classes - class names, could contain strings or object
 */
export function classNames(...classes: string | Object): string;
export function toggleClass(el: any, classes: any): void;
export function addClass(el: any, ...classes: any[]): void;
export function removeClass(el: any, ...classes: any[]): void;
/**
 * Checks if passed dates are the same
 * @param {Date} date1
 * @param {Date} date2
 * @param {String} cellType - one of days|months|years
 * @return {boolean}
 */
export function isSameDate(date1: Date, date2: Date, cellType?: string): boolean;
export function isDateBigger(date: any, comparedDate: any, loose: any): boolean;
export function isDateSmaller(date: any, comparedDate: any): boolean;
/**
 * Copies date
 * @param {Date} date
 * @param {Boolean} [keepTime] - should keep the time in a new date or not
 * @return {Date}
 */
export function copyDate(date: Date, keepTime?: boolean | undefined): Date;
export function resetTime(date: any): any;
export function isDateBetween(date: any, dateFrom: any, dateTo: any): boolean;
/**
 * Adds event listener to DOM element
 * @param {HTMLElement|HTMLCollection} el
 * @param {String} type
 * @param {Function} listener
 */
export function addEventListener(el: HTMLElement | HTMLCollection, type: string, listener: Function): void;
/**
 * Finds closest DOM element to passed target. Similar to jQuery.closest()
 * @param {HTMLElement} target
 * @param {String} selector
 * @return {HTMLElement|Boolean}
 */
export function closest(target: HTMLElement, selector: string): HTMLElement | boolean;
/**
 * Clamps number between min and max
 * @param {Number} val
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
export function clamp(val: number, min: number, max: number): number;
/**
 * Deep merge of objects or arrays, used to merge options
 * @param {object|array} target - target object or array
 * @param {object|array} objects - source objects
 * @return {object|array}
 */
export function deepMerge(target: object | array, ...objects: object | array): object | array;
/**
 * Creates Date object from string or number. If passed param is instance of Date, then just returns it.
 * @param {number|string|Date} date
 * @return {Date | boolean}
 */
export function createDate(date: number | string | Date): Date | boolean;
export function getWordBoundaryRegExp(sign: any): RegExp;
