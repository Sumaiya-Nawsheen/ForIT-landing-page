
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
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';



const ClassToggleStyled = styled.div`
.section {
  height: 65vh;
}

.test {
  transition: up 0.01s ease-out;
  width: 100%;
  height: 100px;
  margin: 0 !important;
  transform: translateY(50px);
  transition: transform 0.5s;
  
  &.yellow {
  
    transform: translateY(-30px);
  transition: transform 0.5s;
}
  }
}
.zap {
  transform: translateY(-30px);
  transition: transform 0.5s;
}
}
`;


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
     <ClassToggleStyled>
     <div className="section">
    <div id="trigger" />
    <Controller>
      <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={false}>
        {(progress, event) => (
          <div className="test"><img src={wave} alt='' style={{width:'100%'}}></img></div>
        )}
      </Scene>
      <Scene classToggle={['.test', 'yellow']} reverse={true} indicators={false}>
        <div></div>
      </Scene>
    </Controller>
    </div>
  </ClassToggleStyled>
     
  
     
     <DownloadVersion/>
     <Footer/>
    </div>
    
  );
}

export default App;
