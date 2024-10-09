import React from 'react';

interface IconProps {
    className?: string;
}

const EmailIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        width="12"
        height="11"
        viewBox="0 0 12 11"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Email Icon"
        fill="currentColor"
    >
        <title>Email Icon</title>
        <path
            d="M11.9999 1.91436C11.9999 1.25436 11.4599 0.714355 10.7999 0.714355H1.19991C0.539908 0.714355 -0.0000915527 1.25436 -0.0000915527 1.91436V9.11435C-0.0000915527 9.77435 0.539908 10.3144 1.19991 10.3144H10.7999C11.4599 10.3144 11.9999 9.77435 11.9999 9.11435V1.91436ZM10.7999 1.91436L5.99991 4.91436L1.19991 1.91436H10.7999ZM10.7999 9.11435H1.19991V3.11436L5.99991 6.11436L10.7999 3.11436V9.11435Z"
            fill="white"
        />
    </svg>
);

export default EmailIcon;
