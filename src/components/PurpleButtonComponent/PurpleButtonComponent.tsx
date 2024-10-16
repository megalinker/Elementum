import React from 'react';
import './PurpleButtonComponent.css';

interface PurpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const PurpleButtonComponent: React.FC<PurpleButtonProps> = ({ children, ...props }) => {
    return (
        <div className="purple-button-container">
            <button className="purple-button" {...props}>
                {children}
            </button>
        </div>
    );
};

export default PurpleButtonComponent;
