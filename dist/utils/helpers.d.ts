export default KoreHelpers;
declare class KoreHelpers {
    static helpers: {
        nl2br: (str: any, runEmojiCheck: any) => any;
        br2nl: (str: any) => any;
        formatAMPM: (date: any) => string;
        formatAMPMDay: (date: any, df: any, tf: any) => string;
        formatDate: (date: any) => string;
        convertMDtoHTML: (val: any, responseType: any, msgItem: any) => any;
        checkMarkdowns: (val: any, hyperLinksMap: any) => any;
        getInnerText: (val: any) => any;
    };
    static prototypes: {
        isNotAllowedHTMLTags: (txtStr: any) => {
            isValid: boolean;
            key: string;
        };
        escapeHTML: (txtStr: any) => string;
        decodePattern: (txtStr: any, version: any) => any;
        koreReplaceAll: (str: any, search: any, replacement: any) => any;
        includes: (str: any, search: any, start: any) => boolean;
    };
}
