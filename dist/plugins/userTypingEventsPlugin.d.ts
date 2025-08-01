declare class UserTypingEventsPlugin {
    name: string;
    config: any;
    hostInstance: any;
    isTyping: any;
    typingTimer: any;
    stopTypingInterval: number;
    constructor(config: any);
    onHostCreate(): void;
    onInit(): void;
    sendStopTypingEvent(): void;
}
export default UserTypingEventsPlugin;
