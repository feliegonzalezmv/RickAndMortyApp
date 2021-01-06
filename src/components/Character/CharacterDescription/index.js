import React from 'react';

export default function CharacterDescription({ gender, species, status }) {
  return (
    <div class="character-labels">
      <h3 class="character-label">{`Género: ${gender}`}</h3>
      <h3 class="character-label">{`Especie: ${species} `}</h3>
      <h3 class="character-label">{`Status: ${status}`}</h3>
    </div>
  );
}
