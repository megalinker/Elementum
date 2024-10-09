import React, { useState } from 'react';
import './HeroComponent.css';
import Ramses from '/assets/HeroAssets/Ramses.webp';
import P_KAI from '/assets/HeroAssets/P_KAI.webp';

const HeroComponent: React.FC = () => {

    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    return (
        <div className="hero-wrapper">
            {isLeftHovered && (
                <div className="overlay-text left-text">
                    <h2>Elementum TCG</h2>
                    <p>Description blablabla</p>
                </div>
            )}
            {isRightHovered && (
                <div className="overlay-text right-text">
                    <h2>Services</h2>
                    <ul>
                        <li>Web3 & Blockchain Integration</li>
                        <li>Unity Game Development</li>
                        <li>3D Modeling & Animation</li>
                        <li>Game Design & UX/UI</li>
                    </ul>
                </div>
            )}

            <div className="hero-container">
                {/* Left Section */}
                <div className="hero-section left-section" onMouseEnter={() => setIsLeftHovered(true)}
                    onMouseLeave={() => setIsLeftHovered(false)}>
                    {/* Clipped Image */}
                    <img src={P_KAI} alt="Left Hero" className="hero-image left-image" />
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
        </div>
    );
};

export default HeroComponent;
