import { useRef, useEffect, useState, forwardRef } from 'react';
import './App.css';
import track01 from './01-SlowBrew.mp3'
import track02 from './02-AGoodCupOfJoe.mp3'
import track03 from './03-TheWayYouLikeIt.mp3'
import track04 from './04-DownPolkStreet.mp3'
import track05 from './05-HouseBlend.mp3'
import track06 from './06-DrKilo.mp3'
import track07 from './07-AtThePromenade.mp3'
import track08 from './08-BrewHaHa.mp3'
import track09 from './09-Julianna.mp3'
import track10 from './10-HanginOut.mp3'
import track11 from './11-Doppio.mp3'
import track12 from './12-CommingHome.mp3'

function App() {

  const trackRef01 = useRef(null);
  const trackRef02 = useRef(null);
  const trackRef03 = useRef(null);
  const trackRef04 = useRef(null);
  const trackRef05 = useRef(null);
  const trackRef06 = useRef(null);
  const trackRef07 = useRef(null);
  const trackRef08 = useRef(null);
  const trackRef09 = useRef(null);
  const trackRef10 = useRef(null);
  const trackRef11 = useRef(null);
  const trackRef12 = useRef(null);


  const album = [
    { id: '01', src: track01, ref: trackRef01, name: 'Slow Brew', vol: .25 },
    { id: '02', src: track02, ref: trackRef02, name: 'A GoodC up Of Joe', vol: .25 },
    { id: '03', src: track03, ref: trackRef03, name: 'The Way You Like It', vol: .25 },
    { id: '04', src: track04, ref: trackRef04, name: 'Down Polk Street', vol: .25 },
    { id: '05', src: track05, ref: trackRef05, name: 'House Blend', vol: .25 },
    { id: '06', src: track06, ref: trackRef06, name: 'Dr. Kilo', vol: .25 },
    { id: '07', src: track07, ref: trackRef07, name: 'At The Promenade', vol: .25 },
    { id: '08', src: track08, ref: trackRef08, name: 'Brew Ha Ha', vol: .25 },
    { id: '09', src: track09, ref: trackRef09, name: 'Julianna', vol: .25 },
    { id: '10', src: track10, ref: trackRef10, name: 'Hangin Out', vol: .25 },
    { id: '11', src: track11, ref: trackRef11, name: 'Doppio', vol: .25 },
    { id: '12', src: track12, ref: trackRef12, name: 'Comming Home', vol: .25 }
  ]
  const [isPlaying, setIsPlaying] = useState(false);
  const mode = {
    'play': () => { trackRef01.current.play() },
    'pause': () => { trackRef01.current.pause() },
    'reload': () => { trackRef01.current.load() }
  }

  const buttonLabel = {
    true: 'PAUSE', false: 'PLAY'
  }
  useEffect(() => {
    // trackRef01.current.pause();
  }, []);

  const [vol, setVol] = useState(.25)
  const setVolume = e => {
    const audio = document.getElementById('audio');
    audio.volume = e.target.value / 100;
    setVol(audio.volume)
  }

  const Controls = ({ play, pause, load, trackName }) => {

    return (
      <div className='track'>
        <span>{trackName} </span>
        <button onClick={play}>PLAY</button>
        <button onClick={pause}>PAUSE</button>
        <button onClick={load}>RESET</button>
      </div>
    )
  }

  const Header = () => <div className='track'>
    <h2>Song Name</h2>
    <div></div>
    <div></div>
    <div></div>
  </div>

  const playTrack = trackRef => trackRef.current.play();
  const pauseTrack = trackRef => trackRef.current.pause();
  const resetTrack = trackRef => trackRef.current.load();
  const adjustVolume = (e, trackId) => {
    const audio = document.getElementById(trackId);
    audio.volume = e.target.value / 100;
    console.log('adjustVolume', audio.volume, trackId)
    setVol(audio.volume)
  }

  return (
    <div className="App">
      <Header />
      {album.map(track => {
        return <div key={track.id}>
          <audio src={track.src} ref={track.ref} id={track.id} volume={track.vol} />
          <Controls
            play={() => playTrack(track.ref)}
            pause={() => pauseTrack(track.ref)}
            load={() => resetTrack(track.ref)}
            trackName={track.name}
            volumeControl={adjustVolume}
            trackId={track.id}
            vol={vol}
          />
        </div>
      })
      }

    </div>
  );
}

export default App;

/* 
      <audio src={track01} ref={trackRef01} id='audio' volume={vol} />
      <button onClick={reloadTrack}>{isPlaying ? 'RESTART' : 'REWIND'}</button>
      <button onClick={() => toggleTrackPlay(isPlaying ? 'pause' : 'play')}>{buttonLabel[isPlaying]}</button>
      <input type='range' onChange={setVolume} value={parseInt(vol * 100)} /> {parseInt(vol * 100)}

 <Track track={track02} />
   <Track track={track02} trackRef={trackRef02} reload={reloadTrack} togglePlay={toggleTrackPlay} setVol={setVolume} />
    */