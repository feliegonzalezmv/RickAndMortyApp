import { useState, useEffect } from 'react';
import { getCharacter } from 'rickmortyapi';
export default function useInitApp() {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getFirstCharacter = async () => {
      try {
        const firstCharacter = await getCharacter(1);
        setCharacter(firstCharacter);
      } catch (error) {}
    };
    getFirstCharacter();
  }, []);

  return { character, setCharacter };
}
