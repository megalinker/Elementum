import React from 'react';
import './KAI.css';
import Kai from '/assets/KAI/KAI.webp';
import Kai_Glow from '/assets/KAI/KAI_Glow.webp';

const KAI: React.FC = () => {
    return (
        <div className="containerKAI">
            <img src={Kai_Glow} alt="Behind" className="imageBehind" />
            <img src={Kai} alt="Front" className="imageFront" />
        </div>
    );
};

export default KAI;
