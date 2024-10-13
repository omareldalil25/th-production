import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';
import { FaApple, FaMobileAlt } from 'react-icons/fa'; // استيراد الأيقونات
import logo from './images/LOGO TH.jpg';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHHM1a8Etb3VDixhQl1gg3aL70RuS5yVE",
    authDomain: "th-production-d74ba.firebaseapp.com",
    projectId: "th-production-d74ba",
    storageBucket: "th-production-d74ba.appspot.com",
    messagingSenderId: "455913437434",
    appId: "1:455913437434:web:f9b0201eb7b6e99d7ab143",
    measurementId: "G-J1LEQBDQ3N"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const appleProvider = new OAuthProvider('apple.com');

    // دالة لتسجيل الدخول بالبريد الإلكتروني وكلمة المرور
    const handleEmailLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // تسجيل الدخول ناجح
                console.log(userCredential.user);
                navigate('/home'); // توجيه المستخدم إلى صفحة جديدة
            })
            .catch((error) => {
                // التعامل مع الأخطاء
                console.error(error);
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                navigate('/home'); // توجيه المستخدم إلى صفحة جديدة
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                console.log(result.user);
                navigate('/home'); // توجيه المستخدم إلى صفحة جديدة
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleAppleLogin = () => {
        signInWithPopup(auth, appleProvider)
            .then((result) => {
                console.log(result.user);
                navigate('/home'); // توجيه المستخدم إلى صفحة جديدة
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleMobileLogin = () => {
        console.log('تسجيل الدخول باستخدام رقم الهاتف');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <img
                src={logo}
                alt="TH Production Logo"
                style={{ width: '250px', height: 'auto', marginBottom: '20px' }}
            />

            <div style={{ width: '300px' }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mb-3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control mb-3"
                />

                {/* زر Sign In */}
                <button
                    onClick={handleEmailLogin} // استخدم الدالة الجديدة هنا
                    className="btn"
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: '2px solid #818181',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '20px',
                        height: '50px',
                        marginBottom: '20px', // المسافة بين الزرين
                        width: '100%',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#818181'}
                >
                    Sign In
                </button>

                {/* زرار جوجل */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn"
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: '2px solid #818181',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderRadius: '20px',
                        height: '50px',
                        marginBottom: '10px',
                        width: '100%',
                        paddingLeft: '30px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#818181'}
                >
                    <img
                        src="https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg"
                        alt="Google Icon"
                        style={{ marginRight: '10px', width: '30px', height: '30px' }}
                    />
                    <span style={{ marginLeft: '15px' }}>Continue with Google</span>
                </button>

                {/* زرار فيسبوك */}
                <button
                    onClick={handleFacebookLogin}
                    className="btn"
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: '2px solid #818181',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderRadius: '20px',
                        height: '50px',
                        marginBottom: '10px',
                        width: '100%',
                        paddingLeft: '30px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#818181'}
                >
                    <img
                        src="https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg"
                        alt="Facebook Icon"
                        style={{ marginRight: '10px', width: '30px', height: '30px' }}
                    />
                    <span style={{ marginLeft: '15px' }}>Continue with Facebook</span>
                </button>

                {/* زرار آبل */}
                <button
                    onClick={handleAppleLogin}
                    className="btn"
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: '2px solid #818181',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderRadius: '20px',
                        height: '50px',
                        marginBottom: '10px',
                        width: '100%',
                        paddingLeft: '26px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#818181'}
                >
                    <FaApple style={{ marginRight: '10px', color: 'white', fontSize: '28px', marginLeft: '5px' }} />
                    <span style={{ marginLeft: '15px' }}>Continue with Apple</span>
                </button>

                {/* زرار الهاتف */}
                <button
                    onClick={handleMobileLogin}
                    className="btn"
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: '2px solid #818181',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderRadius: '20px',
                        height: '50px',
                        width: '100%',
                        paddingLeft: '25px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#818181'}
                >
                    <FaMobileAlt style={{ marginRight: '10px', color: 'white', fontSize: '26px', marginLeft: '5px' }} />
                    Continue with Phone Number
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
