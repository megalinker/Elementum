import React from 'react';
import './ServiceComponent.css';

interface ServiceComponentProps {
    baseImage: string;
    hoverImage: string;
    text: string;
}

const ServiceComponent: React.FC<ServiceComponentProps> = ({ baseImage, hoverImage, text }) => {
    return (
        <div className="image-hover-wrapper" >
            <img src={baseImage} alt="" className="image-base" />
            <div className="overlay-text-sc">{text}</div>
            <img src={hoverImage} alt="" className="image-hover" />
        </div>
    );
};

export default ServiceComponent;
