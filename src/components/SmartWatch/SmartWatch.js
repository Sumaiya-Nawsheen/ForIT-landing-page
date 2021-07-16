import React from 'react';
import Watch from '../../images/AppleWatch.png';
import './SmartWatch.css';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';



const ClassToggleStyled = styled.div`
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


export default function SmartWatch() {

    return (
        <div className='h-lg-5000 h-sm-100'>
            <div className='parallax'>
            <div className="container overflow-hidden">
  <div className="row gx-5 mt-5 mb-5" >
    <div className="col">
     <div className="p-3">
     <div>
         <h1 style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}>Smart Watch Support App Version</h1>
         </div>
         <div style={{marginTop:'1.5em'}}>
         <p>Godard pickled Etsy jean shorts beard, pour-over fanny pack mumblecore. Quinoa retro aesthetic polaroid, Williamsburg American Apparel plaid small batch. Blue Bottle Vice fanny pack, Williamsburg roof party Wes Anderson mlkshk seitan brunch before they sold out lo-fi XOXO tofu scenester small batch.</p>
         </div>
         <div style={{marginTop:'2em', padding:'10px'}}>
      <button type="button" className="btn btn-lg btn-outline-primary" style={{borderRadius:'30px', fontSize:'20px', textAlign:'center'}}><span className="p-3" style={{ color:'#24a0ed'}}>LEARN MORE</span></button>
      </div>
     </div>
    </div>

    {/* image */}
    <div className="col">
      <div className="p-3 my-auto watchHeight" style={{display:'flex', alignItem:'center', justifyContent:'center'}}>
      <ClassToggleStyled>
    <div id="trigger" />
    <Controller>
      <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={false}>
        {(progress, event) => (
          <div className="test"> <img src={Watch} alt=''></img></div>
        )}
      </Scene>
      <Scene classToggle={['.test', 'yellow']} reverse={true} indicators={false}>
        <div></div>
      </Scene>
    </Controller>
  </ClassToggleStyled>
      </div>
    </div>
  </div>
</div>

        </div>
            </div>
   
    )
}
