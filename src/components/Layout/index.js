import React from 'react';
import Next from '../Next';
import Logo from '../../assets/images/logo@2x.png';
import InstagramImage from '../../assets/images/instagram.svg';
import TwitterImage from '../../assets/images/twitter.svg';
import FacebookImage from '../../assets/images/facebook.svg';
import CharacterName from '../Character/CharacterName';
import CharacterImage from '../Character/CharacterImage';
import CharacterDescription from '../Character/CharacterDescription';
import CharacterPlaceHolder from '../Character/CharacterPlaceHolder';

function Layout() {
  return (
    <div>
      {' '}
      <div className="placeholder-container">
        <CharacterPlaceHolder />
      </div>
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img className="logo" src={Logo} width="280" alt="" />
        <div className="social">
          <a href="https://www.facebook.com/Felipegonzalezmv" target="__blank">
            <img src={FacebookImage} alt="" />
          </a>

          <a href="https://www.instagram.com/ortizpipeg" target="__blank">
            <img src={InstagramImage} alt="" />
          </a>
          <a href="https://twitter.com/pipeortizg" target="__blank">
            <img src={TwitterImage} alt="" />
          </a>
        </div>
        <div className="navigation name">
          <a href="/#">Name</a>
        </div>
        <div id="character-name-container" className="character-name-container">
          <CharacterName />
        </div>

        <div
          id="character-image-container"
          className="character-image-container"
        >
          <CharacterImage />
        </div>
        <div className="navigation about">
          <a href="/#">About</a>
        </div>

        <div
          id="character-description-container"
          className="character-description-container"
        >
          <CharacterDescription />
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
        <Next />
      </div>
    </div>
  );
}

export default Layout;
