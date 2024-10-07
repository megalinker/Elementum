import React, { useState } from 'react';
import GameButtonComponent from './GameButtonComponent/GameButtonComponent';
import PurpleButtonComponent from '../PurpleButtonComponent/PurpleButtonComponent';
import './GamesComponent.css';

interface VideoSource {
    src: string;
    type: string;
}

interface GameData {
    id: string;
    title: string;
    description: string;
    videoSources?: VideoSource[];
    link?: string;
    buttonImage?: string;
    backgroundImage?: string;
    comingSoon?: boolean;
}

const gamesList: GameData[] = [
    {
        id: 'elementum',
        title: 'Elementum TCG',
        description: 'Build Your Deck and Dominate',
        videoSources: [
            { src: 'public/assets/ElementumVideo/TCG_AV1.webm', type: 'video/webm; codecs="av01"' },
            { src: 'public/assets/ElementumVideo/TCG_VP9.webm', type: 'video/webm; codecs="vp9"' },
        ],
        link: 'https://example.com/game1',
        buttonImage: 'public/assets/Elementum.jpg',
        backgroundImage: 'path/to/game1-background.jpg',
    },
    {
        id: 'popoffgallery',
        title: 'Pop Off Gallery',
        description: 'Aim. Shoot. Fire.',
        videoSources: [
            { src: 'path/to/game2.av1.webm', type: 'video/webm; codecs="av01"' },
            { src: 'path/to/game2.vp9.webm', type: 'video/webm; codecs="vp9"' },
        ],
        link: 'https://example.com/game2',
        buttonImage: 'path/to/game2-button-image.png',
        backgroundImage: 'path/to/game2-background.jpg',
    },
    {
        id: 'thetumble',
        title: 'The Tumble',
        description: 'Careful or you will fall',
        comingSoon: true,
    },
];

const GamesComponent: React.FC = () => {
    const [currentGame, setCurrentGame] = useState<GameData>(
        gamesList.find((game) => !game.comingSoon) || gamesList[0]
    );

    const handleGameButtonClick = (gameId: string) => {
        const selectedGame = gamesList.find((game) => game.id === gameId);
        if (selectedGame && !selectedGame.comingSoon) {
            setCurrentGame(selectedGame);
        }
    };

    return (
        <div>

            <h1 className="center-text">{currentGame.title}</h1>
            <p className="center-text">{currentGame.description}</p>

            <div
                className="video-background-container"
                style={{
                    backgroundImage: `url(${currentGame.backgroundImage || 'path/to/default-background.jpg'
                        })`,
                }}
            >
                {/* Gradient overlays */}
                <div className="gradient-overlay gradient-top-left"></div>
                <div className="gradient-overlay gradient-top-right"></div>
                <div className="gradient-overlay gradient-bottom-left"></div>
                <div className="gradient-overlay gradient-bottom-right"></div>

                {/* Video */}
                {currentGame.videoSources && (
                    <video className="video-element" loop autoPlay muted>
                        {currentGame.videoSources.map((source, index) => (
                            <source key={index} src={source.src} type={source.type} />
                        ))}
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {currentGame.link && (
                <div className="try-button-container">
                    <a href={currentGame.link} className="purple-button-link">
                        <PurpleButtonComponent>
                            Try it out here
                        </PurpleButtonComponent>
                    </a>
                </div>
            )}

            <div className="space" />

            <div className="game-buttons-container">
                {gamesList.map((game) => (
                    <GameButtonComponent
                        key={game.id}
                        gameId={game.id}
                        onClick={!game.comingSoon ? handleGameButtonClick : undefined}
                        label={game.title}
                        buttonImage={game.buttonImage}
                        comingSoon={game.comingSoon}
                        title={game.title}
                        description={game.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default GamesComponent;