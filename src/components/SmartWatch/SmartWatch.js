import React from 'react';
import Watch from '../../images/AppleWatch.png';
import './SmartWatch.css';


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
    <div className="col">
      <div className="p-3 my-auto" style={{display:'flex', alignItem:'center', justifyContent:'center'}}>
      <img  className='vert-move' src={Watch} alt=''></img>
      </div>
    </div>
  </div>
</div>

        </div>
            </div>
   
    )
}
