import './App.scss';
import React, { useRef } from 'react';
import RadialGradient from './components/radialGradient/radialGradient';
import PurpleButtonComponent from './components/PurpleButtonComponent/PurpleButtonComponent';
import ScrollIcon from './components/ScrollIcon/ScrollIcon';
import YellowLines from './components/YellowLines/YellowLines';
import GamesText from './components/Texts/GamesText/GamesText';
import GamesComponent from './components/GamesComponent/GamesComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import TeamComponent from './components/TeamComponent/TeamComponent';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ServicesComponent from './components/ServicesComponent/ServicesComponent';
import PerspectiveGrid from '/assets/PerspectiveGrid.svg';
import HeroComponent from './components/HeroComponent/HeroComponent';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}
function App() {

  const sectionRefs: SectionRefs = {
    home: useRef<HTMLDivElement>(null),
    games: useRef<HTMLDivElement>(null),
    highlightedgame: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    socials: useRef<HTMLDivElement>(null),
  };

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${PerspectiveGrid})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const scrollToSection = (section: keyof SectionRefs) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      const navbarHeight = 133;
      const elementPosition = ref.current.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">

      <Navbar scrollToSection={scrollToSection} />

      {/* Background Gradients */}
      <div className="gradient-container-1">
        <RadialGradient color="#FF7E00" radius="33vw" opacity={0.2} />
      </div>
      <div className="gradient-container-2">
        <RadialGradient color="#00C9F7" radius="33vw" opacity={0.2} />
      </div>

      <div className="biggerSpace" />
      <div className="biggerSpace" />

      {/* Hero */}
      <h1 ref={sectionRefs.home}>Innovating Web3 Games</h1>
      <p>We develop unique games and offer game development services for third parties. Explore the future of gaming with us</p>

      <div className="space" />

      <HeroComponent />

      <div className="space" />

      <PurpleButtonComponent onClick={() => scrollToSection('contact')}>
        Contact Us
      </PurpleButtonComponent>

      <div className="space" />

      <ScrollIcon />

      <div className="biggerSpace" />

      {/* Games */}
      <YellowLines ref={sectionRefs.games}>
        <GamesText />
      </YellowLines>

      <div className="space" />

      <GamesComponent scrollToSection={scrollToSection} ref={sectionRefs.highlightedgame} />

      <div className="biggerSpace" />
      <div className="biggerSpace" />

      {/* About */}
      <YellowLines ref={sectionRefs.about}>
        <div className="orbitron">about us</div>
      </YellowLines>

      <div className="space" />

      <div className="textContainer">
        <p>We've been part of the Web3 space since the Internet Computer Protocol (ICP) Genesis and began developing Elementum shortly thereafter. Elementum is our inaugural collection following Faceted Meninas, the ninth collection sold on Entrepot. It stands out as one of the few NFT projects to offer a functional game, with over 150 unique players participating in nine tournaments and utilizing their NFTs with real utility.</p>
      </div>

      <TeamComponent />

      {/* Services */}
      <YellowLines ref={sectionRefs.services}>
        <div className="orbitron">services</div>
      </YellowLines>

      <div className="space" />

      <div className="perspectiveBg" style={backgroundStyle} >

        <div className="textContainer" >
          <p>At Elementum, we are dedicated to creating unique experiences in decentralized gaming. From conceptual design to technical implementation, we collaborate closely with our clients to develop innovative games.</p>
        </div>

        <div className="space" />

        <ServicesComponent />

        <div className="space" />
      </div>
      {/* Contact */}
      <YellowLines ref={sectionRefs.contact}>
        <div className="orbitron">Contact us</div>
      </YellowLines>

      <ContactComponent />

      <div className="biggerSpace" />

      {/* Footer */}
      <Footer ref={sectionRefs.socials} />
    </div>
  );
}

export default App;
