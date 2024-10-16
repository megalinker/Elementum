import React, { forwardRef, useEffect, useState } from 'react';
import GameButtonComponent from './GameButtonComponent/GameButtonComponent';
import PurpleButtonComponent from '../PurpleButtonComponent/PurpleButtonComponent';
import './GamesComponent.css';
import { useMediaQuery } from 'react-responsive';

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
    onLoaded: () => void;
}

const gamesList: GameData[] = [
    {
        id: 'elementum',
        title: 'Elementum TCG',
        description: 'Build Your Deck and Dominate',
        videoSources: [
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

const GamesComponent = forwardRef<HTMLDivElement, GamesComponentProps>(({ scrollToSection, onLoaded }, ref) => {

    const isMobile = useMediaQuery({ query: '(max-width: 950px)' });

    const [currentGame, setCurrentGame] = useState<GameData>(
        gamesList.find((game) => !game.comingSoon) || gamesList[0]
    );

    const [loadedResources, setLoadedResources] = useState(0);
    const [totalResources, setTotalResources] = useState(0);

    // Keep track of loaded games to prevent reloading
    const loadedGames = React.useRef<Set<string>>(new Set());

    // Function to determine compatible video source
    const getCompatibleVideoSource = (videoSources: VideoSource[]): VideoSource | null => {
        const videoElement = document.createElement('video');
        for (const source of videoSources) {
            if (videoElement.canPlayType(source.type).replace('no', '')) {
                return source;
            }
        }
        return null;
    };

    useEffect(() => {
        let isCancelled = false;

        const preloadResources = () => {
            let resourcesToLoad = 0;

            gamesList.forEach((game) => {
                // Preload buttonImage
                if (game.buttonImage) {
                    resourcesToLoad += 1;
                    const img = new Image();
                    img.src = game.buttonImage;
                    img.onload = img.onerror = () => {
                        if (!isCancelled) setLoadedResources((prev) => prev + 1);
                    };
                }

                // Preload backgroundImage
                if (game.backgroundImage) {
                    resourcesToLoad += 1;
                    const img = new Image();
                    img.src = game.backgroundImage;
                    img.onload = img.onerror = () => {
                        if (!isCancelled) setLoadedResources((prev) => prev + 1);
                    };
                }

                // Preload compatible videoSource
                if (game.videoSources) {
                    const compatibleSource = getCompatibleVideoSource(game.videoSources);
                    if (compatibleSource) {
                        resourcesToLoad += 1;
                        const video = document.createElement('video');
                        video.src = compatibleSource.src;
                        video.oncanplaythrough = video.onerror = () => {
                            if (!isCancelled) setLoadedResources((prev) => prev + 1);
                        };
                    }
                }
            });

            setTotalResources(resourcesToLoad);
        };

        preloadResources();

        return () => {
            isCancelled = true;
        };
    }, []);

    useEffect(() => {
        if (totalResources > 0 && loadedResources === totalResources) {
            onLoaded();
        }
    }, [loadedResources, totalResources]);

    const handleGameButtonClick = (gameId: string) => {
        scrollToSection('highlightedgame');
        const selectedGame = gamesList.find((game) => game.id === gameId);
        if (selectedGame && !selectedGame.comingSoon) {
            setCurrentGame(selectedGame);
        }
    };

    const compatibleVideoSource = currentGame.videoSources
        ? getCompatibleVideoSource(currentGame.videoSources)
        : null;

    return (
        <div className="games-component">

            <h1 className="center-text" ref={ref}>{currentGame.title}</h1>
            <p className="center-text" style={{ maxWidth: '100vw' }}>{currentGame.description}</p>

            <div className="space" />

            <div
                className="video-background-container"
                style={{
                    backgroundImage: !isMobile ? `url(${currentGame.backgroundImage})` : 'none',
                }}
            >
                {/* Gradient overlays */}
                <div className="gradient-overlay gradient-top-left"></div>
                <div className="gradient-overlay gradient-top-right"></div>
                <div className="gradient-overlay gradient-bottom-left"></div>
                <div className="gradient-overlay gradient-bottom-right"></div>

                {/* Video */}
                {compatibleVideoSource && (
                    <video key={currentGame.id} className="video-element" loop autoPlay muted>
                        <source src={compatibleVideoSource.src} type={compatibleVideoSource.type} />
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