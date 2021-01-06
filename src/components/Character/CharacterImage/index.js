import React, { useContext } from 'react';
import ConfigAppContext from '../../../context/configContext';

export default function CharacterImage() {
  const { character } = useContext(ConfigAppContext);
  const { image, name } = character;
  return <img className="character-image" src={image} alt={name} />;
}
