import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // استيراد Link من react-scroll
import logoNav from './images/LOGO TH NAV.png';
import logoTH from './images/LOGO TH.jpg';
import albumsImg from './images/albums.jpg';
import moviesImg from './images/movies.jpg';
import clipsImg from './images/clips.jpg';
import seriesImg from './images/series.jpg';
import eventImage1 from './images/event1.jpg';
import eventImage2 from './images/event2.jpg';
import eventImage3 from './images/event3.jpg';
import newsImage1 from './images/news1.jpg';
import newsImage2 from './images/news2.jpg';
import newsImage3 from './images/news3.jpg';
import newsImage4 from './images/news4.jpg';
import tamerImage from './images/tamer_hosny.jpg';
import awardImage from './images/tamer_awards.jpg';
import { getAuth } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Home() {
    const [greeting, setGreeting] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
            const email = currentUser.email;
            const nameBeforeAt = email.split('@')[0];
            setUsername(nameBeforeAt);
        } else {
            setUsername('Guest');
        }

        const currentTime = new Date().getHours();
        if (currentTime >= 6 && currentTime < 18) {
            setGreeting('Good Morning');
        } else {
            setGreeting('Good Night');
        }
    }, []);

    return (
        <div>
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
                                {/* استخدام ScrollLink هنا لربط "About" بقسم "About Us" */}
                                <ScrollLink className="nav-link" to="about-us" smooth={true} duration={500} style={{ color: '#333', fontWeight: '400', padding: '8px 16px' }}>About</ScrollLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" style={{ color: '#333', fontWeight: '400', padding: '8px 16px' }}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* بوكس الترحيب و بوكس الأحداث */}
            <div className="welcome-and-event-box">
                {/* بوكس الترحيب */}
                <div className="welcome-box">
                    <h2>{greeting}, <span>{username}</span></h2>
                    <p>Welcome to TH Production! We're excited to have you here.</p>
                    <div className="welcome-highlight"></div>
                </div>

                {/* بوكس آخر الأخبار */}
                <div className="latest-news-box">
                    <h2 className="section-title">Latest News</h2>
                    <div className="news-marquee">
                        <div className="news-list">
                            <div className="news-item">
                                <img src={newsImage1} alt="News 1" className="news-image" />
                                <span>Tamer Hosny's new restaurant Adam's Lounge has opened</span>
                            </div>
                            <div className="news-item">
                                <img src={newsImage2} alt="News 2" className="news-image" />
                                <span>The filming of the movie (Restart) has been completed.</span>
                            </div>
                            <div className="news-item">
                                <img src={newsImage3} alt="News 3" className="news-image" />
                                <span>The song "Kol Youm Ahebo Tani" was released from El Alamein Festival</span>
                            </div>
                            <div className="news-item">
                                <img src={newsImage4} alt="News 4" className="news-image" />
                                <span>The song "Ya Nahar Abyad" was released from El Alamein Festival</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* بوكس الأحداث */}
                <div className="event-box">
                    <h2 className="section-title">New Events</h2>
                    <div className="event-item">
                        <img src={eventImage1} alt="Event 1" className="event-image" />
                        <div className="event-details">
                            <span className="event-name">Alexandria concert in Antoniadis Garden in Smouha</span>
                            <button
                                className="event-button"
                                onClick={() => window.location.href = "https://mobile.ticketore-eg.com/event-details/tamar-hosny-fy-askndry"}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="event-item">
                        <img src={eventImage2} alt="Event 2" className="event-image" />
                        <div className="event-details">
                            <span className="event-name">Riyadh concert at Mohammed Abdo Arena</span>
                            <button className="event-button" style={{ backgroundColor: '#B22222', color: '#fff' }}>
                                Expired
                            </button>
                        </div>
                    </div>
                    <div className="event-item">
                        <img src={eventImage3} alt="Event 3" className="event-image" />
                        <div className="event-details">
                            <span className="event-name">Jeddah concert at Abbadi Al-Johar Arena</span>
                            <button className="event-button" style={{ backgroundColor: '#B22222', color: '#fff' }}>
                                Expired
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* البوكسات الأربعة */}
            <div className="boxes-container">
                <Link to="/albums" className="box">
                    <img src={albumsImg} alt="Albums" className="box-image" />
                    <div className="box-text">Albums</div>
                    <div className="box-line"></div>
                </Link>
                <Link to="/clips" className="box"> {/* البوكس الثاني */}
                    <img src={clipsImg} alt="Clips" className="box-image" />
                    <div className="box-text">Clips</div>
                    <div className="box-line"></div>
                </Link>
                <Link to="/movies" className="box"> {/* البوكس الثالث */}
                    <img src={moviesImg} alt="Movies" className="box-image" />
                    <div className="box-text">Movies</div>
                    <div className="box-line"></div>
                </Link>
                <Link to="/series" className="box"> {/* البوكس الرابع */}
                    <img src={seriesImg} alt="Series" className="box-image" />
                    <div className="box-text">Series</div>
                    <div className="box-line"></div>
                </Link>
            </div>

            {/* قسم "About Us" */}
            <div id="about-us" className="about-us-section">
                <div className="about-us-content">
                    <img src={logoTH} alt="Company Logo" className="about-logo" />
                    <div className="about-text">
                        <h2>About Us</h2>
                        <p>
                            At TH Production, we are committed to delivering the highest quality content in music, movies, series, and events. Our goal is to bring people closer to art and culture through exceptional experiences and groundbreaking productions.
                        </p>
                        <div className="manager-info">
                            <p>General Manager of the company: <strong>Hossam Hosny</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* قسم Tamer Hosny */}
            <div className="tamer-hosny-section">
                <div className="tamer-hosny-container">
                    <img src={tamerImage} alt="Tamer Hosny" className="tamer-hosny-left-image" />
                    <div className="tamer-hosny-right-text">
                        <h2>Tamer Hosny</h2>
                        <p>
                            Tamer Hosny is one of the most influential artists in the Arab world.
                            He has excelled in both music and film, making him a household name.
                            He has become one of the biggest stars in the Arab world and the world.
                        </p>
                    </div>
                </div>
            </div>

            {/* قسم الجوائز */}
            <div className="awards-section">
                <div className="awards-image-container">
                    <img src={awardImage} alt="Awards" className="awards-image" />
                    <div className="awards-overlay">
                        <div className="awards-text">
                            <h3>Awards and Achievements</h3>
                            <p>
                                Tamer Hosny has received numerous accolades, including international awards
                                like the World Music Award and Murex d'Or. His contribution to the arts is celebrated worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="contact-us-section">
                <div className="contact-us-container">
                    <div className="contact-details-box">
                        <div className="contact-header">
                            <i className="fas fa-envelope contact-icon"></i> {/* Icon next to the text */}
                            <h3>Contact Us</h3>
                        </div>
                        <div className="contact-address">
                            <h4>Our Address</h4>
                            <p>6 October, Sheikh Zayed</p>
                        </div>
                        <div className="contact-gps">
                            <iframe
                                title="Company Location on Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.827094097005!2d31.012399874466986!3d30.018706525596177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458472dd7d3b997%3A0x5f2c8c10d6c0106a!2s6th%20of%20October%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1695841207639!5m2!1sen!2seg"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="social-icons">
                            <h4>Follow Us</h4>
                            <div className="icons-container">
                                <a href="https://www.facebook.com/Tamerhosnyproduction/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/tamerhosnyproduction?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://eg.linkedin.com/company/th-production" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Footer Section */}
            <footer className="footer-section">
                <div className="footer-content">
                    <p>&copy; 2024 TH Production. All rights reserved.</p>
                    <div className="footer-divider"></div>
                    <span className="powered-text">
                        Powered by <a href="https://www.instagram.com/omar_eldalil?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="powered-link">OD Development</a>
                    </span>
                </div>
            </footer>


        </div>
    );
}

export default Home;
