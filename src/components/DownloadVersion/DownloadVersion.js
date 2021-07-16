import React from 'react';
import phone from '../../images/doublePhone.png';
import AppleStoreButton from '../../images/AppleStoreButton.png';
import GooglePlayBytton from '../../images/GooglePlayBytton.png';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';



const ClassToggleStyled = styled.div`
.section {
  height: 100vh;
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


export default function DownloadVersion() {
    return (
        <div>
                  <div className='h-lg-5000 h-sm-200'>
            <div className="container overflow-hidden">
  <div className="row gx-5 mt-5">
    <div className="col-sm-1 col-lg-6 col-md-6 my-auto">
     <div className="p-3 ">
     <div>
         <h1 style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}>Download Your Version</h1>
         </div>
         <div style={{marginTop:'1.5em',fontFamily: 'Noto Serif JP, serif'}}>
         <p>Godard pickled Etsy jean shorts beard, pour-over fanny pack mumblecore. Quinoa retro aesthetic polaroid, Williamsburg American Apparel plaid small batch. Blue Bottle Vice fanny pack, Williamsburg roof party Wes Anderson mlkshk seitan brunch before they sold out lo-fi XOXO tofu scenester small batch.</p>
         </div>
            <div className="container">
  <div className="row row-cols-1 row-cols-md-2  row-cols-lg-2 g-2 g-lg-3">
    <div className="col-sm-1">
      <div className="p-3">
      <img style={{width:'100%'}} src={AppleStoreButton} alt='AppleStoreButton'></img>
      </div>
    </div>
    <div className="col-sm-1 col-lg-6 col-md-6">
      <div className="p-3">
  
          <img style={{width:'100%'}} src={GooglePlayBytton} alt='GooglePlayBytton'></img>
      </div>
    </div>
  </div>
</div>  
     </div>
    </div>



    {/* phone view */}
    <div className="col">
      <div className="p-3 my-auto" style={{display:'flex', alignItem:'center', justifyContent:'center'}}>
      <ClassToggleStyled>
      <div className="section">
    <div id="trigger" />
    <Controller>
      <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={false}>
        {(progress, event) => (
          <div className="test">  <img src={phone} alt='' style={{width:'100%'}}></img></div>
        )}
      </Scene>
      <Scene classToggle={['.test', 'yellow']} reverse={true} indicators={false}>
        <div></div>
      </Scene>
    </Controller>
    </div>
  </ClassToggleStyled>
     
      </div>
    </div>
  </div>
</div>

        </div>
            </div>
      
    )
}
