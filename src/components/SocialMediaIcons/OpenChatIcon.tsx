import React from 'react';

interface IconProps {
    className?: string;
}

const OpenChatIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 361 361"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-label="Open Chat Icon"
        fill="currentColor"
    >
        <title>Open Chat Icon</title>
        <defs>
            <linearGradient id="gradient-2" />
            <linearGradient id="gradient-5" />
            <linearGradient id="gradient-6" />
            <linearGradient
                id="gradient-6-1"
                gradientUnits="userSpaceOnUse"
                x1="973.216"
                y1="100.665"
                x2="973.216"
                y2="388.077"
                gradientTransform="matrix(0.974127 -0.22842 0.310454 1.352474 -95.300314 85.515158)"
                xlinkHref="#gradient-6"
            />
            <linearGradient
                id="gradient-5-0"
                gradientUnits="userSpaceOnUse"
                x1="188.919"
                y1="1.638"
                x2="188.919"
                y2="361.638"
                gradientTransform="matrix(-0.999999 0.0016 -0.002016 -1.25907 376.779907 357.264557)"
                xlinkHref="#gradient-5"
            />
        </defs>
        <g transform="matrix(1, 0, 0, 1, -69.98674, -69.986298)">
            {/* Outer Circle */}
            <path
                d="M188.919 181.638 m-180 0 a180 180 0 1 0 360 0 a180 180 0 1 0 -360 0 Z M188.919 181.638 m-100 0 a100 100 0 0 1 200 0 a100 100 0 0 1 -200 0 Z"
                style={{ fill: 'url(#gradient-5-0)' }}
                transform="matrix(1, 0.000074, -0.000074, 1, 61.094498, 68.347626)"
            />
            {/* Pie Slice */}
            <path
                d="M958.327234958 100.664699414 A175.433 175.433 0 0 1 958.327234958 388.077300586 L913.296322517 323.766492741 A96.924 96.924 0 0 0 913.296322517 164.975507259 Z"
                style={{ fill: 'url(#gradient-6-1)', strokeWidth: 0 }}
                transform="matrix(1.031731, 0.000001, 0, 1.020801, -634.597351, 0.544882)"
            />
            {/* Inner Circle */}
            <circle cx="250" cy="250" r="100" style={{ fill: 'rgb(25, 25, 25)' }} />
        </g>
    </svg>
);

export default OpenChatIcon;
