import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../images/LOGO TH NAV.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movies.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import movie1 from '../boxes/Movies/images/movie1.jpg';
import movie2 from '../boxes/Movies/images/movie2.jpg';
import movie3 from '../boxes/Movies/images/movie3.jpg';
import movie4 from '../boxes/Movies/images/movie4.jpg';
import movie5 from '../boxes/Movies/images/movie5.jpg';
import movie6 from '../boxes/Movies/images/movie6.jpg';
import movie7 from '../boxes/Movies/images/movie7.jpg';
import movie8 from '../boxes/Movies/images/movie8.jpg';
import movie9 from '../boxes/Movies/images/movie9.jpg';
import movie10 from '../boxes/Movies/images/movie10.jpg';
import movie11 from '../boxes/Movies/images/movie11.jpg';
import movie12 from '../boxes/Movies/images/movie12.jpg';
import movie13 from '../boxes/Movies/images/movie13.jpg';
import movie14 from '../boxes/Movies/images/movie14.jpg';

function Movies() {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const movies = [
        { name: 'Tag', image: movie1, video: 'https://fdewsdc.sbs/embed/y8kj48d8ot4v' },
        { name: 'Bahebek', image: movie2, video: 'https://fdewsdc.sbs/embed/8ptr0p0mtfyx' },
        { name: 'Mesh Ana', image: movie3, video: 'https://geo.dailymotion.com/player.html?video=x93u9b0' },
        { name: 'الفلــــوس', image: movie4, video: 'https://vk.com/video_ext.php?oid=848030354&id=456240595&hash=d8e363c33ffbd913' },
        { name: 'El-Badla', image: movie5, video: 'https://vk.com/video_ext.php?oid=848030354&id=456240641&hash=6730d985be37f95d' },
        { name: 'تصبحي علي خير', image: movie6, video: 'https://geo.dailymotion.com/player.html?video=x8gxvwd' },
        { name: 'Ahwak', image: movie7, video: 'https://geo.dailymotion.com/player.html?video=x7szbvv' },
        { name: 'Omar W Salma 3', image: movie8, video: 'https://www.youtube.com/embed/r2_eU44GeIg' },
        { name: 'Noor Einy', image: movie9, video: 'https://vk.com/video_ext.php?oid=848076703&id=456239409&hash=50a98cd315c3f4d5' },
        { name: 'Omar W Salma 2', image: movie10, video: 'https://geo.dailymotion.com/player.html?video=x8figma' },
        { name: 'كــابـتن هــيما', image: movie11, video: 'https://geo.dailymotion.com/player.html?video=x8glyr2' },
        { name: 'Omar W Salma 1', image: movie12, video: 'https://geo.dailymotion.com/player.html?video=x8j0q93' },
        { name: 'ســيد العـاطفي', image: movie13, video: 'https://geo.dailymotion.com/player.html?video=x961so4' },
        { name: 'حــالة حــب', image: movie14, video: 'https://geo.dailymotion.com/player.html?video=x8o539n' },
    ];

    const handleMovieClick = (videoUrl) => {
        setSelectedMovie(videoUrl);
        // Scroll to top of the page when a movie is clicked
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="Movies-page">
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

            {/* Embedded YouTube Video */}
            {selectedMovie && (
                <div className="video-container mt-5">
                    <iframe
                        src={selectedMovie}
                        frameBorder="0"
                        marginWidth="0"
                        marginHeight="0"
                        scrolling="no"
                        width="640"
                        height="360"
                        allowFullScreen
                        title="Movie Video"
                    ></iframe>
                </div>
            )}

            {/* Movies Section */}
            <div className="container mt-5">
                <div className="row">
                    {movies.map((movie, index) => (
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
                            <div className="movie-box" onClick={() => handleMovieClick(movie.video)}>
                                <img src={movie.image} className="movie-image" alt={movie.name} />
                                <div className="movie-overlay">
                                    <Link to="#" className="movie-name">{movie.name}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Movies;
