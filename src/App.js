import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import IntroPage from './IntroPage';
import LoginPage from './LoginPage';
import Home from './Home';
import Albums from './boxes/Albums';
import Clips from './boxes/Clips';
import Movies from './boxes/Movies';
import Series from './boxes/Series';
import HormoneElSaada from './boxes/Albums/HormoneElSaada/HormoneElSaada'; // تأكد من أن هذا هو المسار الصحيح
import Aishangy from './boxes/Albums/Aishangy/Aishangy'; // تأكد من أن هذا هو المسار الصحيح
import Bahabk from './boxes/Albums/Bahabk/Bahabk'; // تأكد من أن هذا هو المسار الصحيح
import KhaleekFolazy from './boxes/Albums/KhaleekFolazy/KhaleekFolazy'; // تأكد من أن هذا هو المسار الصحيح
import EishBesho2ak from './boxes/Albums/EishBesho2ak/EishBesho2ak'; // تأكد من أن هذا هو المسار الصحيح
import OmryEbtada from './boxes/Albums/OmryEbtada/OmryEbtada'; // تأكد من أن هذا هو المسار الصحيح
import Ahwak from './boxes/Albums/Ahwak/Ahwak'; // تأكد من أن هذا هو المسار الصحيح
import Bahebakenta from './boxes/Albums/Bahebakenta/Bahebakenta'; // تأكد من أن هذا هو المسار الصحيح
import AghanyFilmOmarWeSalma3 from './boxes/Albums/AghanyFilmOmarWeSalma3/AghanyFilmOmarWeSalma3'; // تأكد من أن هذا هو المسار الصحيح
import EllyGaiAhla from './boxes/Albums/EllyGaiAhla/EllyGaiAhla'; // تأكد من أن هذا هو المسار الصحيح
import EkhtartSah from './boxes/Albums/EkhtartSah/EkhtartSah'; // تأكد من أن هذا هو المسار الصحيح
import HaeeshHayati from './boxes/Albums/HaeeshHayati/HaeeshHayati'; // تأكد من أن هذا هو المسار الصحيح
import AarrabKaman from './boxes/Albums/AarrabKaman/AarrabKaman'; // تأكد من أن هذا هو المسار الصحيح
import YaBentElEh from './boxes/Albums/YaBentElEh/YaBentElEh'; // تأكد من أن هذا هو المسار الصحيح
import EnayaBethebbak from './boxes/Albums/EnayaBethebbak/EnayaBethebbak'; // تأكد من أن هذا هو المسار الصحيح
import Hob from './boxes/Albums/Hob/Hob'; // تأكد من أن هذا هو المسار الصحيح
import FreeMixVol from './boxes/Albums/FreeMixVol/FreeMixVol'; // تأكد من أن هذا هو المسار الصحيح
import ElGannaFiBeyoutna from './boxes/Albums/ElGannaFiBeyoutna/ElGannaFiBeyoutna'; // تأكد من أن هذا هو المسار الصحيح
import Singles from './boxes/Albums/Singles/Singles'; // تأكد من أن هذا هو المسار الصحيح
import MeenMomkan from './boxes/Albums/180/MeenMomkan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/Clips" element={<Clips />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/albums/hormoneelsaada" element={<HormoneElSaada />} /> {/* تعديل هنا */}
        <Route path="/albums/Aishangy" element={<Aishangy />} />
        <Route path="/albums/Bahabk" element={<Bahabk />} />
        <Route path="/albums/KhaleekFolazy" element={<KhaleekFolazy />} />
        <Route path="/albums/EishBesho2ak" element={<EishBesho2ak />} />
        <Route path="/albums/OmryEbtada" element={<OmryEbtada />} />
        <Route path="/albums/Ahwak" element={<Ahwak />} />
        <Route path="/albums/Bahebakenta" element={<Bahebakenta />} />
        <Route path="/albums/AghanyFilmOmarWeSalma3" element={<AghanyFilmOmarWeSalma3 />} />
        <Route path="/albums/EllyGaiAhla" element={<EllyGaiAhla />} />
        <Route path="/albums/EkhtartSah" element={<EkhtartSah />} />
        <Route path="/albums/HaeeshHayati" element={<HaeeshHayati />} />
        <Route path="/albums/AarrabKaman" element={<AarrabKaman />} />
        <Route path="/albums/YaBentElEh" element={<YaBentElEh />} />
        <Route path="/albums/EnayaBethebbak" element={<EnayaBethebbak />} />
        <Route path="/albums/Hob" element={<Hob />} />
        <Route path="/albums/FreeMixVol" element={<FreeMixVol />} />
        <Route path="/albums/ElGannaFiBeyoutna" element={<ElGannaFiBeyoutna />} />
        <Route path="/albums/Singles" element={<Singles />} />
        <Route path="/albums/180/MeenMomkan" element={<MeenMomkan />} />
      </Routes>
    </Router>
  );
}

export default App;
