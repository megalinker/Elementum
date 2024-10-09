import React, { forwardRef } from 'react';
import './Footer.css';
import TCG_AV1 from '/assets/ElementumVideo/TCG_AV1.webm';
import TCG_VP9 from '/assets/ElementumVideo/TCG_VP9.webm';
import TCG_MP4 from '/assets/ElementumVideo/TCG_MP4.mp4';
import XIcon from '../SocialMediaIcons/XIcon';
import EmailIcon from '../SocialMediaIcons/EmailIcon';
import DSCVRIcon from '../SocialMediaIcons/DSCVRIcon';
import OpenChatIcon from '../SocialMediaIcons/OpenChatIcon';

interface FooterLinkProps {
    name: string;
    IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    link: string;
}
const FooterLink: React.FC<FooterLinkProps> = ({ name, IconComponent, link }) => {
    return (
        <div className="footer-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
            <div className="icon-popup">
                <IconComponent />
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
                    <FooterLink name="X" IconComponent={XIcon} link="https://x.com/elementumone" />
                    <FooterLink name="E-mail" IconComponent={EmailIcon} link="mailto:mrworldwide@elementum.one" />
                    <FooterLink name="DSCVR" IconComponent={DSCVRIcon} link="https://dscvr.one/p/elementum" />
                    <FooterLink name="OpenChat" IconComponent={OpenChatIcon} link="https://oc.app/community/oyxo7-ayaaa-aaaar-bgebq-cai" />
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