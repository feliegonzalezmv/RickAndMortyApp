import React, { useContext } from 'react';
import ConfigAppContext from '../../../context/configContext';

export default function CharacterPlaceHolder() {
  const { character } = useContext(ConfigAppContext);
  const { name } = character;
  return (
    <h1 id="character-name-placeholder" className="character-name-placeholder">
      {name}
    </h1>
  );
}
