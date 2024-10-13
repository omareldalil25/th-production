import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoTH2 from './images/LOGO TH 2.jpg';  // استيراد الصورة الجديدة

function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // الانتقال بعد 10 ثوانٍ
    const timer = setTimeout(() => {
      navigate('/login');  // توجيه المستخدم إلى صفحة تسجيل الدخول
    }, 2500); // 10 ثوانٍ

    // تنظيف المؤقت عند إلغاء التثبيت
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black'  // ضبط الخلفية لتكون سوداء
    }}>
      <img src={logoTH2} alt="TH Production Logo" style={{ width: '400px', height: 'auto', margin: '0 auto' }} />  {/* تعديل الأبعاد حسب الحاجة */}
    </div>
  );
}

export default IntroPage;
