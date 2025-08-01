export default class DatepickerKeyboard {
    constructor({ dp, opts }: {
        dp: any;
        opts: any;
    });
    pressedKeys: Set<any>;
    hotKeys: Map<string[] | string[][], (dateParts: any, dp: any) => any>;
    dp: any;
    opts: any;
    init(): void;
    bindKeyboardEvents(): void;
    destroy(): void;
    getInitialFocusDate(): any;
    focusNextCell(keyName: any): void;
    registerKey(keyName: any): void;
    removeKey(keyName: any): void;
    handleHotKey: (combination: any) => void;
    /**
     * Checks if one of hot key is pressed. If so, then returns array of matched combinations
      * @return {boolean | Array}
     */
    isHotKeyPressed: () => boolean | any[];
    isArrow: (keyCode: any) => boolean;
    onKeyDown: (e: any) => void;
    onKeyUp: (e: any) => void;
}
