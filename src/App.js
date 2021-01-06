import './App.css';
import useInitApp from './hooks/useInitApp';
import { ConfigAppProvider } from './context/configContext';

import Layout from './components/Layout';

function App() {
  const { character, setCharacter } = useInitApp();
  return (
    <ConfigAppProvider
      value={{
        character,
        setCharacter,
      }}
    >
      <Layout />
    </ConfigAppProvider>
  );
}

export default App;
