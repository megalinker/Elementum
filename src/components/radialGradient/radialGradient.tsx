import React from 'react';
import styles from './radialGradient.module.scss';
import tinycolor from 'tinycolor2';

interface RadialGradientProps {
    color: string;
    radius: string;
    opacity: number;
}

const RadialGradient: React.FC<RadialGradientProps> = ({ color, radius, opacity }) => {
    // Ensure opacity is between 0 and 1
    const validOpacity = Math.min(Math.max(opacity, 0), 1);

    // Convert the color to RGBA using tinycolor
    const rgbaColor = tinycolor(color).setAlpha(validOpacity).toRgbString();

    // Define the gradient style
    const gradientStyle: React.CSSProperties = {
        background: `radial-gradient(circle at center, ${rgbaColor}, transparent ${radius})`,
    };

    return <div className={styles.radialGradient} style={gradientStyle}></div>;
};

export default RadialGradient;