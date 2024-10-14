import React, { forwardRef } from 'react';
import './Footer.css';
import TCG_AV1 from '/assets/ElementumVideo/TCG_AV1.webm';
import TCG_VP9 from '/assets/ElementumVideo/TCG_VP9.webm';
import TCG_MP4 from '/assets/ElementumVideo/TCG_MP4.mp4';
import xIcon from '/assets/SocialMediaIcons/x_icon.svg';
import EmailIcon from '/assets/SocialMediaIcons/email_icon.svg';
import DSCVRIcon from '/assets/SocialMediaIcons/dscvr_logo.svg';
import OpenChatIcon from '/assets/SocialMediaIcons/openchat_logo.svg';

interface FooterLinkProps {
    name: string;
    iconSrc: string;
    link: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ name, iconSrc, link }) => {
    return (
        <div className="footer-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
            <div className="icon-popup">
                <svg
                    className="border-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="borderGradientF" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F9FF00" stopOpacity="0" />
                            <stop offset="25%" stopColor="#E0E500" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#C6CB00" />
                            <stop offset="75%" stopColor="#D3D800" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#959900" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="49,1 99,49 49,99 1,49"
                        fill="none"
                        stroke="url(#borderGradientF)"
                        strokeWidth="3"
                    />
                </svg>
                <img src={iconSrc} alt={`${name} icon`} className="footer-icon" />
            </div>
        </div>
    );
};


const Footer = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <>
            {/* Content */}
            <div className="footer-content">
                <div className="links-row">
                    <FooterLink name="X" iconSrc={xIcon} link="https://x.com/elementumone" />
                    <FooterLink name="E-mail" iconSrc={EmailIcon} link="mailto:mrworldwide@elementum.one" />
                    <FooterLink name="DSCVR" iconSrc={DSCVRIcon} link="https://dscvr.one/p/elementum" />
                    <FooterLink name="OpenChat" iconSrc={OpenChatIcon} link="https://oc.app/community/oyxo7-ayaaa-aaaar-bgebq-cai" />
                </div>
                <div className="smallerSpace" />
                <p>© 2024 Elementum. All rights reserved.</p>
            </div>
            <div className="footer-gradient-overlay footer-gradient-top-left"></div>
            <div className="footer-gradient-overlay footer-gradient-top-right"></div>
            <footer className="footer" ref={ref}>
                {/* Background Video */}
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src={TCG_AV1} type='video/webm; codecs="av01"' />
                        <source src={TCG_VP9} type='video/webm; codecs="vp9"' />
                        <source src={TCG_MP4} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="footer-overlay"></div>
                </div>
            </footer>
        </>
    );
});

export default Footer;