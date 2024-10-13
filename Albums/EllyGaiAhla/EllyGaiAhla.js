import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../../../images/LOGO TH NAV.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EllyGaiAhla.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import albumCover from './images/album_cover.jpg';
import song1 from './images/song1.jpg';
import song2 from './images/song2.jpg';
import song3 from './images/song3.jpg';
import song4 from './images/song4.jpg';
import song5 from './images/song5.jpg';
import song6 from './images/song6.jpg';
import song7 from './images/song7.jpg';
import song8 from './images/song8.jpg';
import song9 from './images/song9.jpg';
import song10 from './images/song10.jpg';
import song11 from './images/song11.jpg';
import song12 from './images/song12.jpg';
import song13 from './images/song13.jpg';
import song14 from './images/song14.jpg';
import song1Audio from './song1.mp3';
import song2Audio from './song2.mp3';
import song3Audio from './song3.mp3';
import song4Audio from './song4.mp3';
import song5Audio from './song5.mp3';
import song6Audio from './song6.mp3';
import song7Audio from './song7.mp3';
import song8Audio from './song8.mp3';
import song9Audio from './song9.mp3';
import song10Audio from './song10.mp3';
import song11Audio from './song11.mp3';
import song12Audio from './song12.mp3';
import song13Audio from './song13.mp3';
import song14Audio from './song14.mp3';


function EllyGaiAhla() {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef(null);

    const songs = useMemo(() => [
        { name: 'Elly Gai Ahla', image: song1, audio: song1Audio },
        { name: 'Erfet Teghayar Men Nafsaha', image: song2, audio: song2Audio },
        { name: 'Akalemha', image: song5, audio: song3Audio },
        { name: 'Dayman Maak', image: song4, audio: song4Audio },
        { name: 'Mayhonsh Aalaya', image: song3, audio: song6Audio },
        { name: 'Elly Aada Aada', image: song6, audio: song5Audio },
        { name: 'Matesaalnesh', image: song7, audio: song8Audio },
        { name: 'Kammel Lewahdak', image: song8, audio: song7Audio },
        { name: 'Agmal Hedeya', image: song9, audio: song9Audio },
        { name: 'Ertah', image: song10, audio: song10Audio },
        { name: 'Saaedny Ansak', image: song11, audio: song11Audio },
        { name: 'Kol Yom Ahebo Tani', image: song12, audio: song12Audio },
        { name: 'Wala Teswa El Donya', image: song13, audio: song13Audio },
        { name: 'Ana Masry', image: song14, audio: song14Audio },
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
        <div className="EllyGaiAhla-page">
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
                            <h2>Elly Gai Ahla</h2>
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

export default EllyGaiAhla;
