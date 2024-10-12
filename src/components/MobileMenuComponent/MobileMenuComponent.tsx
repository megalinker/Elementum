import React, { useEffect, useRef } from 'react';
import './MobileMenuComponent.css';

interface MobileMenuComponentProps {
    scrollToSection: (section: 'home' | 'games' | 'about' | 'services' | 'contact' | 'socials') => void;
    closeMenu: () => void;
}

const MobileMenuComponent: React.FC<MobileMenuComponentProps> = ({ scrollToSection, closeMenu }) => {

    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuItemClick = (section: 'home' | 'games' | 'about' | 'services' | 'contact' | 'socials') => {
        scrollToSection(section);
        closeMenu();
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [closeMenu]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeMenu]);

    return (
        <div className="menu-overlay">
            <div className="menu-container" ref={menuRef} role="menu">
                <button
                    onClick={() => handleMenuItemClick('home')}
                    className="menu-item"
                    role="menuitem"
                >
                    Home
                </button>
                <button
                    onClick={() => handleMenuItemClick('games')}
                    className="menu-item"
                    role="menuitem"
                >
                    Games
                </button>
                <button
                    onClick={() => handleMenuItemClick('about')}
                    className="menu-item"
                    role="menuitem"
                >
                    About
                </button>
                <button
                    onClick={() => handleMenuItemClick('services')}
                    className="menu-item"
                    role="menuitem"
                >
                    Services
                </button>
                <button
                    onClick={() => handleMenuItemClick('contact')}
                    className="menu-item"
                    role="menuitem"
                >
                    Contact
                </button>
                <button
                    onClick={() => handleMenuItemClick('socials')}
                    className="menu-item"
                    role="menuitem"
                >
                    Socials
                </button>
            </div>
        </div>
    );
};

export default MobileMenuComponent;
