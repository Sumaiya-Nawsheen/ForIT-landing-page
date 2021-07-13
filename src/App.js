
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Banner from './components/Banner/Banner.js';
import MainFeatures from './components/MainFeatures/MainFeatures';
import Dashboard from './components/Dashboard/Dashboard';
import SmartWatch from './components/SmartWatch/SmartWatch';
import PromoVideo from './components/PromoVideo/PromoVideo';
import Footer from './components/Footer/Footer';
import DownloadVersion from './components/DownloadVersion/DownloadVersion';
import wave from './images/download3.png';
import BeautifulInterface from './components/BeautifulInterface/BeautifulInterface';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    
    <div>
     <NavBar/>
     <Banner/>
     <MainFeatures/>
     <Dashboard/>
     <SmartWatch/>
     <PromoVideo/>
     <BeautifulInterface/>
     <Testimonials/>
     <Pricing/>
     <div class="" style={{}}>
      <img src={wave} alt='' style={{width:'100%'}}></img>
      </div>
     <DownloadVersion/>
     <Footer/>
    </div>
    
  );
}

export default App;
