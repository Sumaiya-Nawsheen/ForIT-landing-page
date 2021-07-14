import React from 'react';
import './Banner.css';
import iphone from '../../images/iPhone@2x.png';
import waves from '../../images/waves.png';
import ScrollMagic from 'scrollmagic';



export default function Banner() {

  var controller = new ScrollMagic.Controller();

 new ScrollMagic.Scene({
        triggerElement: '.wave'
    })
    .setClassToggle('.wave', '.moveUp')

.addTo(controller);

 new ScrollMagic.Scene({
        triggerElement: '.banner'
    })
    .setClassToggle('.wave', '.moveDown')


.addTo(controller);

    return (

      <div >
    <div className='banner'>
<div className="container overflow-hidden" >
 
 <div className="row gx-5 ml-sm-1 ml-md-1 ml-lg-8">
   {/* mobile view */}
 <div className="col-lg-5 col-sm-12">
    <div className="p-2"><img  style={{width:'90%'}} src={iphone} alt=''></img></div>
   </div>

   {/* description */}
   <div className="col-lg-6 col-sm-12" style={{color:'#ffffff',marginTop:'30px'}}>
     <div className="p-3">
     <h1 className="display-4" style={{color:'#ffffff',textAlign:'left', fontFamily: 'Secular One, sans-serif', display:'flex', justifyContent:'center', alignItems:'center'}}>Best Way to promote service</h1>
   <div>
       <p><span style={{ fontSize:'20px'}}>Quinoa retro aesthetic polaroid, Williamsburg American Apparel plaid small batch. Blue Bottle Vice fanny pack, Williamsburg roof party Wes Anderson seitan brunch before they sold out tofu scenester small batch. </span></p>
   </div>
   <div style={{marginTop:'2em', padding:'10px'}}>
   <button type="button" className="btn btn-light btn-lg" style={{borderRadius:'30px', fontSize:'22px', textAlign:'center'}}><span style={{padding:'15px', color:'#24a0ed'}}>DOWNLOAD</span></button>
   </div>
     </div>
   </div>
 </div>

 
</div>
        </div>
        <div className="wave" style={{border:'1px solid transparent', height:'1.5em'}}>
          <img src={waves} alt=""/>
      </div> 
      </div>
    
    )
}

  
