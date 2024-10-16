import React, { useState } from 'react';
import './ServicesComponent.css';
import ServiceComponent from './ServiceComponent/ServiceComponent';
import { useMediaQuery } from 'react-responsive';

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

    const [hoveredFirstGroupIndex, setHoveredFirstGroupIndex] = useState<number | null>(null);
    const [hoveredSecondGroupIndex, setHoveredSecondGroupIndex] = useState<number | null>(null);
    const isMedium = useMediaQuery({ query: '(max-width: 1612px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 675px)' });

    // Determine how to split services for medium screens
    const splitIndex = Math.ceil(services.length / 2);
    const firstGroup = services.slice(0, splitIndex);
    const secondGroup = services.slice(splitIndex);

    return (
        <>
            <div className="services-container">
                {isMedium && !isMobile ? (
                    <>
                        {/* First Group of Services */}
                        {firstGroup.map((service, index) => (
                            <div
                                key={index}
                                className="service-item"
                                onMouseEnter={() => setHoveredFirstGroupIndex(index)}
                                onMouseLeave={() => setHoveredFirstGroupIndex(null)}
                                onTouchStart={() => setHoveredFirstGroupIndex(index)}
                            >
                                <ServiceComponent
                                    baseImage={service.baseImage}
                                    hoverImage={service.hoverImage}
                                    text={service.text}
                                />
                                {isMobile && hoveredFirstGroupIndex === index && (
                                    <div className="service-description visible">
                                        {service.description}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Description Between Rows */}
                        <div className={`service-description between-rows ${hoveredFirstGroupIndex !== null ? 'visible' : ''}`}>
                            {hoveredFirstGroupIndex !== null && firstGroup[hoveredFirstGroupIndex].description}
                        </div>


                        {/* Second Group of Services */}
                        {secondGroup.map((service, index) => (
                            <div
                                key={splitIndex + index}
                                className="service-item"
                                onMouseEnter={() => setHoveredSecondGroupIndex(splitIndex + index)}
                                onMouseLeave={() => setHoveredSecondGroupIndex(null)}
                                onTouchStart={() => setHoveredSecondGroupIndex(splitIndex + index)}
                            >
                                <ServiceComponent
                                    baseImage={service.baseImage}
                                    hoverImage={service.hoverImage}
                                    text={service.text}
                                />
                                {isMobile && hoveredSecondGroupIndex === splitIndex + index && (
                                    <div className="service-description visible">
                                        {service.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                ) : (
                    // Default Layout for Mobile
                    services.map((service, index) => (
                        <div
                            key={index}
                            className="service-item"
                            onMouseEnter={() => setHoveredSecondGroupIndex(index)}
                            onMouseLeave={() => setHoveredSecondGroupIndex(null)}
                            onTouchStart={() => setHoveredSecondGroupIndex(index)}
                        >
                            <ServiceComponent
                                baseImage={service.baseImage}
                                hoverImage={service.hoverImage}
                                text={service.text}
                            />
                            {isMobile && hoveredSecondGroupIndex === index && (
                                <div className="service-description visible">
                                    {service.description}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Description Below All Items for Larger Screens */}

            {!isMobile && (
                <div className={`service-description ${hoveredSecondGroupIndex !== null ? 'visible' : ''}`}>
                    {hoveredSecondGroupIndex !== null && services[hoveredSecondGroupIndex].description}
                </div>
            )}

            <div className="space" />
        </>
    );
};

export default ServicesComponent;
