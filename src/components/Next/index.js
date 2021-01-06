import React, { useContext } from 'react';
import '../../assets/css/nprogress.css';
import ConfigAppContext from '../../context/configContext';
import NProgress from 'nprogress';

import { getCharacter } from 'rickmortyapi';
export default function Next() {
  const { character, setCharacter } = useContext(ConfigAppContext);
  const { id } = character;

  const handleClick = async () => {
    try {
      NProgress.start();
      setCharacter(await getCharacter(id + 1));
      NProgress.done();
    } catch (error) {
      NProgress.done();
    }
  };

  return <div className="arrow" id="load-next" onClick={handleClick}></div>;
}
