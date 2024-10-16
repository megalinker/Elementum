import React from 'react';
import './LoadingScreen.css';
import KAILoading from '/assets/KAILoading.webp';

interface LoadingScreenProps {
    progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
    return (
        <div className="loading-screen">
            <img src={KAILoading} alt="KAILoading" className="kaiLoading" />
            <div className="loading-content">
                <h2 className="loading-text">Loading</h2>
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p style={{ fontSize: '36px', fontWeight: 900, paddingTop: '5px' }}>{Math.round(progress)}%</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
