import React, { useEffect, useRef, useState } from 'react';
import './GameButtonComponent.css';
import placeholderImage from '/assets/GameImages/Placeholder.webp';

interface GameButtonProps {
    gameId: string;
    onClick?: (gameId: string) => void;
    label: string;
    buttonImage?: string;
    comingSoon?: boolean;
    title: string;
    description: string;
    selected?: boolean;
}

const GameButtonComponent: React.FC<GameButtonProps> = ({
    gameId,
    onClick,
    label,
    buttonImage,
    comingSoon,
    title,
    description,
    selected
}) => {

    return (
        <div className="game-button-container">

            {/* Selected Border */}

            {selected && (
                <svg
                    className="hexagon-border"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                >
                    <polygon
                        points="50,1 93,25 93,75 50,99 7,75 7,25"
                        fill="none"
                        stroke="url(#borderGradient)"
                        strokeWidth="1"
                    />
                </svg>
            )}

            {/* Behind Border */}

            {!selected && !comingSoon && (
                <svg
                    className="cyan-hexagon-border"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                >
                    <polygon
                        points="50,5 89,27 89,73 50,94 11,73 11,27"
                        fill="none"
                        stroke="#00FFFF"
                        strokeWidth="1"
                    />
                </svg>
            )}

            <div className="svg-border">
                {comingSoon ? (
                    <button className="game-button coming-soon" onClick={() => { }}>
                        <div className="coming-soon-content">
                            <img
                                src={placeholderImage}
                                alt="Coming Soon"
                                className="placeholder-image"
                            />
                            <div className="overlay" />
                            <span className="coming-soon-text">Coming Soon</span>
                        </div>
                    </button>
                ) : (
                    <button className="game-button" onClick={() => onClick && onClick(gameId)}>
                        {buttonImage ? (
                            <img src={buttonImage} alt={label} className="button-image" />
                        ) : (
                            label
                        )}
                    </button>
                )}

                {/* Yellow Border */}

                <svg
                    className="border-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 230"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D4D900" stopOpacity="0.4" />
                            <stop offset="25%" stopColor="#F9FF00" />
                            <stop offset="50%" stopColor="#D4D900" stopOpacity="0.4" />
                            <stop offset="75%" stopColor="#F9FF00" />
                            <stop offset="100%" stopColor="#D4D900" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="100,3 197,57.5 197,172.5 100,225 3,172.5 3,57.5"
                        fill="none"
                        stroke="url(#borderGradient)"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <div className="game-button-text">
                <h2>{title}</h2>
                <div className="smallerSpace" />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GameButtonComponent;