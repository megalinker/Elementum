import React, { forwardRef, useState } from 'react';
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

interface SectionRefs {
    [key: string]: React.RefObject<HTMLDivElement>;
}

interface GamesComponentProps {
    scrollToSection: (section: keyof SectionRefs) => void;
}

const gamesList: GameData[] = [
    {
        id: 'elementum',
        title: 'Elementum TCG',
        description: 'Build Your Deck and Dominate',
        videoSources: [
            { src: 'assets/ElementumVideo/TCG_AV1.webm', type: 'video/webm; codecs="av01"' },
            { src: 'assets/ElementumVideo/TCG_VP9.webm', type: 'video/webm; codecs="vp9"' },
            { src: 'assets/ElementumVideo/TCG_MP4.mp4', type: 'video/mp4' },
        ],
        link: 'https://2jt6v-4aaaa-aaaal-ai4hq-cai.raw.icp0.io/',
        buttonImage: 'assets/GameImages/Elementum.webp',
        backgroundImage: 'assets/GameImages/ElementumBackground.webp',
    },
    {
        id: 'popoffgallery',
        title: 'Pop Off Gallery',
        description: 'Aim. Shoot. Fire.',
        videoSources: [
            { src: 'assets/PopOffVideo/PopOff_AV1.webm', type: 'video/webm; codecs="av01"' },
            { src: 'assets/PopOffVideo/PopOff_VP9.webm', type: 'video/webm; codecs="vp9"' },
            { src: 'assets/PopOffVideo/PopOff_MP4.mp4', type: 'video/mp4' },
        ],
        link: 'https://rndm3-nyaaa-aaaal-ajmla-cai.raw.icp0.io/',
        buttonImage: 'assets/GameImages/PopOffGallery.webp',
        backgroundImage: 'assets/GameImages/PopOffBackground.webp',
    },
    {
        id: 'dantondefender',
        title: 'Danton Defender',
        description: 'Dont let the rockets hit the city!',
        videoSources: [
            { src: 'assets/DantonVideo/Danton_AV1.webm', type: 'video/webm; codecs="av01"' },
            { src: 'assets/DantonVideo/Danton_VP9.webm', type: 'video/webm; codecs="vp9"' },
            { src: 'assets/DantonVideo/Danton_MP4.mp4', type: 'video/mp4' },
        ],
        link: 'https://rndm3-nyaaa-aaaal-ajmla-cai.raw.icp0.io/',
        buttonImage: 'assets/GameImages/DantonDefender.webp',
        backgroundImage: 'assets/GameImages/DantonBackground.webp',
    },
    {
        id: 'thetumble',
        title: 'The Tumble',
        description: 'Careful or you will fall',
        comingSoon: true,
    },
];

const GamesComponent = forwardRef<HTMLDivElement, GamesComponentProps>(
    ({ scrollToSection }, ref) => {

        const [currentGame, setCurrentGame] = useState<GameData>(
            gamesList.find((game) => !game.comingSoon) || gamesList[0]
        );

        const handleGameButtonClick = (gameId: string) => {
            scrollToSection('highlightedgame');
            const selectedGame = gamesList.find((game) => game.id === gameId);
            if (selectedGame && !selectedGame.comingSoon) {
                setCurrentGame(selectedGame);
            }
        };

        return (
            <div className="games-component">

                <h1 className="center-text" ref={ref}>{currentGame.title}</h1>
                <p className="center-text" style={{ maxWidth: '100vw' }}>{currentGame.description}</p>

                <div className="space" />

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
                        <video key={currentGame.id} className="video-element" loop autoPlay muted>
                            {currentGame.videoSources.map((source, index) => (
                                <source key={index} src={source.src} type={source.type} />
                            ))}
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>

                <div className="space" />

                {currentGame.link && (
                    <div className="try-button-container">
                        <a href={currentGame.link} className="purple-button-link">
                            <PurpleButtonComponent>
                                Try {currentGame.title} Here
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
                            selected={currentGame.id === game.id}
                        />
                    ))}
                </div>
            </div>
        );
    });


export default GamesComponent;