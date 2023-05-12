import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from './lib/fetchTracks';
import { AlbumCover } from './AlbumCover';

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };
  const goToPrevTrack = () => {
    setTrackIndex(trackIndex - 1);
  };
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  console.log(tracks);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
      </header>
      <div className="App-images">
        {tracks && <AlbumCover track={tracks[0]} />}
      </div>
      <div className="App-buttons">
        {tracks && (
          <>
            <audio
              src={tracks.at(trackIndex % 20).track.preview_url}
              autoPlay
              controls
            />
            <div style={{ display: 'flex' }}>
              <button onClick={goToPrevTrack}>
                {tracks.at((trackIndex - 1) % 20).track.name}
              </button>
              <button onClick={goToNextTrack}>
                {tracks.at((trackIndex + 1) % 20).track.name}
              </button>
            </div>
          </>
        )}
      </div>
      <p>{tracks && tracks[trackIndex].track.name}</p>
    </div>
  );
};

export default App;
