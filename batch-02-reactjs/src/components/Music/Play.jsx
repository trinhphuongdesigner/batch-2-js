import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

// import { getDuration } from '../../helper';

// import audio from 'assets/music/coaycuaanhay.mp3';
// import thumbnail from 'assets/image/music/1.jpg';

import './music.css';

export default function Play({ name, artist, cover, id, src, onPrevMusic, onNextMusic }) {

  const audioRef = useRef();

  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
  }, [id]);

  const onChangeSlider = useCallback((event) => {
    audioRef.current.currentTime = event.target.value;
  }, []);

  const getTrackLength = () => {
    audioRef.current.addEventListener('loadedmetadata', function () {
      // Thân hàm
      setDuration(audioRef.current.duration);
    });
  }

  useEffect(() => {
    getTrackLength();
  }, []);

  const getDuration = (duration) => {
    const minutes = Math.floor(duration / 60); // Số phút
    const seconds = Math.floor(duration % 60); // Số giây

    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return formattedDuration;
  };

  const onUpdateTimer = useCallback(() => {
    setTimer(audioRef.current.currentTime);
  }, []);

  const onTogglePlayMusic = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the song if it is playing
    } else {
      audioRef.current.play(); // Play the song if it is paused
    }

    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const onReloadMusic = () => {
    audioRef.current.load();
  };

  return (
    <div className="musicSpace">
      <div className="music-player">
        <h1 className="music-name">{name}</h1>

        <p className="artist-name">{artist}</p>

        <div
          className={`disk ${isPlaying ? 'play' : ''}`}
          style={{
            backgroundImage: `url(${cover})`,
          }}
        />

        <div className="song-slider">
          <input
            type="range"
            // min="1"
            max={duration}
            value={timer}
            className="slider"
            id="myRange"
            onInput={onChangeSlider}
          />
          <span className="current-time">{getDuration(timer)}</span>
          <span className="song-duration">{getDuration(duration)}</span>
        </div>

        <div className="controls">
          <button className="btn backward-btn" onClick={onPrevMusic}>
            <i className="fa-solid fa-caret-left"></i>
          </button>
          {/* Play or pause */}
          <button className="play-btn pause" onClick={onTogglePlayMusic}>
            {isPlaying ? (
              <i className="fa-solid fa-pause fa-2xl"></i>
            ) : (
              <i className="fa-solid fa-play fa-2xl"></i>
            )}
          </button>
          <button className="btn forward-btn" onClick={onNextMusic}>
            <i className="fa-solid fa-caret-right"></i>
          </button>
          <button className="btn forward-btn" onClick={onReloadMusic}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>

        <audio
          className="d-none"
          // controls
          src={src}
          id="audioPlay"
          ref={audioRef}
          onTimeUpdate={onUpdateTimer}
          onEnded={onNextMusic} // handle next song
        />
      </div>
    </div>
  );
}
