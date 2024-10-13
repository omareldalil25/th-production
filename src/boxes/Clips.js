import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../images/LOGO TH NAV.png';
import './Clips.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import clip1Image from '../boxes/Clips/images/Clip1.jpg';
import clip2Image from '../boxes/Clips/images/Clip2.jpg';  // صورة للبوكس الثاني
import clip3Image from '../boxes/Clips/images/Clip3.jpg';  // صورة للبوكس الثاني
import clip4Image from '../boxes/Clips/images/Clip4.jpg';  // صورة للبوكس الثاني
import clip5Image from '../boxes/Clips/images/Clip5.jpg';  // صورة للبوكس الثاني
import clip6Image from '../boxes/Clips/images/Clip6.jpeg';  // صورة للبوكس الثاني
import clip7Image from '../boxes/Clips/images/Clip7.jpg';  // صورة للبوكس الثاني
import clip8Image from '../boxes/Clips/images/Clip8.jpg';  // صورة للبوكس الثاني
import clip9Image from '../boxes/Clips/images/Clip9.jpg';  // صورة للبوكس الثاني
import clip10Image from '../boxes/Clips/images/Clip10.jpg';  // صورة للبوكس الثاني
import clip11Image from '../boxes/Clips/images/Clip11.jpg';  // صورة للبوكس الثاني
import clip12Image from '../boxes/Clips/images/Clip12.jpg';  // صورة للبوكس الثاني
import clip13Image from '../boxes/Clips/images/Clip13.jpg';  // صورة للبوكس الثاني
import clip14Image from '../boxes/Clips/images/Clip14.jpg';  // صورة للبوكس الثاني
import clip15Image from '../boxes/Clips/images/Clip15.jpg';  // صورة للبوكس الثاني
import clip16Image from '../boxes/Clips/images/Clip16.jpg';  // صورة للبوكس الثاني
import clip17Image from '../boxes/Clips/images/Clip17.jpg';  // صورة للبوكس الثاني
import clip18Image from '../boxes/Clips/images/Clip18.jpeg';  // صورة للبوكس الثاني
import clip19Image from '../boxes/Clips/images/Clip19.jpeg';  // صورة للبوكس الثاني
import clip20Image from '../boxes/Clips/images/Clip20.jpg';  // صورة للبوكس الثاني
import clip21Image from '../boxes/Clips/images/Clip21.jpg';  // صورة للبوكس الثاني
import clip22Image from '../boxes/Clips/images/Clip22.jpg';  // صورة للبوكس الثاني
import clip23Image from '../boxes/Clips/images/Clip23.jpg';  // صورة للبوكس الثاني
import clip24Image from '../boxes/Clips/images/Clip24.jpg';  // صورة للبوكس الثاني
import clip25Image from '../boxes/Clips/images/Clip25.jpg';  // صورة للبوكس الثاني
import clip26Image from '../boxes/Clips/images/Clip26.jpg';  // صورة للبوكس الثاني
import clip27Image from '../boxes/Clips/images/Clip27.jpg';  // صورة للبوكس الثاني
import clip28Image from '../boxes/Clips/images/Clip28.jpg';  // صورة للبوكس الثاني
import clip29Image from '../boxes/Clips/images/Clip29.jpg';  // صورة للبوكس الثاني
import clip30Image from '../boxes/Clips/images/Clip30.jpeg';  // صورة للبوكس الثاني
import clip31Image from '../boxes/Clips/images/Clip31.jpg';  // صورة للبوكس الثاني
import clip32Image from '../boxes/Clips/images/Clip32.jpg';  // صورة للبوكس الثاني
import clip33Image from '../boxes/Clips/images/Clip33.jpg';  // صورة للبوكس الثاني
import clip34Image from '../boxes/Clips/images/Clip34.jpg';  // صورة للبوكس الثاني
import clip35Image from '../boxes/Clips/images/Clip35.jpg';  // صورة للبوكس الثاني
import clip36Image from '../boxes/Clips/images/Clip36.jpg';  // صورة للبوكس الثاني
import clip37Image from '../boxes/Clips/images/Clip37.jpg';  // صورة للبوكس الثاني
import clip38Image from '../boxes/Clips/images/Clip38.jpg';  // صورة للبوكس الثاني
import clip39Image from '../boxes/Clips/images/Clip39.jpg';  // صورة للبوكس الثاني
import clip40Image from '../boxes/Clips/images/Clip40.jpg';  // صورة للبوكس الثاني
import clip41Image from '../boxes/Clips/images/Clip41.jpg';  // صورة للبوكس الثاني
import clip42Image from '../boxes/Clips/images/Clip42.jpg';  // صورة للبوكس الثاني
import clip43Image from '../boxes/Clips/images/Clip43.jpg';  // صورة للبوكس الثاني
import clip44Image from '../boxes/Clips/images/Clip44.jpg';  // صورة للبوكس الثاني
import clip45Image from '../boxes/Clips/images/Clip45.jpg';  // صورة للبوكس الثاني
import clip46Image from '../boxes/Clips/images/Clip46.jpeg';  // صورة للبوكس الثاني
import clip47Image from '../boxes/Clips/images/Clip47.png';  // صورة للبوكس الثاني
import clip48Image from '../boxes/Clips/images/Clip48.jpg';  // صورة للبوكس الثاني
import clip49Image from '../boxes/Clips/images/Clip49.jpg';  // صورة للبوكس الثاني
import clip50Image from '../boxes/Clips/images/Clip50.jpg';  // صورة للبوكس الثاني
import clip51Image from '../boxes/Clips/images/Clip51.jpg';  // صورة للبوكس الثاني
import clip52Image from '../boxes/Clips/images/Clip52.jpg';  // صورة للبوكس الثاني
import clip53Image from '../boxes/Clips/images/Clip53.jpg';  // صورة للبوكس الثاني
import clip54Image from '../boxes/Clips/images/Clip54.jpg';  // صورة للبوكس الثاني
import clip55Image from '../boxes/Clips/images/Clip55.jpg';  // صورة للبوكس الثاني
import clip56Image from '../boxes/Clips/images/Clip56.jpg';  // صورة للبوكس الثاني
import clip57Image from '../boxes/Clips/images/Clip57.jpg';  // صورة للبوكس الثاني
import clip58Image from '../boxes/Clips/images/Clip58.jpg';  // صورة للبوكس الثاني
import clip59Image from '../boxes/Clips/images/Clip59.jpg';  // صورة للبوكس الثاني
import clip60Image from '../boxes/Clips/images/Clip60.jpg';  // صورة للبوكس الثاني

function Clips() {
    const [currentVideo, setCurrentVideo] = useState(null);

    const clips = [
        { name: 'Kol Youm Ahbo Tany', videoUrl: 'https://www.youtube.com/embed/uIYegipbD8Q', image: clip1Image },
        { name: 'Maalmen', videoUrl: 'https://www.youtube.com/embed/SJkO0MdbSJU', image: clip2Image },  // تم تعديل الرابط هنا
        { name: 'Ya Nahar Abyad', videoUrl: 'https://www.youtube.com/embed/289ha5ZcGAI', image: clip3Image },  // تم تعديل الرابط هنا
        { name: 'Gamdeen Gamdeen', videoUrl: 'https://www.youtube.com/embed/FmXwxHPJceo', image: clip4Image },  // تم تعديل الرابط هنا
        { name: 'M3a El salama ya Madrasty', videoUrl: 'https://www.youtube.com/embed/pCaKCAy9-8o', image: clip5Image },  // تم تعديل الرابط هنا
        { name: 'Adha', videoUrl: 'https://www.youtube.com/embed/qjEyWr1h_IA', image: clip6Image },  // تم تعديل الرابط هنا
        { name: '30 Hayah', videoUrl: 'https://www.youtube.com/embed/_BY9ockOcs4', image: clip7Image },  // تم تعديل الرابط هنا
        { name: 'Mawdoa Rogoana', videoUrl: 'https://www.youtube.com/embed/D0VgXyl3lSA', image: clip8Image },  // تم تعديل الرابط هنا
        { name: 'Wala Yehmek', videoUrl: 'https://www.youtube.com/embed/9VlNLWMNeyc', image: clip9Image },  // تم تعديل الرابط هنا
        { name: 'Maalish', videoUrl: 'https://www.youtube.com/embed/lKI6JtQ_eME', image: clip10Image },  // تم تعديل الرابط هنا
        { name: 'Mawahashtekish', videoUrl: 'https://www.youtube.com/embed/N9lxl9O4aAE', image: clip11Image },  // تم تعديل الرابط هنا
        { name: 'Hawwa', videoUrl: 'https://www.youtube.com/embed/hBDRn5JeG8I', image: clip12Image },  // تم تعديل الرابط هنا
        { name: 'Msh Hatghyar 3shn Had', videoUrl: 'https://www.youtube.com/embed/j1O8VPaKOyU', image: clip13Image },  // تم تعديل الرابط هنا
        { name: 'Tag', videoUrl: 'https://www.youtube.com/embed/ogvMKAgGnDY', image: clip14Image },  // تم تعديل الرابط هنا
        { name: 'Hormone ElSaada', videoUrl: 'https://www.youtube.com/embed/bav-oRRNU94', image: clip15Image },  // تم تعديل الرابط هنا
        { name: 'Medly Of Love Songs', videoUrl: 'https://www.youtube.com/embed/0kt6Vc-tmpU', image: clip16Image },  // تم تعديل الرابط هنا
        { name: 'Ramadan Kareem', videoUrl: 'https://www.youtube.com/embed/agvQiThRLrQ', image: clip17Image },  // تم تعديل الرابط هنا
        { name: 'Beinak W Beiny (Cover)', videoUrl: 'https://www.youtube.com/embed/ghkaUl-XlxU', image: clip18Image },  // تم تعديل الرابط هنا
        { name: 'Nafs El Hanen (Cover)', videoUrl: 'https://www.youtube.com/embed/Dyydm9U-pUA', image: clip19Image },  // تم تعديل الرابط هنا
        { name: 'Hatgawzek', videoUrl: 'https://www.youtube.com/embed/mcH8Vv5G8Kk', image: clip20Image },  // تم تعديل الرابط هنا
        { name: 'Haytna', videoUrl: 'https://www.youtube.com/embed/P4GuAVz1aUE', image: clip21Image },  // تم تعديل الرابط هنا
        { name: 'Enta Ekhtyar', videoUrl: 'https://www.youtube.com/embed/T0AA8GvHzhY', image: clip22Image },  // تم تعديل الرابط هنا
        { name: 'Habitha Ya Nas', videoUrl: 'https://www.youtube.com/embed/yAY248_mrSE', image: clip23Image },  // تم تعديل الرابط هنا
        { name: 'Wenta Be3eed', videoUrl: 'https://www.youtube.com/embed/4ezHyDEEPOU', image: clip24Image },  // تم تعديل الرابط هنا
        { name: 'Hadalaany', videoUrl: 'https://www.youtube.com/embed/Nd683xzf728', image: clip25Image },  // تم تعديل الرابط هنا
        { name: 'Ya Farha', videoUrl: 'https://www.youtube.com/embed/ulYy8d9htxU', image: clip26Image },  // تم تعديل الرابط هنا
        { name: 'Saaba', videoUrl: 'https://www.youtube.com/embed/16aKiEdRsoQ', image: clip27Image },  // تم تعديل الرابط هنا
        { name: 'Bahebek', videoUrl: 'https://www.youtube.com/embed/lv_--dcoEdg', image: clip28Image },  // تم تعديل الرابط هنا
        { name: 'Mesh Tmsal', videoUrl: 'https://www.youtube.com/embed/8vZfm9zjp3E', image: clip29Image },  // تم تعديل الرابط هنا
        { name: 'Wa enta Maayia ( Remix )', videoUrl: 'https://www.youtube.com/embed/DZOFENUxH3I', image: clip30Image },  // تم تعديل الرابط هنا
        { name: 'Helw El Makan', videoUrl: 'https://www.youtube.com/embed/Tl1WS_PvsF4', image: clip31Image },  // تم تعديل الرابط هنا
        { name: 'Nasseeny Leih', videoUrl: 'https://www.youtube.com/embed/ou-7AboPoXE', image: clip32Image },  // تم تعديل الرابط هنا
        { name: 'Hekayat El Hob', videoUrl: 'https://www.youtube.com/embed/lR51wgK1dnY', image: clip33Image },  // تم تعديل الرابط هنا
        { name: 'Taman Ekhteyar', videoUrl: 'https://www.youtube.com/embed/rOTqRPIMK58', image: clip34Image },  // تم تعديل الرابط هنا
        { name: 'We Akheeran', videoUrl: 'https://www.youtube.com/embed/17dJ0TUgqGg', image: clip44Image },  // تم تعديل الرابط هنا
        { name: 'Helm Seneen', videoUrl: 'https://www.youtube.com/embed/FmyQtbslamM', image: clip35Image },  // تم تعديل الرابط هنا
        { name: 'Kabelteeny', videoUrl: 'https://www.youtube.com/embed/UEA0k7vRrv4', image: clip36Image },  // تم تعديل الرابط هنا
        { name: 'Wala Youm Men Ayamo', videoUrl: 'https://www.youtube.com/embed/_waH4vD-RS4', image: clip37Image },  // تم تعديل الرابط هنا
        { name: 'Kefayak Aazar', videoUrl: 'https://www.youtube.com/embed/sfCy1JhCwWg', image: clip38Image },  // تم تعديل الرابط هنا
        { name: 'Lolak Habiby', videoUrl: 'https://www.youtube.com/embed/-QWjmNEUJqM', image: clip39Image },  // تم تعديل الرابط هنا
        { name: 'Ward Senaaey', videoUrl: 'https://www.youtube.com/embed/SkYETC_e9EA', image: clip40Image },  // تم تعديل الرابط هنا
        { name: 'Eish Beshoak', videoUrl: 'https://www.youtube.com/embed/ncyVV9bwmdU', image: clip41Image },  // تم تعديل الرابط هنا
        { name: '100 Wesh', videoUrl: 'https://www.youtube.com/embed/xJom7RUo_dQ', image: clip42Image },  // تم تعديل الرابط هنا
        { name: 'الله شـاهـد', videoUrl: 'https://www.youtube.com/embed/CJYsqga607I', image: clip43Image },  // تم تعديل الرابط هنا
        { name: 'Ya Mali Aaeny', videoUrl: 'https://www.youtube.com/embed/jXVFJRQgpDs', image: clip45Image },  // تم تعديل الرابط هنا
        { name: 'Wara El Shababek', videoUrl: 'https://www.youtube.com/embed/RkmJwLALysM', image: clip46Image },  // تم تعديل الرابط هنا
        { name: 'Kol Haga Bena', videoUrl: 'https://www.youtube.com/embed/LSMeZRIQr1Q', image: clip47Image },  // تم تعديل الرابط هنا
        { name: 'Ha2olk Kelma', videoUrl: 'https://www.youtube.com/embed/qT3d6I6pezA', image: clip48Image },  // تم تعديل الرابط هنا
        { name: 'Si Al Sayed', videoUrl: 'https://www.youtube.com/embed/-Urjas5Nt0I', image: clip49Image },  // تم تعديل الرابط هنا
        { name: 'حبيبي يا رسول الله', videoUrl: 'https://www.youtube.com/embed/rtyTXhVyShk', image: clip50Image },  // تم تعديل الرابط هنا
        { name: 'Nour Einy', videoUrl: 'https://www.youtube.com/embed/xVU1hOGh6yE', image: clip51Image },  // تم تعديل الرابط هنا
        { name: 'عيــونه دار', videoUrl: 'https://www.youtube.com/embed/ZMFnfNs38nE', image: clip52Image },  // تم تعديل الرابط هنا
        { name: 'مبنــساش', videoUrl: 'https://www.youtube.com/embed/hggpcuH7RJc', image: clip53Image },  // تم تعديل الرابط هنا
        { name: 'Ya Ana Ya Mafish', videoUrl: 'https://www.youtube.com/embed/MLCgTIPnyGc', image: clip54Image },  // تم تعديل الرابط هنا
        { name: 'Soutek', videoUrl: 'https://www.youtube.com/embed/NdmY_2fVf9E', image: clip55Image },  // تم تعديل الرابط هنا
        { name: 'Ana Wala Aref', videoUrl: 'https://www.youtube.com/embed/Y3xf1HI1OCU', image: clip56Image },  // تم تعديل الرابط هنا
        { name: 'Dehktha Mabethazarsh', videoUrl: 'https://www.youtube.com/embed/_HYnC9-eO3I', image: clip57Image },  // تم تعديل الرابط هنا
        { name: 'Shofy Ba2a', videoUrl: 'https://www.youtube.com/embed/TfrLOgKIy2o', image: clip58Image },  // تم تعديل الرابط هنا
        { name: 'Heya De', videoUrl: 'https://www.youtube.com/embed/YCuTx0os7jw', image: clip59Image },  // تم تعديل الرابط هنا
        { name: 'Erga3ly', videoUrl: 'https://www.youtube.com/embed/or8CAs2y7jY', image: clip60Image },  // تم تعديل الرابط هنا
        // أضف المزيد من الفيديوهات والصور هنا إذا أردت
    ];

    const handleClipClick = (videoUrl) => {
        setCurrentVideo(videoUrl);
    };

    return (
        <div className="Clips-page">
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

            {/* عرض الفيديو الحالي */}
            {currentVideo && (
                <div className="video-player">
                    <iframe
                        src={currentVideo}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="YouTube Video Player"
                    />
                </div>
            )}


            {/* البوكسات */}
            <div className="container mt-5">
                <div className="row">
                    {clips.map((clip, index) => (
                        <div className="col-md-2 col-sm-4 mb-4" key={index}>
                            <div
                                className="clip-box"
                                style={{ backgroundImage: `url(${clip.image})` }}
                                onClick={() => handleClipClick(clip.videoUrl)}
                            >
                                <div className="clip-overlay">
                                    <span className="clip-name">{clip.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Clips;
