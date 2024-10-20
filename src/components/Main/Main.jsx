import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [contextInfo, setContextInfo] = useState('');

    const handleCardClick = (prompt, context) => {
        setInput(prompt);
        setContextInfo(context); // Set context info based on clicked card
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSent();
            setContextInfo(''); // Clear context info when Enter is pressed
        }
    };

    const handleSendClick = () => {
        onSent();
        setContextInfo(''); // Clear context info when the send button is clicked
    };

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Aniket.</span></p>
                            <p>How may I assist you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick(
                                'Suggest beautiful places to see on an upcoming trip',
                                'You can visit places like Bali, Paris, and Tokyo for amazing experiences!'
                            )}>
                                <p>Suggest beautiful places to see on an upcoming trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick(
                                'Briefly summarize this concept: urban planning',
                                'Urban planning involves the design and regulation of land use in urban areas.'
                            )}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick(
                                'Brainstorm team bonding activities for our work retreat',
                                'Consider activities like escape rooms, team sports, or cooking classes.'
                            )}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card" onClick={() => handleCardClick(
                                'Tell me about React js and React native',
                                'React is a JavaScript library for building user interfaces; React Native is used for mobile apps.'
                            )}>
                                <p>Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                {/* Only display context info if not showing result */}
                {!showResult && contextInfo && (
                    <div className="context-info">
                        <h4>Context Information:</h4>
                        <p>{contextInfo}</p>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder='Enter a prompt here'
                            onKeyDown={handleKeyDown}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={handleSendClick} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
