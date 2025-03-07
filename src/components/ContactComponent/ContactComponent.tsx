import React, { useRef } from 'react';
import KAI from '../KAI/KAI';
import FormComponent from './FormComponent/FormComponent';

import './ContactComponent.css';

interface ContactComponentProps {
    onLoaded: () => void;
}

const ContactComponent: React.FC<ContactComponentProps> = ({ onLoaded }) => {

    const hasLoadedRef = useRef(false);

    const handleKAILoaded = () => {
        if (!hasLoadedRef.current) {
            onLoaded();
            hasLoadedRef.current = true;
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-left">
                <h3>Looking to create a game that stands out in the Web3 universe?</h3>
                <div className="smallerSpace" />
                <p>
                    At Elementum, we specialize in developing games that seamlessly blend entertainment with blockchain technology on the Internet Computer (IC) to engage and captivate your audience.
                </p>
                <p>
                    Contact us today to discover how we can help bring your vision to life.
                </p>
                <div className="smallerSpace" />
                <FormComponent />
            </div>
            <div className="contact-right">
                <KAI onLoaded={handleKAILoaded} />
            </div>
        </div>
    );
};

export default ContactComponent;
