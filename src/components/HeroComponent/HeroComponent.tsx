import React, { useEffect, useState } from 'react';
import './HeroComponent.css';
import Ramses from '/assets/HeroAssets/Ramses.webp';
import Aliadrone from '/assets/HeroAssets/Aliadrone.webp';
import Card1 from '/assets/HeroAssets/ElementumCards/ElementumCard1.webp';
import Card2 from '/assets/HeroAssets/ElementumCards/ElementumCard2.webp';
import Card3 from '/assets/HeroAssets/ElementumCards/ElementumCard3.webp';
import RedRocket_VP9 from '/assets/HeroAssets/RedRocket/RedRocket_VP9.webm';
import RedRocket_Webp from '/assets/HeroAssets/RedRocket/RedRocket.webp';
import GrayRocket_VP9 from '/assets/HeroAssets/GrayRocket/GrayRocket_VP9.webm';
import GrayRocket_Webp from '/assets/HeroAssets/GrayRocket/GrayRocket.webp';
import P_KAI from '/assets/HeroAssets/P_KAI.webp';
import { useMediaQuery } from 'react-responsive';

let hasPreloadedHeroAssets = false;
let globalRedRocketSrc: string | null = null;
let globalGrayRocketSrc: string | null = null;

interface HeroComponentProps {
    onLoaded: () => void;
}

const HeroComponent: React.FC<HeroComponentProps> = ({ onLoaded }) => {

    const [redRocketSrc, setRedRocketSrc] = useState<string | null>(null);
    const [grayRocketSrc, setGrayRocketSrc] = useState<string | null>(null);

    const isMobile = useMediaQuery({ query: '(max-width: 950px)' });

    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    useEffect(() => {

        let isCancelled = false; // **Flag to Track Component Mount Status**

        // **Preload a Single Image**
        const preloadImage = (src: string): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve();
                img.onerror = () => {
                    console.error(`Image failed to load: ${src}`);
                    resolve(); // **Resolve Even on Error to Prevent Blocking**
                };
            });
        };

        // **Preload a Single Video**
        const preloadVideo = (src: string): Promise<void> => {
            return new Promise((resolve) => {
                const video = document.createElement('video');
                video.src = src;
                video.preload = 'auto';
                video.onloadeddata = () => resolve();
                video.onerror = () => {
                    console.error(`Video failed to load: ${src}`);
                    resolve(); // **Resolve Even on Error to Prevent Blocking**
                };
            });
        };

        const getSupportedVideoSrc = (): {
            redRocket: string | null;
            grayRocket: string | null;
        } => {
            const video = document.createElement('video');

            const canPlayVP9 = video.canPlayType('video/webm; codecs="vp09.00.10.08"');

            if (canPlayVP9 === 'probably' || canPlayVP9 === 'maybe') {
                return { redRocket: RedRocket_VP9, grayRocket: GrayRocket_VP9 };
            } else {
                // **Fallback to WebP Images**
                return { redRocket: RedRocket_Webp, grayRocket: GrayRocket_Webp };
            }
        };

        const preloadAssets = async () => {
            if (hasPreloadedHeroAssets) {
                // **Assets Already Preloaded, Use Cached Sources**
                if (!isCancelled) {
                    setRedRocketSrc(globalRedRocketSrc);
                    setGrayRocketSrc(globalGrayRocketSrc);
                    onLoaded();
                }
                return;
            }

            // **Determine Supported Video Formats**
            const { redRocket, grayRocket } = getSupportedVideoSrc();

            // **Set Sources Based on Support**
            if (!isCancelled) {
                setRedRocketSrc(redRocket);
                setGrayRocketSrc(grayRocket);
            }

            // **Preload Static Images**
            const imagesToPreload = [Ramses, Aliadrone, Card1, Card2, Card3, P_KAI];
            const imagePromises = imagesToPreload.map((src) => preloadImage(src));

            // **Preload Dynamic Assets (Videos or WebP Images)**
            let dynamicPreloadPromises: Promise<void>[] = [];

            if (redRocket) {
                if (redRocket.endsWith('.webm')) {
                    dynamicPreloadPromises.push(preloadVideo(redRocket));
                } else {
                    dynamicPreloadPromises.push(preloadImage(redRocket));
                }
            }

            if (grayRocket) {
                if (grayRocket.endsWith('.webm')) {
                    dynamicPreloadPromises.push(preloadVideo(grayRocket));
                } else {
                    dynamicPreloadPromises.push(preloadImage(grayRocket));
                }
            }
            try {
                // **Await All Preloading Promises**
                await Promise.all([...imagePromises, ...dynamicPreloadPromises]);

                if (!isCancelled) {
                    // **Cache the Preloaded Sources**
                    globalRedRocketSrc = redRocket;
                    globalGrayRocketSrc = grayRocket;
                    hasPreloadedHeroAssets = true;

                    onLoaded(); // **Invoke Callback After Preloading Completes**
                }
            } catch (error) {
                console.error('Error preloading assets:', error);
                if (!isCancelled) {
                    onLoaded(); // **Invoke Callback Even on Errors to Proceed**
                }
            }
        };

        preloadAssets();

        return () => {
            isCancelled = true; // **Cleanup Flag on Unmount**
        };
    }, []);


    return (
        <div className="hero-wrapper">
            <div className="hero-scale-wrapper">


                <div className="hero-container">
                    {/* Left Section */}
                    <div className="hero-section left-section" onMouseEnter={() => setIsLeftHovered(true)}
                        onTouchStart={() => {
                            setIsLeftHovered(true);
                            setIsRightHovered(false);
                        }}
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
                    <div className="hero-section right-section" onMouseEnter={() => setIsRightHovered(true)} onTouchStart={() => {
                        setIsRightHovered(true);
                        setIsLeftHovered(false);
                    }}
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
                                        {redRocketSrc && (
                                            redRocketSrc.endsWith('.webm') ? (
                                                <video
                                                    className="redrocket-video"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                >
                                                    <source src={redRocketSrc} type='video/webm' />
                                                </video>
                                            ) : (
                                                <img src={redRocketSrc} alt="Red Rocket" className="redrocket-video" />
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="grayrocket-wrapper">
                                    <div className="grayrocket-float">
                                        {grayRocketSrc && (
                                            grayRocketSrc.endsWith('.webm') ? (
                                                <video
                                                    className="grayrocket-video"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                >
                                                    <source src={grayRocketSrc} type='video/webm' />
                                                </video>
                                            ) : (
                                                <img src={grayRocketSrc} alt="Gray Rocket" className="grayrocket-video" />
                                            )
                                        )}
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
