import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../images/LOGO TH NAV.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Series.css'; // Assuming you have a separate CSS file for Series page
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import images
import farqTawqeetImage from '../boxes/Series/farq_tawqeet.jpg';
import adamImage from '../boxes/Series/adam.jpg';

function Series() {
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [selectedEpisodeLink, setSelectedEpisodeLink] = useState(''); // To track the YouTube link of the selected episode

    const episodes = Array.from({ length: 30 }, (_, i) => `الحلقة ${i + 1}`); // Arabic episode names

    // Links for episodes (replace these with real YouTube links)
    const episodeLinks = {
        'فرق توقيت': [
            'https://www.youtube.com/embed/F3atsAPmYIw',
            'https://www.youtube.com/embed/9k8jpHB0BnY',
            'https://www.youtube.com/embed/CgbvgO0-3Qc',
            'https://www.youtube.com/embed/JDwFpTqDYw8',
            'https://www.youtube.com/embed/FxIOuD3Tdjo',
            'https://www.youtube.com/embed/C3bP6sV5Q_A',
            'https://www.youtube.com/embed/OmgwnpUiEeU',
            'https://www.youtube.com/embed/mOkNXgnK8ts',
            'https://www.youtube.com/embed/ouXUkY2S-NY',
            'https://www.youtube.com/embed/qPdWtVY3EoY',
            'https://www.youtube.com/embed/mmgOpSNhI5c',
            'https://www.youtube.com/embed/hesnfJspK1A',
            'https://www.youtube.com/embed/hywel1wHAuE',
            'https://www.youtube.com/embed/cfX77jEL4wI',
            'https://www.youtube.com/embed/cEyIMFIliD8',
            'https://www.youtube.com/embed/7P23RthhhyQ',
            'https://www.youtube.com/embed/UUSVBJ5nTpQ',
            'https://www.youtube.com/embed/-1qpYPKYau4',
            'https://www.youtube.com/embed/YIzkibbDD78',
            'https://www.youtube.com/embed/02tA_3X1cKY',
            'https://www.youtube.com/embed/UcXcbiBApa4',
            'https://www.youtube.com/embed/L0ISwO9kI4w',
            'https://www.youtube.com/embed/9OgqFrxaXew',
            'https://www.youtube.com/embed/cYm82LutVoY',
            'https://www.youtube.com/embed/kB2oe3zMlro',
            'https://www.youtube.com/embed/SyYIjvdQkEo',
            'https://www.youtube.com/embed/O-YU2TZnxbs',
            'https://www.youtube.com/embed/Tz89zCe_6Bo',
            'https://www.youtube.com/embed/l346vq6D_Wk',
            'https://www.youtube.com/embed/5tKP03GmWGU',
            // Add all 30 episode links here for Farq Tawqeet
        ],
        'آدم': [
            'https://www.youtube.com/embed/VuFkspNkdOY',
            'https://www.youtube.com/embed/YYoFf_qYX0I',
            'https://www.youtube.com/embed/SkVk9afno_Y',
            'https://www.youtube.com/embed/jsBVPA8XLjk',
            'https://www.youtube.com/embed/DzQxtyMY2ko',
            'https://www.youtube.com/embed/GDzMLCTYuPA',
            'https://www.youtube.com/embed/0t6Jn_W7Z3c',
            'https://www.youtube.com/embed/fGJ4OnnX0jU',
            'https://www.youtube.com/embed/nGq1KNtRqaA',
            'https://www.youtube.com/embed/WFTb1IAaWCg',
            'https://www.youtube.com/embed/x0TrmKqLgVI',
            'https://www.youtube.com/embed/nNP0dF_4fDk',
            'https://www.youtube.com/embed/hplqoQ685qo',
            'https://www.youtube.com/embed/R9805q-2Vjw',
            'https://www.youtube.com/embed/R9805q-2Vjw',
            'https://www.youtube.com/embed/x-86w6NlQBU',
            'https://www.youtube.com/embed/SfzpbHjUTsc',
            'https://www.youtube.com/embed/BTvb6yrtGFk',
            'https://www.youtube.com/embed/tCrQW8oi_T8',
            'https://www.youtube.com/embed/A0NJiTkLEJY',
            'https://www.youtube.com/embed/rEtL5wDiB3Y',
            'https://www.youtube.com/embed/d52NjAQAKIw',
            'https://www.youtube.com/embed/fweuvSCphQo',
            'https://www.youtube.com/embed/EKKOUqEDF6M',
            'https://www.youtube.com/embed/b1GoyGoy1H4',
            'https://www.youtube.com/embed/M7KN1J5DJhU',
            'https://www.youtube.com/embed/BHOh2ypnois',
            'https://www.youtube.com/embed/hkQDgNcDoyY',
            'https://www.youtube.com/embed/Zpo5rrLJKrM',
            'https://www.youtube.com/embed/_qSOIr1RLzg',
            // Add all 30 episode links here for Adam
        ]
    };

    const renderEpisodes = (seriesName) => (
        <div className="episodes mt-3">
            <h4>حلقات {seriesName}</h4>
            <div className="row" style={{ direction: 'rtl' }}>
                {episodes.map((episode, index) => (
                    <div key={index} className="col-6 col-md-2 mb-2"> {/* Responsive layout */}
                        <button
                            className="btn btn-outline-primary w-100"
                            onClick={() => playEpisode(seriesName, index + 1)}
                        >
                            {episode}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    const playEpisode = (seriesName, episodeNumber) => {
        const videoLink = episodeLinks[seriesName][episodeNumber - 1];
        setSelectedEpisodeLink(videoLink); // Set the selected video link
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    };

    return (
        <div className="Series-page" style={{ direction: 'rtl' }}> {/* Entire page RTL */}
            {/* Navbar */}
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', direction: 'ltr' }} // Navbar in LTR
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logoNav} alt="Logo TH NAV" style={{ width: '170px', height: 'auto' }} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto" style={{ direction: 'ltr' }}> {/* Navbar items in LTR */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: '#333', fontWeight: '400', padding: '8px 16px' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: '#333', fontWeight: '400', padding: '8px 16px' }}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" style={{ color: '#333', fontWeight: '400', padding: '8px 16px' }}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Video Player - Only show if a video is selected */}
            {selectedEpisodeLink && (
                <div className="container mt-3">
                    <iframe
                        className="custom-video-player"  // Add a unique class here
                        width="100%"
                        height="auto"
                        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        src={selectedEpisodeLink}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Series Episode"
                    ></iframe>
                </div>
            )}

            {/* Series Section */}
            <div className="container mt-5">
                {/* Series Boxes */}
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div
                            className="series-box text-center"
                            onClick={() => setSelectedSeries(selectedSeries === 'فرق توقيت' ? null : 'فرق توقيت')}
                            style={{
                                cursor: 'pointer',
                                padding: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '10px',
                                backgroundColor: '#fff'
                            }}
                        >
                            <img
                                src={farqTawqeetImage}
                                alt="فرق توقيت"
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <h3 className="mt-2">فــــرق توقــــيت</h3>
                        </div>

                        {/* Show Episodes under the first series box */}
                        {selectedSeries === 'فرق توقيت' && renderEpisodes('فرق توقيت')}
                    </div>

                    <div className="col-md-6 mb-4">
                        <div
                            className="series-box text-center"
                            onClick={() => setSelectedSeries(selectedSeries === 'آدم' ? null : 'آدم')}
                            style={{
                                cursor: 'pointer',
                                padding: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '10px',
                                backgroundColor: '#fff'
                            }}
                        >
                            <img
                                src={adamImage}
                                alt="آدم"
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <h3 className="mt-2">آدم</h3>
                        </div>

                        {/* Show Episodes under the second series box */}
                        {selectedSeries === 'آدم' && renderEpisodes('آدم')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Series;
