import React, { useEffect, useRef } from 'react';
import './KAI.css';
import Kai from '/assets/KAI/KAI.webp';
import Kai_Glow from '/assets/KAI/KAI_Glow.webp';

interface KAIProps {
    onLoaded: () => void;
}

const KAI: React.FC<KAIProps> = ({ onLoaded }) => {

    const hasLoadedRef = useRef(false);

    useEffect(() => {
        const preloadImage = (src: string): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve();
                img.onerror = () => resolve();
            });
        };

        const preloadImages = async () => {
            const kaiSrc = '/assets/KAI/KAI.webp';
            const kaiGlowSrc = '/assets/KAI/KAI_Glow.webp';

            await Promise.all([preloadImage(kaiSrc), preloadImage(kaiGlowSrc)]);

            if (!hasLoadedRef.current) {
                onLoaded();
                hasLoadedRef.current = true;
            }
        };

        preloadImages();
    }, [onLoaded]);

    return (
        <div className="containerKAI">
            <img src={Kai_Glow} alt="Behind" className="imageBehind" />
            <img src={Kai} alt="Front" className="imageFront" />
        </div>
    );
};

export default KAI;
