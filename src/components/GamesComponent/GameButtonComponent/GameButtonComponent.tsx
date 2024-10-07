import React from 'react';
import './GameButtonComponent.css';

interface GameButtonProps {
    gameId: string;
    onClick?: (gameId: string) => void;
    label: string;
    buttonImage?: string;
    comingSoon?: boolean;
    title: string;
    description: string;
}

const GameButtonComponent: React.FC<GameButtonProps> = ({
    gameId,
    onClick,
    label,
    buttonImage,
    comingSoon,
    title,
    description,
}) => {
    return (
        <div className="game-button-container">
            {comingSoon ? (
                <button className="game-button coming-soon">
                    Coming Soon
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
            <div className="game-button-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GameButtonComponent;
