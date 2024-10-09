import React, { useState } from 'react';
import './Navbar.css';
import ElementumLogo from '../Texts/ElementumLogo/ElementumLogo';
import { useMediaQuery } from 'react-responsive';

interface NavbarProps {
    scrollToSection: (section: 'home' | 'games' | 'about' | 'services' | 'contact' | 'socials') => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [isHovered, setIsHovered] = useState(false);

    const path1Default = "M500,5 L1000,5 L1050,49 L1272,49";
    const path1Hover = "M0,5 L500,5 L550,49 L1272,49";

    const path2Default = "M2044,5 L1544,5 L1493,49 L1273,49";
    const path2Hover = "M2544,5 L2044,5 L1943,49 L1273,49";

    const gradient1 = isHovered ? "hoverStrokeGradient" : "strokeGradient";
    const gradient2 = isHovered ? "hoverStrokeGradient2" : "strokeGradient2";

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHovered(false);
        }
    };

    return (
        <nav
            className="navbar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="smallerSpace" />
            <div className="navbar-container">

                {/* Left Buttons */}
                
                {!isMobile && (
                    <div className="navbar-buttons left-buttons">
                        <button onClick={() => scrollToSection('home')} className="navbar-button">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('games')} className="navbar-button">
                            Games
                        </button>
                        <button onClick={() => scrollToSection('about')} className="navbar-button">
                            About
                        </button>
                    </div>
                )}

                {/* Logo and SVG */}

                <div className="navbar-logo">
                    <ElementumLogo />
                    <svg className="navbar-svg" width="100%" height="50" viewBox="0 0 2544 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">

                        <defs>
                            <linearGradient id="strokeGradient" gradientUnits="userSpaceOnUse" x1="1272" y1="0" x2="500" y2="0">
                                <stop offset="0%" stopColor="yellow" stopOpacity="1" />
                                <stop offset="100%" stopColor="yellow" stopOpacity="0" />
                            </linearGradient>

                            <linearGradient id="hoverStrokeGradient" gradientUnits="userSpaceOnUse" x1="1272" y1="0" x2="0" y2="0">
                                <stop offset="0%" stopColor="yellow" stopOpacity="1" />
                                <stop offset="100%" stopColor="yellow" stopOpacity="0" />
                            </linearGradient>

                            <linearGradient id="strokeGradient2" gradientUnits="userSpaceOnUse" x1="1272" y1="0" x2="2044" y2="0">
                                <stop offset="0%" stopColor="yellow" stopOpacity="1" />
                                <stop offset="100%" stopColor="yellow" stopOpacity="0" />
                            </linearGradient>


                            <linearGradient id="hoverStrokeGradient2" gradientUnits="userSpaceOnUse" x1="1272" y1="0" x2="2544" y2="0">
                                <stop offset="0%" stopColor="yellow" stopOpacity="1" />
                                <stop offset="100%" stopColor="yellow" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        <path
                            className="shape"
                            d={isHovered ? path1Hover : path1Default}
                            stroke={`url(#${gradient1})`}
                            strokeWidth="1"
                            fill="none"
                        />

                        <path
                            className="shape"
                            d={isHovered ? path2Hover : path2Default}
                            stroke={`url(#${gradient2})`}
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Right Buttons */}

                {!isMobile && (
                    <div className="navbar-buttons right-buttons">
                        <button onClick={() => scrollToSection('services')} className="navbar-button">
                            Services
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="navbar-button">
                            Contact
                        </button>
                        <button onClick={() => scrollToSection('socials')} className="navbar-button">
                            Socials
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
