import React from 'react';
import './PurpleButtonComponent.css';

interface PurpleButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

const PurpleButtonComponent: React.FC<PurpleButtonProps> = ({ onClick, children }) => {
    return (
        <div className="purple-button-container">
            <button className="purple-button" onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default PurpleButtonComponent;
