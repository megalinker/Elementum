// PurpleButtonComponent.tsx
import React from 'react';
import './PurpleButtonComponent.css';

interface PurpleButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

const PurpleButtonComponent: React.FC<PurpleButtonProps> = ({ onClick, children }) => {
    return (
        <button className="purple-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default PurpleButtonComponent;
