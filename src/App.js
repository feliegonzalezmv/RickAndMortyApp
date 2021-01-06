import './App.css';
import useInitApp from './hooks/useInitApp';
import CharacterName from './components/Character/CharacterName';
import CharacterImage from './components/Character/CharacterImage';
import CharacterDescription from './components/Character/CharacterDescription';
import CharacterPlaceHolder from './components/Character/CharacterPlaceHolder';
function App() {
  const { character } = useInitApp();
  const { name, image, gender, status, species } = character;
  return (
    <div className="App">
      <div className="placeholder-container">
        <CharacterPlaceHolder name={name} />
      </div>
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img
          className="logo"
          src="..\assets\images\logo@2x.png"
          width="280"
          alt=""
        />
        <div className="social">
          <a href="https://instagram.com/LeonidasEsteban">
            <img src="./static/images/instagram.svg" alt="" />
          </a>
          <a href="https://facebook.com/LeonidasEsteban">
            <img src="./static/images/facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/LeonidasEsteban">
            <img src="./static/images/twitter.svg" alt="" />
          </a>
        </div>
        <div className="navigation name">
          <a href="/#">#Name</a>
        </div>
        <div id="character-name-container" className="character-name-container">
          <CharacterName name={name} />
        </div>

        <div
          id="character-image-container"
          className="character-image-container"
        >
          <CharacterImage image={image} name={name} />
        </div>
        <div className="navigation about">
          <a href="/#">About</a>
        </div>

        <div
          id="character-description-container"
          className="character-description-container"
        >
          <CharacterDescription
            gender={gender}
            species={species}
            status={status}
          />
        </div>
        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>

        <div></div>
        <div className="learn-more">
          <span>learn more</span>
        </div>

        <div className="arrow" id="load-next"></div>
      </div>
    </div>
  );
}

export default App;
