import BaseChatTemplate from '../baseChatTemplate';
import './list.scss';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Message } from '../message/message';
import IconsManager from '../../base/iconsManager';
import { getHTML } from '../../base/domManager';
import KoreHelpers from '../../../utils/helpers';

export function ListMore(props: any) {
    const iconHelper = new IconsManager();
    const hostInstance = props.hostInstance;
    const msgData = props.msgData.msgData;
    console.log("ListMore msgData:", msgData); 
    const closeMenu = () => {
        hostInstance.chatEle.querySelector('.chat-actions-bottom-wraper').classList.add('close-bottom-slide');
        setTimeout(() => {
            hostInstance.chatEle.querySelector('.chat-actions-bottom-wraper').remove('.chat-actions-bottom-wraper');
        }, 150);
    }

    const handleClick = (e: any) => {
        if (e.type.toLowerCase() == 'postback' || e.type.toLowerCase() == 'text') {
            hostInstance.sendMessage(e.payload || e.title || e.value, { renderMsg: e.title });
            closeMenu();
        } else if (e.type == 'url' || e.type == 'web_url') {
            let link = e.fallback_url || e.url;
            if (link.indexOf('http:') < 0 && link.indexOf('https:') < 0) {
                link = `http:////${link}`;
            }
            hostInstance.openExternalLink(link);
        }
    }

    return (
        <div className="menu-wrapper-data-actions">
            <div className="actions-slider-header-menu">
                {/* <h1>Best Collections</h1> */}
                <button className="menu-close" role="contentinfo" aria-label="close" onClick={closeMenu}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M10.8838 10.0001L16.0669 4.81694C16.311 4.57286 16.311 4.17714 16.0669 3.93306C15.8229 3.68898 15.4271 3.68898 15.1831 3.93306L9.99988 9.11624L4.81694 3.93352C4.57286 3.68944 4.17713 3.68945 3.93306 3.93354C3.68899 4.17762 3.689 4.57335 3.93308 4.81742L9.116 10.0001L3.93306 15.1831C3.68898 15.4272 3.68898 15.8229 3.93306 16.067C4.17714 16.311 4.57286 16.311 4.81694 16.067L9.9999 10.884L15.1831 16.067C15.4272 16.311 15.8229 16.311 16.067 16.0669C16.311 15.8229 16.311 15.4271 16.0669 15.1831L10.8838 10.0001Z" fill="#697586"/>
                    </svg>
                </button>
            </div>
            <div className="iner-data-scroll-wraper">
                <div className="list-action-template-wrapper">
                    <div className="list-content-details">
                        {/* {msgData.message[0].component.payload.elements.map((ele: any, ind: any) => (
                            <div className="list-data-temp">
                                <div className="img-with-content-block">
                                    <div className="img-block">
                                        <figure>
                                            <img src={ele.image_url} />
                                        </figure>
                                    </div>
                                    <div className="content-details">
                                        <h1>{ele.title}</h1>
                                        <p>{ele.subtitle}</p>
                                    </div>
                                </div>
                                {ele.buttons && ele.buttons[0] && <button className="kr-button-blue-light" onClick={() => handleClick(ele.buttons[0])}>{ele.buttons[0].title}</button>}
                                {!ele.buttons && <a className="link-exteranl-list" href="#" target="_blank" onClick={() => handleClick(ele?.default_action)}>{ele?.default_action?.url}</a>}
                            </div>))} */}

{msgData.message[0].component.payload.elements.map((ele: any, ind: any) => {
    console.log("Element data:", ele); 
    return (
        <div className="list-data-temp" key={ind}>
            <div className="img-with-content-block">
                <div className="img-block">
                    <figure>
                        <img src={ele.image_url} alt={`Image for ${ele.title}`} />
                    </figure>
                </div>
                <div className="content-details">
                    <h1>{ele.title}</h1>
                    <p>{ele.subtitle}</p>
                    <p>{ele.description}</p>
                </div>
            </div>
            {ele.buttons && ele.buttons[0] && (
                <button
                    className="kr-button-blue-light"
                    onClick={() => handleClick(ele.buttons[0])}
                >
                    {ele.buttons[0].title}
                </button>
            )}
            {!ele.buttons && ele?.default_action?.url && (
                <a
                    className="link-exteranl-list"
                    href="#"
                    target="_blank"
                    onClick={() => handleClick(ele?.default_action)}
                >
                    {ele?.default_action?.url}
                </a>
            )}
        </div>
    );
})}

                    </div>
                </div> 
            </div>
        </div>
    )
}

export function List(props: any) {
    const hostInstance = props.hostInstance;
    const msgData = props.msgData;
    const messageObj = {
        msgData: msgData,
        hostInstance: hostInstance
    }
    const helpers = KoreHelpers.helpers;

    const handleClick = (e: any) => {
        console.log("Payload clicked:", e);
        if (e?.type?.toLowerCase() == 'postback' || e?.type?.toLowerCase() == 'text') {
            hostInstance.sendMessage(e.payload || e.title || e.value, { renderMsg: e.payload || e.title });
        } else if (e.type == 'url' || e.type == 'web_url') {
            let link = e.url || e.fallback_url;
            if (link.indexOf('http:') < 0 && link.indexOf('https:') < 0) {
                link = `http:////${link}`;
            }
            hostInstance.openExternalLink(link);
        }
    }

    const openSeeMoreTab = (actionObj: any) => {
        if (actionObj.type == 'postback') {
            hostInstance.sendMessage(actionObj.payload || actionObj.title, { renderMsg: actionObj.title });
        } else {
            hostInstance.bottomSliderAction('', getHTML(ListMore, messageObj, hostInstance));
        }
    }
    if (msgData?.message?.[0]?.component?.payload?.template_type == 'list') {
        return (
            <div className={`list-action-template-wrapper i${msgData.messageId}`}>
                {/* <h1>Best Collections</h1> */}
                <div className="list-content-details">
                    {msgData.message[0].component.payload.elements.map((ele: any, ind: any) => (
                        ( ind < 3 &&
                        <div className="list-data-temp">
                            <div className="img-with-content-block">
                                <div className="img-block">
                                    <figure>
                                        <img src={ele.image_url} />
                                    </figure>
                                </div>
                                <div className="content-details">
                                    <div dangerouslySetInnerHTML={{ __html: helpers.convertMDtoHTML(ele?.Brand, "bot") }}></div>
                                    <h1 dangerouslySetInnerHTML={{ __html: helpers.convertMDtoHTML(ele.title, "bot") }}></h1>
                                    <div className="price" dangerouslySetInnerHTML={{ __html: helpers.convertMDtoHTML(ele?.Price, "bot") }}></div>
                                    <p dangerouslySetInnerHTML={{ __html: helpers.convertMDtoHTML(ele?.Description, "bot") }}></p>
                                </div>
                            </div>
                            {ele.buttons && ele.buttons[0] && <button className="kr-button-blue-light" onClick={() => handleClick(ele.buttons[0])}>{ele.buttons[0].title}</button>}
                            {/* {!ele.buttons && <a className="link-exteranl-list" href="#" target="_blank" onClick={() => handleClick(ele?.default_action)}>{ele?.default_action?.url}</a>} */}
                            {ele.buttons && ele.buttons[1] && <button className="kr-button-view-details" target="_blank" rel="noopener noreferrer" onClick={() => handleClick(ele?.buttons[1])}>{ele?.buttons[1]?.title}</button>}

                        </div>)))}

                        {/* {msgData.message[0].component.payload.elements.map((ele: any, ind: any) => {
    console.log("Element data:", ele); 

    return (
        ind < 3 && (
            <div className="list-data-temp" key={ind}>
                <div className="img-with-content-block">
                    <div className="img-block">
                        <figure>
                            <img src={ele.image_url} />
                        </figure>
                    </div>
                    <div className="content-details">
                        <h1 dangerouslySetInnerHTML={{ __html: helpers.convertMDtoHTML(ele.title, "bot") }}></h1>
                        <p dangerouslySetInnerHTML={{ __html: helpers.convertMDtoHTML(ele.subtitle, "bot") }}></p>
                        <p dangerouslySetInnerHTML={{ __html: helpers.convertMDtoHTML(ele.description, "bot") }}></p>
                    </div>
                </div>

                {ele.buttons && ele.buttons[0] && (
                    <button className="kr-button-blue-light" onClick={() => handleClick(ele.buttons[0])}>
                        {ele.buttons[0].title}
                    </button>
                )}

                {ele.buttons && (
                    <button
                        className="kr-button-view-details"
                        onClick={() => handleClick(ele?.default_action?.url)}
                    >
                        View details
                    </button>
                )}
            </div>
        )
    );
})} */}

                </div>
                { msgData.message[0].component.payload.elements.length > 3 && <button className="show-more-btn" onClick={() =>openSeeMoreTab(msgData.message[0].component.payload.buttons[0])}>{msgData.message[0].component.payload.buttons[0].title}</button>}
            </div>
        );
    }
}

class TemplateList extends BaseChatTemplate {
    hostInstance: any = this;

    renderMessage(msgData: any) {
        return this.getHTMLFromPreact(List, msgData, this.hostInstance);
    }
}

export default TemplateList;

