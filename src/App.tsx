import './App.scss';
import RadialGradient from './components/radialGradient/radialGradient';
import ScrollIcon from './components/ScrollIcon/ScrollIcon';
import YellowLines from './components/YellowLines/YellowLines';
import GamesText from './components/Texts/GamesText/GamesText';
import GamesComponent from './components/GamesComponent/GamesComponent';

function App() {

  return (
    <div className="App">
      <div className="gradient-container-1">
        <RadialGradient color="#FF7E00" radius="33vw" opacity={0.2} />
      </div>
      <div className="gradient-container-2">
        <RadialGradient color="#00C9F7" radius="33vw" opacity={0.2} />
      </div>
      <div className="space" />
      <h1>Innovating Web3 Games</h1>
      <p>We develop unique games and offer game development services for third parties. Explore the future of gaming with us</p>


      <ScrollIcon />

      <div className="space" />

      <YellowLines>
        <GamesText />
      </YellowLines>

      <div className="space" />

      <GamesComponent />

      <div className="space" />

      <YellowLines>
        <div className="orbitron">
          about us
        </div>
      </YellowLines>

      <p>We've been here since Genesis, and have started working on Elementum a bit after, being our first Collection Faceted Meninas the 9th collection sold on Entrepot. Elementum is one of the very few NFT projects that have delivered a functional game where +150 unique real players have had fun during 9 tournaments using their NFTs with real utility.</p>

      <YellowLines>
        <div className="orbitron">
          services
        </div>
      </YellowLines>

      <p>At Elementum, we are passionate about creating unique experiences in the world of decentralized gaming. From conceptual design to technical implementation, we collaborate with our clients to build innovative games.</p>

      <YellowLines>
        <div className="orbitron">
          Contact us
        </div>
      </YellowLines>
    </div>
  );
}

export default App;
