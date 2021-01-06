import React, { useContext } from 'react';
import ConfigAppContext from '../../../context/configContext';

export default function CharacterDescription() {
  const { character } = useContext(ConfigAppContext);
  const { gender, species, status } = character;
  return (
    <div className="character-labels">
      <h3 className="character-label">{`Género: ${gender}`}</h3>
      <h3 className="character-label">{`Especie: ${species} `}</h3>
      <h3 className="character-label">{`Status: ${status}`}</h3>
    </div>
  );
}
