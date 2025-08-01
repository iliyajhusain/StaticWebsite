import BaseTTS from "../BaseTTS";
/**
 *  Browser TTSPlugin class
 *
 * @decorator Class
 */
declare class BrowserTTS extends BaseTTS {
    name: string;
    speechSyn: any;
    audioMsgs: any[];
    audioPlaying: boolean;
    onHostCreate(): void;
    onInit(): void;
    OnSpeakerButtonClick(): void;
    speakWithWebAPI(_txtToSpeak: string | undefined): false | undefined;
    playMessageSequence(): void;
    stop(): void;
}
export default BrowserTTS;
