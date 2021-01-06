import React, { useContext } from 'react';
import ConfigAppContext from '../../../context/configContext';
const CharacterName = () => {
  const { character } = useContext(ConfigAppContext);
  const { name } = character;
  return (
    <div className="character-name">
      <h2>{name}</h2>
    </div>
  );
};

export default CharacterName;
