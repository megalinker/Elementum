import React, { useState } from 'react';
import './HeroComponent.css';
import Ramses from '/assets/HeroAssets/Ramses.webp';
import Aliadrone from '/assets/HeroAssets/Aliadrone.webp';
import Card1 from '/assets/HeroAssets/ElementumCards/ElementumCard1.webp';
import Card2 from '/assets/HeroAssets/ElementumCards/ElementumCard2.webp';
import Card3 from '/assets/HeroAssets/ElementumCards/ElementumCard3.webp';
import RedRocket_AV1 from '/assets/HeroAssets/RedRocket/RedRocket_AV1.webm';
import RedRocket_VP9 from '/assets/HeroAssets/RedRocket/RedRocket_VP9.webm';
import RedRocket_Webp from '/assets/HeroAssets/RedRocket/RedRocket.webp';
import GrayRocket_AV1 from '/assets/HeroAssets/GrayRocket/GrayRocket_AV1.webm';
import GrayRocket_VP9 from '/assets/HeroAssets/GrayRocket/GrayRocket_VP9.webm';
import GrayRocket_Webp from '/assets/HeroAssets/GrayRocket/GrayRocket.webp';
import P_KAI from '/assets/HeroAssets/P_KAI.webp';
import { useMediaQuery } from 'react-responsive';

const HeroComponent: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 950px)' });

    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    return (
        <div className="hero-wrapper">
            <div className="hero-scale-wrapper">


                <div className="hero-container">
                    {/* Left Section */}
                    <div className="hero-section left-section" onMouseEnter={() => setIsLeftHovered(true)}
                        onMouseLeave={() => setIsLeftHovered(false)}>
                        {/* Clipped Image */}
                        <img src={P_KAI} alt="Left Hero" className="hero-image left-image" />

                        {isLeftHovered && (

                            <>
                                <div className="card1-wrapper">
                                    <div className="card1-float">
                                        <img src={Card1} alt="Card1" className="card1-image" />
                                    </div>
                                </div>

                                <div className="card2-wrapper">
                                    <div className="card2-float">
                                        <img src={Card2} alt="Card2" className="card2-image" />
                                    </div>
                                </div>

                                <div className="card3-wrapper">
                                    <div className="card3-float">
                                        <img src={Card3} alt="Card3" className="card3-image" />
                                    </div>
                                </div>
                            </>

                        )}

                        <svg
                            className="hero-svg left-svg"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            preserveAspectRatio="none"
                        >
                            <polygon
                                points="50,0 100,0 100,100 50,100 0,50"
                                fill="none"
                                stroke="yellow"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>



                    {/* Right Section */}
                    <div className="hero-section right-section" onMouseEnter={() => setIsRightHovered(true)}
                        onMouseLeave={() => setIsRightHovered(false)}>
                        {/* Clipped Image */}
                        <img src={Ramses} alt="Right Hero" className="hero-image right-image" />

                        {isRightHovered && (

                            <>
                                <div className="aliadrone-wrapper">
                                    <div className="aliadrone-float">
                                        <img src={Aliadrone} alt="Aliadrone" className="aliadrone-image" />
                                    </div>
                                </div>

                                <div className="redrocket-wrapper">
                                    <div className="redrocket-float">
                                        <video
                                            className="redrocket-video"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src={RedRocket_AV1} type='video/webm; codecs="av01"' />
                                            <source src={RedRocket_VP9} type='video/webm; codecs="vp9"' />
                                            <img src={RedRocket_Webp} alt="Red Rocket" />
                                        </video>
                                    </div>
                                </div>

                                <div className="grayrocket-wrapper">
                                    <div className="grayrocket-float">
                                        <video
                                            className="grayrocket-video"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src={GrayRocket_AV1} type='video/webm; codecs="av01"' />
                                            <source src={GrayRocket_VP9} type='video/webm; codecs="vp9"' />
                                            <img src={GrayRocket_Webp} alt="Gray Rocket" />
                                        </video>
                                    </div>
                                </div>
                            </>

                        )}

                        {/* SVG Overlay */}
                        <svg
                            className="hero-svg right-svg"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            preserveAspectRatio="none"
                        >
                            <polygon
                                points="50,0 100,50 50,100 0,100 0,0"
                                fill="none"
                                stroke="yellow"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>
                </div>

                {isLeftHovered && (
                    <div className={`overlay-text ${isMobile ? 'left-text-mobile' : 'left-text'}`}>
                        <h2>Elementum TCG</h2>
                        <p>Elementum TCG is a Trading Card Game where the objective is to reduce the opponent's life points to zero using a combination of creature and spell cards regulated by the administration of a resource (Elementum) to limit actions during turns</p>
                    </div>
                )}
                {isRightHovered && (
                    <div className={`overlay-text ${isMobile ? 'right-text-mobile' : 'right-text'}`}>
                        <h2>Services</h2>
                        <ul>
                            <li>Web3 & Blockchain Integration</li>
                            <li>Unity Game Development</li>
                            <li>3D Modeling & Animation</li>
                            <li>Game Design & UX/UI</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroComponent;
