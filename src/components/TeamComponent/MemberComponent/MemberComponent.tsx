import React from 'react';
import './MemberComponent.css';
import XIcon from '../../SocialMediaIcons/XIcon';
import LinkedInIcon from '../../SocialMediaIcons/LinkedInIcon';
import GithubIcon from '../../SocialMediaIcons/GithubIcon';
import DiscordIcon from '../../SocialMediaIcons/DiscordIcon';
import InstagramIcon from '../../SocialMediaIcons/InstagramIcon';

interface MemberComponentProps {
    name: string;
    description: string;
    imageSrc: string;
    xAccount?: string;
    linkedIn?: string;
    github?: string;
    discord?: string;
    instagram?: string;
}

const MemberComponent: React.FC<MemberComponentProps> = ({
    name,
    description,
    imageSrc,
    xAccount,
    linkedIn,
    github,
    discord,
    instagram,
}) => {
    return (
        <div className="member-container">
            <svg className="hexagon-svg" width="210" height="200" viewBox="0 0 200 200">
                <defs>
                    <clipPath id="hexClip">
                        <polygon points="133,5 195,45 195,120 67,195 5,155 5,80" />
                    </clipPath>
                    <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00ffff" />
                        <stop offset="100%" stopColor="#00c3ff" />
                    </linearGradient>
                </defs>

                {/* Cyan overlay polygon */}
                <polygon
                    className="hover-orange-polygon"
                    points="133,5 195,45 195,120 67,195 5,155 5,80"
                    fill="#FF7E00"
                    opacity="0"
                />

                <image
                    x="0"
                    y="0"
                    width="200"
                    height="200"
                    href={imageSrc}
                    clipPath="url(#hexClip)"
                    onError={(e) => {
                        (e.target as SVGImageElement).setAttributeNS(
                            'http://www.w3.org/1999/xlink',
                            'href',
                            'https://via.placeholder.com/150'
                        );
                    }}
                />
                <polygon
                    points="133,5 195,45 195,120 67,195 5,155 5,80"
                    fill="none"
                    stroke="url(#cyanGradient)"
                    strokeWidth="2"
                />
            </svg>
            <h2 className="member-name">{name}</h2>
            <p className="member-description" style={{ maxWidth: '200px' }}>{description}</p>
            <div className="social-icons">
                {xAccount && (
                    <a
                        href={`https://x.com/${xAccount}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="X"
                    >
                        <XIcon className="social-icon" />
                    </a>
                )}
                {linkedIn && (
                    <a
                        href={linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <LinkedInIcon className="social-icon" />
                    </a>
                )}
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <GithubIcon className="social-icon" />
                    </a>
                )}
                {discord && (
                    <a
                        href={discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Discord"
                    >
                        <DiscordIcon className="social-icon" />
                    </a>
                )}
                {instagram && (
                    <a
                        href={`https://instagram.com/${instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                    >
                        <InstagramIcon className="social-icon" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default MemberComponent;
