import './historyLoaderMsg.scss';
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
export function HistoryLoader(props: any) {
    const text = props.msgData;
    const hostInstance = props.hostInstance;
    const [brandingInfo, updateBrandingInfo] = useState(hostInstance.config.brandingCopy);

    useEffect(() => {
        hostInstance.on('onBrandingUpdate', function (event: any) {
            updateBrandingInfo(JSON.parse(JSON.stringify(event.brandingData)))
        });
    }, [brandingInfo])

    return (
        <div className="history-loading-wrapper">
            <div className="history-bg-content">
                <div className="loader-history"></div>
                <div className="title-loading">{text}</div>
            </div>
        </div>
    );
}