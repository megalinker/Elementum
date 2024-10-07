import React from 'react';
import './GamesText.css';

const GamesText: React.FC = () => {
    const svgSize = 37;
    const svgMargin = 2;

    return (
        <div className="games-text-container">
            <span className="games-text-large">G</span>
            <span className="games-text-medium">a</span>

            <svg
                className="games-svg"
                width={svgSize}
                height={svgSize}
                viewBox="0 0 44 35"
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: `0 ${svgMargin}px` }}
            >
                <g clipPath="url(#clip0_46_63)">
                    <path
                        d="M30.8085 24.0367L30.8085 13.0242L26.3829 13.0242L26.3829 25.7962L35.2297 35L39.5563 35L44 30.5254L44 9.8C44 9.10782 43.6715 8.45582 43.1135 8.04274L32.8718 0.437639C32.4893 0.154067 32.0235 -5.23508e-07 31.5465 -5.44358e-07L12.4535 -1.37894e-06C11.9765 -1.39979e-06 11.5107 0.154066 11.1282 0.437638L0.886482 8.04274C0.328495 8.45805 -3.98115e-07 9.10781 -4.28372e-07 9.8L-1.33431e-06 30.5254L4.4414 35L8.7658 35L17.6418 25.7984L17.6418 13.0242L13.2162 13.0242L13.2162 24.0345L6.87584 30.608L6.29311 30.608L4.4234 28.7257L4.4234 11.6332C4.4234 11.171 4.64164 10.7378 5.01514 10.4609L12.7955 4.68453C13.0497 4.49474 13.3602 4.39202 13.6797 4.39202L30.3181 4.39203C30.6376 4.39203 30.9458 4.49474 31.2023 4.68453L38.9826 10.4609C39.3539 10.7378 39.5744 11.171 39.5744 11.6332L39.5743 28.7257L37.7046 30.608L37.1242 30.608L30.8085 24.0367Z"
                        fill="#AF50CE"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_46_63">
                        <rect width="35" height="44" fill="white" transform="translate(44) rotate(90)" />
                    </clipPath>
                </defs>
            </svg>

            <span className="games-text-medium">es</span>
        </div>
    );
};

export default GamesText;
