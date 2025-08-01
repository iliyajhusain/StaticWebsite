declare class ProactiveWebCampaignPlugin {
    name: string;
    config: any;
    hostInstance: any;
    enablePWC: boolean;
    campInfo: any;
    location: any;
    visible: boolean;
    authInfo: any;
    timeSpent: any;
    isCityCountryRule: any;
    cityCountryData: any;
    elementHoverDuration: number;
    constructor(config: any);
    onHostCreate(): void;
    onInit(): void;
    sendPWCStartEvent(): void;
    installPWCTemplates(): void;
    eventLoop(): Promise<void>;
    validateAction(messageToBot: any, ruleData: any, campInstanceId: any, condition: any, campId: any): void;
    isJourneyValid(pageVisitArray: any, websiteArray: any): boolean;
    sendEvent(pageObject: any, type: any): void;
    checkEngagementHours(engHours: any): boolean;
    createTimeSpentObjs(): void;
    calculateTimeSpent(pageObj: any, type: any): void;
    getLocationDetails(): void;
    sendApiEvent(payload: string, route: string, campInstanceId?: string): Promise<void>;
}
export default ProactiveWebCampaignPlugin;
