import React from 'react';

export default function CharacterPlaceHolder({ name }) {
  return (
    <h1 id="character-name-placeholder" className="character-name-placeholder">
      {name}
    </h1>
  );
}
