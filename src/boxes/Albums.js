import React from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../images/LOGO TH NAV.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Albums.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import album1 from '../images/album1.jpg';
import album2 from '../images/album2.jpg';
import album3 from '../images/album3.jpg';
import album4 from '../images/album4.jpg';
import album5 from '../images/album5.jpg';
import album6 from '../images/album6.jpg';
import album7 from '../images/album7.jpg';
import album8 from '../images/album8.jpg';
import album9 from '../images/album9.jpg';
import album10 from '../images/album10.jpg';
import album11 from '../images/album11.jpg';
import album12 from '../images/album12.jpg';
import album13 from '../images/album13.png';
import album14 from '../images/album14.jpg';
import album15 from '../images/album15.jpg';
import album16 from '../images/album16.jpg';
import album17 from '../images/album17.jpg';
import album18 from '../images/album18.jpg';
import album19 from '../images/album19.jpg';
import singles from '../images/singles.jpg';

function Albums() {
    const albums = [
        { name: 'Free Mix Vol', image: album1 },
        { name: 'Hob', image: album2 },
        { name: 'Enaya Bethebbak', image: album3 },
        { name: 'Ya Bent El Eh', image: album4 },
        { name: 'El Ganna Fi Beyoutna', image: album5 },
        { name: 'Aarrab Kaman', image: album6 },
        { name: 'Haeesh Hayati', image: album7 },
        { name: 'Ekhtart Sah', image: album8 },
        { name: 'Elly Gai Ahla', image: album9 },
        { name: 'Aghany Film Omar We Salma 3', image: album10 },
        { name: 'Bahebak Enta', image: album11 },
        { name: '180°', image: album12 },
        { name: 'Ahwak', image: album13 },
        { name: 'Omry Ebtada', image: album14 },
        { name: 'Eish Besho2ak', image: album15 },
        { name: 'Khaleek Folazy', image: album16 },
        { name: 'Bahabk', image: album17 },
        { name: 'Aishangy', image: album18 },
        { name: 'Hormone ElSaada', image: album19 },
        { name: 'Singles', image: singles },
    ];

    return (
        <div className="Albums-page">
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


            {/* Albums Section */}
            <div className="container mt-5">
                <div className="row">
                    {albums.reverse().map((album, index) => (
                        <div className="col-md-2 col-sm-4 mb-4" key={index}>
                            <div className="album-box">
                                <img src={album.image} className="album-image" alt={album.name} />
                                <div className="album-overlay">
                                    {album.name === '180°' ? (
                                        <Link to="/albums/180/meenmomkan" className="album-name">{album.name}</Link>
                                    ) : (
                                        <Link to={`/albums/${album.name.replace(/\s+/g, '').toLowerCase()}`} className="album-name">{album.name}</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Albums;