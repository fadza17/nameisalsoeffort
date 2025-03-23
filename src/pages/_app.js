// src/pages/_app.js
import { GameProvider } from '../context/GameContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}

export default MyApp;
