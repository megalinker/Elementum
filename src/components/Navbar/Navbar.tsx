import React, { useState } from 'react';
import './Navbar.css';
import ElementumLogo from '../Texts/ElementumLogo/ElementumLogo';
import { useMediaQuery } from 'react-responsive';

interface NavbarProps {
    scrollToSection: (section: 'home' | 'games' | 'about' | 'services' | 'contact' | 'socials') => void;
    openMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, openMenu }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 950px)' });
    const isUltraSmall = useMediaQuery({ query: '(max-width: 450px)' });

    const [isHovered, setIsHovered] = useState(false);

    const desktopPath1Default = "M500,5 L1000,5 L1050,49 L1273,49";
    const desktopPath2Default = "M2044,5 L1544,5 L1493,49 L1273,49";

    const mobilePath1Default = "M500,5 L1000,5 L1050,29 L1273,29";
    const mobilePath2Default = "M2044,5 L1544,5 L1493,29 L1273,29";

    const ultraSmallPath1Default = "M500,5 L1273,5";
    const ultraSmallPath2Default = "M2044,5 L1273,5";

    const path1Default = isUltraSmall
        ? ultraSmallPath1Default
        : isMobile
            ? mobilePath1Default
            : desktopPath1Default;
    const path1Hover = "M0,5 L500,5 L550,49 L1273,49";

    const path2Default = isUltraSmall
        ? ultraSmallPath2Default
        : isMobile
            ? mobilePath2Default
            : desktopPath2Default;

    const path2Hover = "M2544,5 L2044,5 L1993,49 L1273,49";

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
            className={`navbar ${isUltraSmall
                    ? 'default-clip-ultrasmall'
                    : (isMobile
                        ? 'default-clip-mobile'
                        : (isHovered
                            ? 'hovered-clip'
                            : 'default-clip')
                    )
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="smallerSpace" />
            <div className="navbar-container">

                {/* Left Buttons */}

                {/* Left Buttons or Hamburger Menu */}
                {!isMobile ? (
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
                ) : (
                    <button
                        className="navbar-menu-button"
                        onClick={openMenu}
                        aria-label="Open Menu"
                    >
                        {/* Hamburger SVG */}
                        <svg width="30" height="30" viewBox="0 0 100 80" fill="white">
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>
                    </button>
                )}

                {/* Logo and SVG */}

                <div className="navbar-logo">
                    <div className={isUltraSmall ? "navbar-logo-ultrasmall" : ""}>
                        <ElementumLogo />
                    </div>
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
