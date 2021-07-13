import React from 'react';
import './Footer.css';
import Macworld from '../../images/Macworld.png';
import cnet from '../../images/cnet.png';
import TNW from '../../images/TNW.png';
import forbes from '../../images/forbes.png';
import productHunt from '../../images/product-hunt.png';
import stuff from '../../images/stuff.png';
import AppleStoreButton from '../../images/AppleStoreButtonWhite.png';
import GooglePlayBytton from '../../images/GooglePlayByttonWhite.png';
import Logo from "../../images/Logo@3x.png";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram,faBehance } from '@fortawesome/free-brands-svg-icons';


const style = {
  fontSize: '20px',
  color: 'white',
}   


export default function Footer() {
    return (

        
        <div>

            {/* brand logos */}
            <div className='h-lg-300 h-sm-100' style={{background:'#cdcdcd'}}>
            <div className="container">
  <div className="row row-cols-1 row-cols-md-6  row-cols-lg-6 g-2 g-lg-3">
    <div className="col">
      <div className="p-3">
      <img style={{width:'100%'}} src={Macworld} alt='Macworld'></img>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
          <img style={{width:'100%'}} src={cnet} alt='cnet'></img>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
      <img style={{width:'100%'}} src={TNW} alt='TNW'></img>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
      <img style={{width:'100%'}} src={forbes} alt='forbes'></img>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
      <img style={{width:'100%'}} src={productHunt} alt='productHunt'></img>
      </div>
    </div>
    <div className="col">
      <div className="p-3">
      <img style={{width:'100%'}} src={stuff} alt='stuff'></img>
      </div>
    </div>
  </div>
</div>  
  </div>
 
    {/* subscribe */}
    <div className='subscribe h-lg-200 h-sm-200' style={{fontFamily: 'Noto Serif JP, serif', textAlign:'left'}}>
    <div className="container overflow-hidden">
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gx-5">
    <div className="col mt-4">
     <div className="p-3">
         <h1  style={{color:'#ffffff',textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}>Subscribe to receive free updates!</h1></div>
    </div>
    <div className="col mt-4">
      <div className="p-3">
     
  <button type="button" className="btn btn-light btn-lg" style={{borderRadius:'30px', fontSize:'20px', textAlign:'center'}}>
  <div class="row">
    <div class="col">
    <form>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" style={{border:'transparent'}}/>
  </form>
    </div>
    <div className="col">
    <button type="button" className="btn btn-primary btn-lg" style={{borderRadius:'30px', fontSize:'20px', textAlign:'center'}}><span className="p-3" style={{ color:'#FFFFFF'}}>SUBSCRIBE</span></button>

    </div>
  </div>
    </button>
</div>
    </div>
  </div>
</div>
    </div>

{/* footer */}
<div className='h-lg-300 h-sm-2000' style={{backgroundColor:'rgb(74,100,108)'}}>

<div class="container">
<div class="row align-items-center">

  {/* 1st */}
  <div className="col-lg-3 col-md-2 col-sm-1 mb-5">
  <img style={{width:'50%'}} src={Logo} alt='forit'/>
  <p className="mt-lg-4" style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif', color:'white'}}>Appico Theme is the best theme for App, SaaS, single product.</p>
  <div className="row mt-lg-5">
  <div className="col-3"> <Button variant="outline-transparent" style={style}><FontAwesomeIcon icon={faFacebookF} /></Button></div>
  <div className="col-3"> <Button variant="outline-transparent" style={style}><FontAwesomeIcon icon={faTwitter} /></Button></div>
  <div className="col-3"> <Button variant="outline-transparent" style={style}><FontAwesomeIcon icon={faInstagram} /></Button></div>
  <div className="col-3"> <Button variant="outline-transparent" style={style}><FontAwesomeIcon icon={faBehance} /></Button></div>
</div>
  </div>

  <div class="vl ml-lg-3"></div>

  {/* 2nd */}
  <div class="col-lg-3 col-md-3 col-sm-1 ml-lg-4">

  <div className="my-auto mb-lg-4">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif', color:'white'}}><a href="#" style={{textDecoration:'none', color:'white'}}>New level of the game</a></p>
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif',color:'white'}}>11.11.2016</p>
         </div>
    
         <div className="my-auto">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}><a href="#" style={{textDecoration:'none', color:'white'}}>Simple Watch Interfaces</a></p>
         </div>
         <div className="my-auto mb-lg-4">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif',color:'white'}}>10.11.2016</p>
         </div>
         <div className="my-auto">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}><a href="#" style={{textDecoration:'none', color:'white'}}>Dashboard Interaction</a></p>
         </div>
         <div className="my-auto">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif',color:'white'}}>01.11.2016</p>
         </div>

  </div>
  <div class="vl ml-lg-3"></div>

  {/* 3rd */}
  <div class="col-lg-2 col-md-2 col-sm-1 ml-lg-5">
         <div className="my-auto mb-lg-4">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif', color:'white'}}><a href="#" style={{textDecoration:'none', color:'white'}}>APP</a></p>
         </div>
         <div className="my-auto mb-lg-4">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}><a href="#" style={{textDecoration:'none', color:'white'}}>PRODUCT</a></p>
         </div>
         <div className="my-auto mb-lg-4">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}><a href="#" style={{textDecoration:'none', color:'white'}}>SAAS</a></p>
         </div>
         <div className="my-auto mb-lg-4">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}><a href="#" style={{textDecoration:'none', color:'white'}}>BLOG</a></p>
         </div>
         <div className="my-auto mb-lg-4">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}><a href="#" style={{textDecoration:'none', color:'white'}}> COMING SOON</a></p>
         </div>

  </div>
  <div class="vl ml-lg-3"></div>

  {/* 4th */}
  <div class="col-lg-2 col-md-2 col-sm-1 ml-lg-5">
        <div className="my-auto mb-lg-4">
         <p style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif', color:'white'}}>DOWNLOAD APP</p>
         </div>
      <div className="my-auto mb-lg-4">
      <img style={{width:'100%'}} src={AppleStoreButton} alt='AppleStoreButton'></img>
      </div>
      <div className="my-auto">
          <img style={{width:'100%'}} src={GooglePlayBytton} alt='GooglePlayBytton'></img>
      </div>
  
  </div>
    
  </div>
</div>
<div  className='h-150'>
  <footer style={{color:'white', textAlign:'center'}}> &copy; 2016 ForIT theme. All Rights Reserved.</footer>
</div>
</div>

        </div>
   
    )
}



 