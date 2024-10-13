import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../../../images/LOGO TH NAV.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ahwak.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import albumCover from './images/album_cover.png';
import song1 from './images/song1.png';
import song2 from './images/song2.jpg';
import song3 from './images/song3.jpg';
import song1Audio from './song1.mp3';
import song2Audio from './song2.mp3';
import song3Audio from './song3.mp3';


function Ahwak() {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef(null);

    const songs = useMemo(() => [
        { name: 'Kol Haga Bena', image: song1, audio: song1Audio },
        { name: 'Kol Haga Bena (live )', image: song2, audio: song2Audio },
        { name: 'Ha2olk Kelma', image: song3, audio: song3Audio },
    ], []);

    const playSong = useCallback((song) => {
        if (audioRef.current) {
            audioRef.current.pause();
        }

        if (currentSong && currentSong.name === song.name) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        } else {
            const newAudio = new Audio(song.audio);
            audioRef.current = newAudio;
            newAudio.play();
            setCurrentSong(song);
            setIsPlaying(true);
        }
    }, [currentSong, isPlaying]);

    const playNextSong = useCallback(() => {
        const currentIndex = songs.findIndex(s => s.name === currentSong?.name);
        const nextIndex = (currentIndex + 1) % songs.length;
        playSong(songs[nextIndex]);
    }, [currentSong, songs, playSong]);

    const playPreviousSong = useCallback(() => {
        const currentIndex = songs.findIndex(s => s.name === currentSong?.name);
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        playSong(songs[prevIndex]);
    }, [currentSong, songs, playSong]);

    useEffect(() => {
        const currentAudio = audioRef.current;

        if (currentAudio) {
            currentAudio.ontimeupdate = () => setCurrentTime(currentAudio.currentTime);
            currentAudio.onloadedmetadata = () => setDuration(currentAudio.duration);
            currentAudio.onended = () => playNextSong();

            // Cleanup function
            return () => {
                currentAudio.ontimeupdate = null;
                currentAudio.onloadedmetadata = null;
                currentAudio.onended = null;
            };
        }
    }, [currentSong, playNextSong]);


    const handleTimeChange = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const toggleExpand = () => {
        setIsExpanded(true); // Ensure box expands when the bar is clicked
    };

    const closeBox = (e) => {
        e.stopPropagation();  // Prevent event bubbling
        setIsExpanded(false);
    };

    return (
        <div className="Ahwak-page">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logoNav} alt="Logo TH NAV" style={{ width: '170px', height: 'auto' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: '#333', fontWeight: '400', padding: '8px 16px' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: '#333', fontWeight: '400', padding: '8px 16px' }}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" style={{ color: '#333', fontWeight: '400', padding: '8px 16px' }}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Album Section */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="album-box-1">
                            <img src={albumCover} alt="Hormone ElSaada Album" className="album-cover" />
                            <h2>Ahwak</h2>
                        </div>

                        {/* Songs List */}
                        <div className="mt-4 song-list-container">
                            {songs.map((song, index) => (
                                <div className="song-box d-flex align-items-center mb-3" key={index} style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                                    <img
                                        src={song.image}
                                        alt={song.name}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            marginRight: '20px',
                                            borderRadius: '15px', /* تغيير هنا لعمل تقويس */
                                            objectFit: 'cover' /* تأكد من أن الصورة تظهر كاملة */
                                        }}
                                    />
                                    <span style={{ flex: '1', fontSize: '18px', color: '#fff' }}>{song.name}</span>
                                    <button className="btn btn-primary" onClick={() => playSong(song)}>
                                        {currentSong && currentSong.name === song.name && isPlaying ? (
                                            <i className="fas fa-pause"></i>
                                        ) : (
                                            <i className="fas fa-play"></i>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>

            {/* Bottom Player Bar */}
            {currentSong && !isExpanded && ( // Hide bar when expanded
                <div className="bottom-player" onClick={toggleExpand}>
                    <div className="compact-bar">
                        <img src={currentSong.image} alt={currentSong.name} className="song-image" />
                        <span className="song-title">{currentSong.name}</span>
                        <button className="play-icon" onClick={(e) => { e.stopPropagation(); playSong(currentSong); }}>
                            {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                        </button>
                    </div>
                </div>
            )}

            {/* Expanded Player */}
            {isExpanded && currentSong && (
                <div className="expanded-player" onClick={closeBox}>
                    <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-icon" onClick={closeBox}>✖</button>
                        <img src={currentSong.image} alt={currentSong.name} className="expanded-image" />
                        <h3 className="expanded-title">{currentSong.name}</h3>
                        <div className="time-controls">
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                value={currentTime}
                                onChange={handleTimeChange}
                            />
                            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                        </div>
                        <div className="control-buttons">
                            <button className="btn btn-secondary prev-button" onClick={playPreviousSong}>
                                <i className="fas fa-backward"></i>
                            </button>
                            <button className="btn btn-primary play-button" onClick={() => playSong(currentSong)}>
                                {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                            </button>
                            <button className="btn btn-secondary next-button" onClick={playNextSong}>
                                <i className="fas fa-forward"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <audio ref={audioRef} />
        </div>
    );
}

export default Ahwak;
