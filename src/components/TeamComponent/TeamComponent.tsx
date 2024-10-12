import React from 'react';
import MemberComponent from './MemberComponent/MemberComponent';
import './TeamComponent.css';

interface Member {
    name: string;
    description: string;
    imageSrc: string;
    xAccount?: string;
    linkedIn?: string;
    github?: string;
    discord?: string;
    instagram?: string;
}

const membersData: Member[] = [
    {
        name: '@Kellios_one',
        description:
            'Project Lead managing design, UX, and game dynamics with 5+ years in game and economic design.',
        imageSrc: 'assets/Team/kellios.webp',
        xAccount: 'Kellios_one',
        discord: 'https://discord.gg/JpdQ8zXcZK',
    },
    {
        name: '@capuzr',
        description:
            'Projects Booster and Motoko developer with 8 years in software development and 3 years in Motoko and IC architecture.',
        imageSrc: 'assets/Team/capuzr.webp',
        xAccount: 'capuzr',
        linkedIn: 'https://www.linkedin.com/in/capuzr/',
        github: 'https://github.com/capuzr',
        discord: 'https://discord.gg/JpdQ8zXcZK',
    },
    {
        name: '@dgranado.icp',
        description:
            'UI/UX Designer and asset creator with 4+ years in web design and 6+ years in asset design, leading marketing efforts.',
        imageSrc: 'assets/Team/dgranado.webp',
        xAccount: 'dgranadoicp',
        linkedIn: 'https://www.linkedin.com/in/daniel-alejandro-granado/',
        discord: 'https://discord.gg/JpdQ8zXcZK',
    },
    {
        name: '@guil',
        description:
            'Game Developer since university, creator of Bounty Rush, experienced in Unity with C# and ICP.',
        imageSrc: 'assets/Team/guilmer.webp',
        linkedIn: 'https://www.linkedin.com/in/guilmer-barreto-nunez/',
        discord: 'https://discord.gg/JpdQ8zXcZK',
    },
    {
        name: '@luchoart',
        description:
            'Illustrator and animator with 7+ years experience, responsible for brand identity and asset illustrations.',
        imageSrc: 'assets/Team/luchoart.webp',
        discord: 'https://discord.gg/JpdQ8zXcZK',
        instagram: 'dlucho.art',
    },
];

const TeamComponent: React.FC = () => {
    return (
        <div className="members-list-container">
            {membersData.map((member) => (
                <MemberComponent
                    key={member.name}
                    name={member.name}
                    description={member.description}
                    imageSrc={member.imageSrc}
                    xAccount={member.xAccount}
                    linkedIn={member.linkedIn}
                    github={member.github}
                    discord={member.discord}
                    instagram={member.instagram}
                />
            ))}
        </div>
    );
};

export default TeamComponent;
