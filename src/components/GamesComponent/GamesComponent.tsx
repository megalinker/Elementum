import React, { forwardRef, useEffect, useMemo, useState } from 'react';
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

    const [autoCycleActive, setAutoCycleActive] = useState(true);

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

    const preloadImage = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        });
    };

    const preloadVideo = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = src;
            video.preload = 'auto';
            video.oncanplaythrough = () => resolve();
            video.onerror = () => reject(new Error(`Failed to load video: ${src}`));
        });
    };

    const preloadGameResources = async (game: GameData) => {
        const promises: Promise<void>[] = [];

        if (game.buttonImage) {
            promises.push(preloadImage(game.buttonImage));
        }

        if (game.backgroundImage) {
            promises.push(preloadImage(game.backgroundImage));
        }

        if (game.videoSources) {
            const compatibleSource = getCompatibleVideoSource(game.videoSources);
            if (compatibleSource) {
                promises.push(preloadVideo(compatibleSource.src));
            }
        }

        try {
            await Promise.all(promises);
            setLoadedResources(prev => prev + promises.length);
            loadedGames.current.add(game.id);
        } catch (error) {
            console.error(`Error preloading resources for game ${game.id}:`, error);
            setLoadedResources(prev => prev + promises.length);
            loadedGames.current.add(game.id);
        }
    };

    useEffect(() => {
        let isCancelled = false;

        const preloadAllResources = async () => {
            let resourcesToLoad = 0;

            gamesList.forEach((game) => {
                if (!game.comingSoon) {
                    if (game.buttonImage) resourcesToLoad += 1;
                    if (game.backgroundImage) resourcesToLoad += 1;
                    if (game.videoSources) {
                        const compatibleSource = getCompatibleVideoSource(game.videoSources);
                        if (compatibleSource) resourcesToLoad += 1;
                    }
                }
            });

            setTotalResources(resourcesToLoad);

            for (const game of gamesList) {
                if (!game.comingSoon && !loadedGames.current.has(game.id)) {
                    await preloadGameResources(game);
                    if (isCancelled) break;
                }
            }
        };

        preloadAllResources();

        return () => {
            isCancelled = true;
        };
    }, []);

    useEffect(() => {
        if (totalResources > 0 && loadedResources >= totalResources) {
            onLoaded();
        }
    }, [loadedResources, totalResources]);

    const handleGameButtonClick = (gameId: string) => {
        scrollToSection('highlightedgame');
        const selectedGame = gamesList.find((game) => game.id === gameId);
        if (selectedGame && !selectedGame.comingSoon) {
            setCurrentGame(selectedGame);
            setAutoCycleActive(false);
        }
    };

    const compatibleVideoSource = useMemo(() => {
        return currentGame.videoSources ? getCompatibleVideoSource(currentGame.videoSources) : null;
    }, [currentGame.videoSources]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (autoCycleActive) {
            interval = setInterval(() => {
                setCurrentGame((prevGame) => {
                    const currentIndex = gamesList.findIndex((game) => game.id === prevGame.id);
                    let nextIndex = (currentIndex + 1) % gamesList.length;

                    // Find the next available game that is not "Coming Soon"
                    while (gamesList[nextIndex]?.comingSoon) {
                        nextIndex = (nextIndex + 1) % gamesList.length;
                    }

                    return gamesList[nextIndex]; // Return the next game
                });
            }, 8000); // Change game every 8 seconds
        }

        return () => {
            clearInterval(interval);
        };
    }, [autoCycleActive]);

    return (
        <div className="games-component">

            <h1 className="center-text" ref={ref}>{currentGame.title}</h1>
            <p className="center-text" style={{ maxWidth: '100vw' }}>{currentGame.description}</p>

            <div className="space" />

            <div
                className="video-background-container"
                style={{
                    backgroundImage: !isMobile && currentGame.backgroundImage ? `url(${currentGame.backgroundImage})` : 'none',
                }}
            >
                {/* Gradient overlays */}
                <div className="gradient-overlay gradient-top-left"></div>
                <div className="gradient-overlay gradient-top-right"></div>
                <div className="gradient-overlay gradient-bottom-left"></div>
                <div className="gradient-overlay gradient-bottom-right"></div>

                {/* Video */}
                {compatibleVideoSource && (
                    <video
                        key={compatibleVideoSource.src}
                        className="video-element"
                        loop
                        autoPlay
                        muted
                        preload="auto"
                        src={compatibleVideoSource.src}
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            <div className="space" />

            {currentGame.link && (
                <div className="try-button-container">
                    <a href={currentGame.link} className="purple-button-link" target="_blank" rel="noopener noreferrer">
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