import React from 'react';

interface IconProps {
    className?: string;
}

const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        width="30px"
        height="30px"
        aria-label="LinkedIn Icon"
    >
        {/* LinkedIn SVG Path */}
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.4 107 
             0 82.6 0 53.1 0 23.6 24.4 0 54.84 
             0c30.44 0 54.84 23.6 54.84 53.1 
             0 29.5-24.4 53.9-54.84 
             53.9zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 
             0-55.7 37.7-55.7 76.7V448h-92.68V148.9h89V196h1.3c12.4-23.5 
             42.6-48.3 87.7-48.3 93.8 
             0 111.1 61.7 111.1 141.3V448z" />
    </svg>
);

export default LinkedInIcon;
