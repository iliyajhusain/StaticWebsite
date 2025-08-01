import './fileUploader.scss';
declare class KoreMultiFileUploaderPlugin {
    name: string;
    filetypes: any;
    allowedFileTypes: any;
    appConsts: any;
    fileToken: any;
    boundary: any;
    prevRange: any;
    sel1: any;
    fileUploaderCounter: any;
    xhrValue: any;
    xhr: any;
    private _conc;
    private _mdat;
    _fields: any[];
    hostInstance: any;
    ele: any;
    innerText: any;
    config: any;
    options: any;
    $element: any;
    chatInitialize: any;
    multipartTimeInterval: any;
    multipartTimeIntervalCount: any;
    uploadingInProgress: any;
    successEv: Event;
    errorEv: Event;
    constructor(config: any);
    onInit(): void;
    multifileuploader(option: any, ele: any): void;
    bindEvents(): void;
    bytesToMB(bytes: any): number;
    onHostCreate(): void;
    convertFiles(selectedFile: any, customFileName: undefined): void;
    getFileToken(_recState: any, _file: any): void;
    getUID(pattern: string | undefined): string;
    getDataURL(src: CanvasImageSource): any;
    prepareUploadConfig(selectedFile: any, _file: any): void;
    getfileuploadConf(_recState: {
        fileType: any;
        name: any;
    }): any;
    acceptFileRecording(_recState: any): void;
    initiateRcorder(_recState: any, ele: any): void;
    successHandler(e: any, _recState: any): void;
    errorHandler(e: any, _recState: any): void;
    onFileToUploaded(_this: this, evt: any, _recState: any): void;
    onUploadError(_this: any, evt: any, _recState: any): void;
    onError(): void;
    MultipartData(): void;
    MultipartDataAppend(key: string, value: {
        data: any;
        fileName: any;
    }): void;
    MultipartDatatoString(): string;
    multiFileUploader(options: any, element: any): void;
    startUpload(_this: {
        options: {
            url: any;
            headers: {
                [x: string]: any;
            };
            data: {
                [x: string]: any;
            };
        };
    }, ele?: any): void;
    startChunksUpload(_this: {
        options: {
            tokenUrl: any;
            headers: {
                [x: string]: any;
            };
        };
    }): void;
    getConnection(_this: any): any;
    getHTTPConnecton(): any;
    HttpRequest(): any;
    progressListener(_this: any, evt: any, ele: any): void;
    loadListener(_this: any, evt: {
        target: {
            response: string;
        };
    }): void;
    errorListener(_this: {
        events: {
            error: {
                params: any;
            };
        };
        $element: {
            trigger: (arg0: any) => void;
        };
    }, evt: any): void;
    initUploadChunk(_this: any): void;
    uploadChunk(_this: {
        options: {
            chunkUrl: any;
            headers: {
                [x: string]: any;
            };
        };
    }): void;
    commitFile(_this: {
        options: {
            chunkUrl: string;
            headers: {
                [x: string]: any;
            };
            data: {
                [x: string]: any;
            };
        };
    }): void;
    setOptions(_this: {
        options: any;
    }, opts: any): {
        options: any;
    };
    createElement(selectedFile: any): void;
}
export default KoreMultiFileUploaderPlugin;
