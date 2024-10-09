import React, { useState } from 'react';
import './ServicesComponent.css';
import ServiceComponent from './ServiceComponent/ServiceComponent';

interface Service {
    baseImage: string;
    hoverImage: string;
    text: string;
    description: string;
}

const services: Service[] = [
    {
        baseImage: '/assets/Services/SERVICE_001_A.webp',
        hoverImage: '/assets/Services/SERVICE_001_B.webp',
        text: 'Web3 & Blockchain Integration',
        description: 'Leverage cutting-edge Web3 technologies with a focus on Internet Computer Protocol (ICP) to create decentralized game experiences. Our expertise in ICP blockchain development ensures secure transactions, ownership of in-game assets, and seamless integration with the ICP ecosystem, enhancing player trust and engagement.',
    },
    {
        baseImage: '/assets/Services/SERVICE_002_A.webp',
        hoverImage: '/assets/Services/SERVICE_002_B.webp',
        text: 'Unity Game Development',
        description: 'Harness the power of Unity to build high-quality, cross-platform games. From initial concept to final deployment, our skilled developers create immersive and scalable gaming experiences tailored to your vision, ensuring optimal performance on PC, mobile, and consoles.',
    },
    {
        baseImage: '/assets/Services/SERVICE_003_A.webp',
        hoverImage: '/assets/Services/SERVICE_003_B.webp',
        text: '3D Modeling & Animation',
        description: 'Bring your game world to life with our expert 3D modeling and animation services. We craft detailed characters, environments, and assets with stunning realism and fluid animations, enhancing the visual appeal and player immersion of your game.',
    },
    {
        baseImage: '/assets/Services/SERVICE_004_A.webp',
        hoverImage: '/assets/Services/SERVICE_004_B.webp',
        text: 'Game Design & UX/UI',
        description: 'Design engaging and intuitive gameplay experiences with our comprehensive game design and UX/UI services. We focus on creating compelling storylines, balanced mechanics, and user-friendly interfaces that ensure players remain captivated and enjoy seamless interactions throughout your game.',
    },
];

const ServicesComponent: React.FC = () => {

    const [hoveredDescription, setHoveredDescription] = useState('');



    return (
        <>
            <div className="services-container" >
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <ServiceComponent
                            baseImage={service.baseImage}
                            hoverImage={service.hoverImage}
                            text={service.text}
                            onHover={() => setHoveredDescription(service.description)}
                            onLeave={() => setHoveredDescription('')}
                        />
                    </div>
                ))}

            </div>

            <div className="space" />

            <div className={`service-description ${hoveredDescription ? 'visible' : ''}`}>
                {hoveredDescription}
            </div>
        </>
    );
};

export default ServicesComponent;
