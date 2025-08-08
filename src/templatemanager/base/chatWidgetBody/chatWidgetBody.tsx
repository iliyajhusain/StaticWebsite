

import './chatWidgetBody.scss';
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export function ChatWidgetBody() {
// const allQuestions = [
//     "What type of boats are best for fish and play?",
//     "What type of boat is best for lakes & rivers?",
//     "How does buying a boat work?",
//     "Which boat brand is most reliable?",
//     "Are pontoon boats good for families?",
//     "How much maintenance does a boat need?",
//     "What's the difference between inboard and outboard motors?",
//     "Can I finance a boat?",
//     "What safety gear is required on boats?",
//     "How do I register a boat?"
// ];

// function shuffleArray(array: string[]) {
//     return array
//         .map(value => ({ value, sort: Math.random() }))
//         .sort((a, b) => a.sort - b.sort)
//         .map(({ value }) => value);
// }
// const [shuffledQuestions, setShuffledQuestions] = useState<string[]>([]);

//     useEffect(() => {
//         const shuffled = shuffleArray(allQuestions).slice(0, 3); // show 3 questions randomly
//         setShuffledQuestions(shuffled);
//     }, []);
    return (
        <div className="chat-widget-body-wrapper" aria-label="chat widget body">
            <div className="kore-sdk-error-section hide"></div>
            <div className="prev-message-list"></div>

 {/* <div className="suggested-questions-container">
                {shuffledQuestions.map((question, index) => (
                    <button key={index} className="question-button">
                        <span className="chat-icon">💬</span> {question}
                    </button>
                ))}
            </div> */}


            {/* <div className="agent-bubble-comp">
                <div className="agent-bubble-content">
                    <div className="top-info">
                        <div className="time-tamp"><time>2:32pm, Today</time></div>
                        <div className="you-text">You</div>
                    </div>
                    <div className="bubble-msg-with-img">
                        <div className="bubble-msg">Hello there! Thanks for reaching Kore.ai how may I assist you?</div>
                        <div className="agent-img">
                            <figure>
                                <img src="/images/avatar-bot.svg" alt='avatr img' />
                            </figure>
                        </div>
                        <div className="copy-bubble">
                            <img src="/images/arrow-back.svg" alt="back button" />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <div className="time-tamp"><time>2:32pm, Today</time></div>
                        <div className="read-text">Read <i className="sdkv3-read-status"></i></div>
                    </div>
                </div>
            </div>
            <div className="bot-bubble-comp">
                <div className="bot-bubble-content">
                    <div className="top-info">
                        <div className="you-text">You</div>
                        <div className="time-tamp"><time>2:32pm, Today</time></div>
                    </div>
                    <div className="bubble-msg-with-img">
                        <div className="bubble-msg">Hello there! Thanks for reaching Kore.ai how may I assist you?</div>
                        <div className="bot-img">
                            <figure>
                                <img src="/images/avatar-bot.svg" alt='avatr img' />
                            </figure>
                        </div>
                        <div className="copy-bubble">
                            <img src="/images/arrow-back.svg" alt="back button" />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <div className="time-tamp"><time>2:32pm, Today</time></div>
                    </div>
                </div>
            </div>
            <div className="date-saperator">
                <div className="line-border"></div>
                <div className="date-text">Today</div>
                <div className="line-border"></div>
            </div>
            <div className="agent-joined-banner">
                <div className="agent-joined-wrapper">
                    <div className="img-block">
                        <figure>
                            <img src="/images/dummy-img.svg" alt="agent image" />
                        </figure>
                    </div>
                    <div className="agent-name">Agent Martin joined</div>
                    <div className="time-stamp">
                        <time>2:32pm</time>
                    </div>
                </div>
            </div>
            <div className="button-template-container">
                <div className="button-temp">
                    <button className="kr-btn">Know about Kore.ai</button>
                    <button className="kr-btn">Just browsing!</button>
                    <button className="kr-btn">I’m a Kore.ai customer with a question</button>
                </div>
            </div>
            <div className="thumbnails-wrapper forms-thumbnails">
                <div className="thumbnail-data-content">
                    <div className="icon-block">
                        <i className="sdkv3-file"></i>
                    </div>
                    <h1>Form name</h1>
                    <p>Hello, its really great to see you here. Tell us just a few details about you and we are just ready to start</p>
                    <button className="link-btn">Fill the form</button>
                </div>
            </div> */}            
        </div>
    );
}