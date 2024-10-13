import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../../../images/LOGO TH NAV.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Singles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import albumCover from './images/album_cover.jpg';
import song1 from './images/song1.jpg';
import song2 from './images/song2.jpg';
import song3 from './images/song3.jpg';
import song4 from './images/song4.jpg';
import song5 from './images/song5.jpg';
import song6 from './images/song6.jpeg';
import song7 from './images/song7.jpeg';
import song8 from './images/song8.jpg';
import song9 from './images/song9.jpg';
import song10 from './images/song10.jpg';
import song11 from './images/song11.jpg';
import song12 from './images/song12.jpg';
import song13 from './images/song13.jpg';
import song14 from './images/song14.jpg';
import song15 from './images/song15.jpg';
import song16 from './images/song16.jpeg';
import song17 from './images/song17.jpg';
import song18 from './images/song18.jpg';
import song19 from './images/song19.jpg';
import song20 from './images/song20.jpeg';
import song21 from './images/song21.jpeg';
import song22 from './images/song22.jpeg';
import song23 from './images/song23.jpeg';
import song24 from './images/song24.jpg';
import song25 from './images/song25.jpeg';
import song26 from './images/song26.jpg';
import song27 from './images/song27.jpg';
import song28 from './images/song28.jpg';
import song29 from './images/song29.jpg';
import song30 from './images/song30.jpg';
import song31 from './images/song31.jpg';
import song32 from './images/song32.jpg';
import song33 from './images/song33.jpg';
import song34 from './images/song34.jpg';
import song35 from './images/song35.jpg';
import song36 from './images/song36.jpg';
import song37 from './images/song37.jpg';
import song38 from './images/song38.jpg';
import song39 from './images/song39.jpg';
import song40 from './images/song40.jpg';
import song41 from './images/song41.jpg';
import song42 from './images/song42.jpeg';
import song43 from './images/song43.jpeg';
import song44 from './images/song44.jpeg';
import song45 from './images/song45.jpeg';
import song46 from './images/song46.jpeg';
import song47 from './images/song47.jpeg';
import song48 from './images/song48.jpg';
import song49 from './images/song49.png';
import song50 from './images/song50.jpg';
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
import song15Audio from './song15.mp3';
import song16Audio from './song16.mp3';
import song17Audio from './song17.mp3';
import song18Audio from './song18.mp3';
import song19Audio from './song19.mp3';
import song20Audio from './song20.mp3';
import song21Audio from './song21.mp3';
import song22Audio from './song22.mp3';
import song23Audio from './song23.mp3';
import song24Audio from './song24.mp3';
import song25Audio from './song25.mp3';
import song26Audio from './song26.mp3';
import song27Audio from './song27.mp3';
import song28Audio from './song28.mp3';
import song29Audio from './song29.mp3';
import song30Audio from './song30.mp3';
import song31Audio from './song31.mp3';
import song32Audio from './song32.mp3';
import song33Audio from './song33.mp3';
import song34Audio from './song34.mp3';
import song35Audio from './song35.mp3';
import song36Audio from './song36.mp3';
import song37Audio from './song37.mp3';
import song38Audio from './song38.mp3';
import song39Audio from './song39.mp3';
import song40Audio from './song40.mp3';
import song41Audio from './song41.mp3';
import song42Audio from './song42.mp3';
import song43Audio from './song43.mp3';
import song44Audio from './song44.mp3';
import song45Audio from './song45.mp3';
import song46Audio from './song46.mp3';
import song47Audio from './song47.mp3';
import song48Audio from './song48.mp3';
import song49Audio from './song49.mp3';
import song50Audio from './song50.mp3';


function Singles() {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef(null);

    const songs = useMemo(() => [
        { name: 'Kol Youm Ahbo Tany', image: song1, audio: song1Audio },
        { name: 'Maalmen', image: song2, audio: song2Audio },
        { name: 'Ya Nahar Abyad', image: song3, audio: song3Audio },
        { name: 'Gamdeen Gamdeen', image: song4, audio: song4Audio },
        { name: 'M3a El salama ya Madrasty', image: song5, audio: song5Audio },
        { name: 'Adha', image: song6, audio: song6Audio },
        { name: 'دعــاء يـا الله', image: song7, audio: song7Audio },
        { name: 'Ramadan Kareem', image: song8, audio: song8Audio },
        { name: 'Saaba', image: song9, audio: song9Audio },
        { name: 'Bahebek', image: song10, audio: song10Audio },
        { name: 'Mesh Tmsal', image: song11, audio: song11Audio },
        { name: 'Nafs El Hanen (Cover)', image: song46, audio: song46Audio },
        { name: 'Beinak W Beiny (Cover)', image: song47, audio: song47Audio },
        { name: 'Kawkab Tany', image: song12, audio: song12Audio },
        { name: 'Forsa Gedida', image: song13, audio: song13Audio },
        { name: 'Erfaa Eidak', image: song14, audio: song14Audio },
        { name: 'Terg3lena Bel Salama', image: song15, audio: song15Audio },
        { name: 'Wa enta Maayia ( Remix )', image: song16, audio: song16Audio },
        { name: 'El Lahza El 7elwa', image: song17, audio: song17Audio },
        { name: 'Ehna Geel Gedid', image: song18, audio: song18Audio },
        { name: 'Fark Kebir', image: song19, audio: song19Audio },
        { name: 'Rehlet El Hayah', image: song20, audio: song20Audio },
        { name: 'Wara El Shababek', image: song21, audio: song21Audio },
        { name: 'We Ba3din', image: song22, audio: song22Audio },
        { name: 'Set El Habayeb', image: song23, audio: song23Audio },
        { name: 'Ohdonny Awy', image: song24, audio: song24Audio },
        { name: 'Malesh baadak', image: song25, audio: song25Audio },
        { name: 'Dehktha Mabethazarsh', image: song26, audio: song26Audio },
        { name: 'Shofy Ba2a', image: song27, audio: song27Audio },
        { name: 'El Asl Masry', image: song28, audio: song28Audio },
        { name: 'Enta Aqwa', image: song29, audio: song29Audio },
        { name: 'Nesynak sa3b akeed', image: song30, audio: song30Audio },
        { name: 'عــارفــة', image: song31, audio: song31Audio },
        { name: 'Farhet Gheirak', image: song32, audio: song32Audio },
        { name: 'Aalam Gedid', image: song33, audio: song33Audio },
        { name: 'Free Max', image: song34, audio: song34Audio },
        { name: 'Leeh Talah Remix', image: song35, audio: song35Audio },
        { name: 'Ya wahsheny', image: song36, audio: song36Audio },
        { name: 'Medly Of Love Songs', image: song37, audio: song37Audio },
        { name: 'El-Taman', image: song38, audio: song38Audio },
        { name: 'Intro of Nasl El Aghrab Series', image: song39, audio: song39Audio },
        { name: 'Helw El Makan', image: song40, audio: song40Audio },
        { name: 'Ya Farha', image: song41, audio: song41Audio },
        { name: 'El Donia Film', image: song42, audio: song42Audio },
        { name: 'Ghany w sama3na', image: song43, audio: song43Audio },
        { name: 'lena hayah ba3den', image: song44, audio: song44Audio },
        { name: 'Marbotin Fe B3d', image: song45, audio: song45Audio },
        { name: 'El Mawdoo3 Feek', image: song48, audio: song48Audio },
        { name: 'Kol Haga Bena', image: song49, audio: song49Audio },
        { name: 'Ha2olk Kelma', image: song50, audio: song50Audio },
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
        <div className="Singles-page">
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
                            <h2>Singles</h2>
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

export default Singles;
