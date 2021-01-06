import React from 'react';

export default function CharacterImage({ image, name }) {
  return <img className="character-image" src={image} alt={name} />;
}
